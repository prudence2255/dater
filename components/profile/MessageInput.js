import React from "react";
import { EmojiIcon, FileIcon, SendIcon } from "components/Icons";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import FileUpload from "components/profile/FileUpload";
import * as Imports from "components/Imports";
import { tempMsg, tempAddMsg, setScroll } from "store/slices/messagesSlice";

export default function MessageInput({ thread, mid }) {
  const { user, authUser } = Imports.useSelector(Imports.usersSelector);
  const [emojiBox, setEmojiBox] = React.useState();
  const [emoji, setEmoji] = React.useState();
  const [message, setMessage] = React.useState("");

  const ref = React.useRef(null);
  const inputRef = React.useRef(null);
  const dispatch = Imports.useDispatch();
  const cookies = new Imports.Cookies();

  const addEmoji = (e) => {
    setEmoji(e.native);
    setMessage(message + e.native);
    setEmojiBox(false);
  };

  const openEmoji = () => {
    setEmojiBox(!emojiBox);
  };

  const handleSelect = () => {
    ref?.current?.click();
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  /**
   * if mid means its a new thread and a new thread is sent to the backend
   * otherwise the current thread is updated
   */

  const sendMessage = () => {
    let data;
    if (Object.keys(thread).length === 0 && mid) {
      data = { body: message, type: "text", recipients: user.id };
      dispatch(
        Imports.addThread({
          url: "/api/threads",
          body: data,
          cookie: cookies.get("token"),
        })
      )
        .then(Imports.unwrapResult)
        .then((res) => res)
        .catch((e) => e.message);

      dispatch(
        tempAddMsg({
          ...data,
          user_id: authUser?.id,
        })
      );
    } else {
      data = { body: message, type: "text", recipients: thread?.receiver?.id };
      /**
       * creates a temporal message
       */
      dispatch(
        tempMsg({
          ...data,
          user_id: authUser?.id,
        })
      );
      dispatch(
        Imports.updateThread({
          url: `/api/threads/${thread.id}`,
          body: data,
          cookie: cookies.get("token"),
        })
      )
        .then(Imports.unwrapResult)
        .then((res) => res)
        .catch((e) => e.message);
    }
    setMessage("");
    dispatch(setScroll(true));
  };

  return (
    <div>
      <FileUpload ref={ref} thread={thread} mid={mid} />
      <div
        className={`emoji-box w3-card-2 ${emojiBox ? "show-emoji-box" : ""}`}
      >
        <Picker onSelect={addEmoji} />
      </div>
      <div className="message-input-contents">
        <div className="emoji-btn">
          <button onClick={openEmoji}>
            <EmojiIcon />{" "}
          </button>
        </div>
        <div className="file-btn">
          <button onClick={handleSelect}>
            <FileIcon />
          </button>
        </div>
        <div className="message-input-box">
          <textarea
            placeholder="Type a message"
            type="text"
            name="message"
            className="message-input"
            onChange={handleChange}
            ref={inputRef}
            autoFocus
            value={message}
          ></textarea>
        </div>
        <div>
          {message && (
            <button className="send-btn" onClick={sendMessage}>
              <SendIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
