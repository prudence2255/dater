import React from "react";
import { useDispatch } from "react-redux";
import { setThread } from "store/slices/messagesSlice";
import * as Imports from "components/Imports";

export default function MessageCard({ thread, id, setShowMessages }) {
  const messages = Imports.useSelector(Imports.messagesSelector);
  const dispatch = useDispatch();
  const cookies = new Imports.Cookies();

  const currentThread = (current) => {
    dispatch(setThread(current));
    dispatch(
      Imports.getThread({
        url: `/api/threads/${current.id}`,
        cookie: cookies.get("token"),
      })
    );
    dispatch(Imports.setScroll(true));

    setShowMessages(true);
  };
  const {
    profilePic,
    lastMessage,
    lastMessageTime,
    receiver,
    last_read,
    newMessageCount,
  } = thread;

  return (
    <>
      <div
        onClick={() => currentThread(thread)}
        className={`message-card ${
          id === messages?.thread?.id ? "active-thread" : ""
        }`}
      >
        <div className="img-container message-item">
          <img
            src={
              profilePic?.profile_picture?.photos?.xsmall ?? `/male-avatar.png`
            }
            className="img-fluid message-card-img"
          />
        </div>
        <div className="message-item last-message-el">
          <div className="first-name">
            {receiver?.first_name?.substring(0, 10) + "..."}
          </div>

          <span className={`${last_read ? "" : "no-read"}`}>{lastMessage}</span>
        </div>
        <div className="message-item time">
          <span>{new Date(lastMessageTime).toLocaleTimeString()}</span>
          <br />
          <span className={`${newMessageCount ? "count" : ""}`}>
            {newMessageCount !== 0 ? newMessageCount : ""}
          </span>
        </div>
      </div>
      <div className="dropdown-divider" />
    </>
  );
}
