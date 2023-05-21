import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import * as Imports from "components/Imports";
import MessageCard from "components/profile/MessageCard";
import MessageBody from "components/profile/MessageBody";
import { messagesSelector } from "store/slices/messagesSlice";
import { LeftAngleIcon } from "components/Icons";
import dynamic from "next/dynamic";
import TransformThreads from "components/helpers/transformThreads";
import {
  setThread,
  addRealTimeThread,
  updateRealTimeThread,
} from "store/slices/messagesSlice";
import io from "socket.io-client";

const MessageInput = dynamic(() => import("components/profile/MessageInput"), {
  ssr: false,
});

function Messages() {
  const [showMessages, setShowMessages] = React.useState(false);
  const [newThreadUser, setNewThreadUser] = React.useState(null);
  const [preview, setPreview] = React.useState(false);
  const { status } = Imports.useSelector(Imports.loadersSelector);

  const { authUser, user } = Imports.useSelector(Imports.usersSelector);
  const { thread, threads, scroll } = useSelector(messagesSelector);
  const scrollRef = React.useRef(null);
  const router = Imports.useRouter();
  const dispatch = Imports.useDispatch();
  const { mid } = router.query;

  const threadsClass = new TransformThreads(threads, authUser);
  const newThreads = threadsClass?.getThreads();
  const threadWithMessages = newThreads?.map((thread, i) => (
    <MessageCard
      key={i}
      thread={thread}
      setShowMessages={setShowMessages}
      id={thread?.id}
    />
  ));

  const currentThread = newThreads?.find((current) => current.id === thread.id);

  //const {profilePic, receiver} = currentThread;
  /**
   * real time messaging
   */
  const host = process.env.NODE_ENV ? "191.96.53.2" : "127.0.0.1";
  const socket = io(`https://${host}:8005`);

  socket.on("connect", function () {
    socket.emit("user_connected", authUser?.id);
  });

  socket.on("updateUserStatus", (data) => {
    // console.log(data)
  });

  socket.on("message:message.created", function (message) {
    const oldThread = newThreads?.find(
      (thread) => thread.id === message.thread.id
    );
    if (oldThread) {
      dispatch(updateRealTimeThread(message));
    } else {
      dispatch(addRealTimeThread(message));
    }
  });

  /**
   * check if there is already a thread containing the user
   */

  React.useEffect(() => {
    if (mid) {
      setShowMessages(true);
      const oldThread = newThreads?.find(
        (thread) => thread?.receiver?.username === mid
      );
      oldThread && dispatch(setThread(oldThread));
    }
  }, [mid, newThreads[0]?.id]);

  React.useEffect(() => {
    if (Object.keys(thread).length === 0 && mid) {
      setNewThreadUser(user);
    } else {
      setNewThreadUser(null);
    }
  }, [user?.first_name]);

  React.useEffect(() => {
    if (scroll) {
      scrollRef?.current?.scroll({
        top: scrollRef?.current?.scrollHeight,
        behavior: "instant",
      });
    }
  }, [scroll]);

  return (
    <Imports.Layout>
      <div className="container-fluid">
        <div className="messages">
          <div
            className={`message-input-container ${
              showMessages ? "show-message-input" : ""
            }`}
          >
            <MessageInput thread={thread} mid={mid} />
          </div>
          <div
            className={`message-header w3-card-2 d-flex ${
              showMessages ? "show-message-header" : ""
            } `}
          >
            <button onClick={() => setShowMessages(false)}>
              <LeftAngleIcon size="30" />
            </button>

            {/**
            current thread user
             */}
            {newThreadUser && !currentThread && (
              <div className="current-thread-user mr-auto ml-auto">
                <div className="mx-2">
                  <img
                    src={
                      user?.profile_pictures?.photos?.xsmall ??
                      `/male-avatar.png`
                    }
                    className="img-fluid message-header-img"
                  />
                </div>
                <div className="mx-2 text-dark mt-3">{user?.first_name}</div>
              </div>
            )}

            {currentThread && (
              <div className="current-thread-user mr-auto ml-auto">
                <div className="mx-2">
                  <img
                    src={
                      currentThread?.profilePic?.profile_picture?.photos
                        ?.xsmall ?? `/male-avatar.png`
                    }
                    className="img-fluid message-header-img"
                  />
                </div>
                <div className="mx-2 text-dark mt-3">
                  {currentThread?.receiver?.first_name}
                </div>
              </div>
            )}
            {/**
            end current thread user
             */}
          </div>
          <div className="messages-container">
            <div className="message-list w3-card">
              {threads?.length === 0 && status === "succeeded" && (
                <div className="row no-results">
                  <div className="col-md-6 mx-auto text-center">
                    <p>
                      You don't have any messages! meet friends and start
                      chatting
                    </p>
                    <Link href="/profile">
                      <a className="no-results-link">Meet friends</a>
                    </Link>
                  </div>
                </div>
              )}

              {threadWithMessages}
            </div>
            <div
              ref={scrollRef}
              className={`message-body ${preview ? "add-z-index" : ""}
                ${showMessages ? "show-message-modal" : ""}`}
            >
              <MessageBody
                thread={thread}
                setShowMessages={setShowMessages}
                preview={preview}
                setPreview={setPreview}
              />
            </div>
          </div>
        </div>
      </div>
    </Imports.Layout>
  );
}

export default Imports.Auth(Messages);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
  async ({ store, req, query }) => {
    const cookie = new Imports.Cookies(req.headers.cookie);
    query?.mid &&
      (await store.dispatch(
        Imports.getUser({
          url: `/api/clients/${query.mid}`,
          cookie: cookie.get("token"),
        })
      ));
    await store.dispatch(
      Imports.authUser({ url: `/api/auth-user`, cookie: cookie.get("token") })
    );
    await store.dispatch(
      Imports.getThreads({
        url: `/api/get-threads`,
        cookie: cookie.get("token"),
      })
    );
  }
);
