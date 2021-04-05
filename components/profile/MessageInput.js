import React from 'react';
import {EmojiIcon, FileIcon, SendIcon} from 'components/Icons';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import FileUpload from 'components/profile/FileUpload';
import * as Imports from 'components/Imports';


export default function MessageInput({thread, mid}) {
const {user, authUser} = Imports.useSelector(Imports.usersSelector);
const [emojiBox, setEmojiBox] = React.useState();
const [emoji, setEmoji] = React.useState();
const [message, setMessage] = React.useState('');

const ref = React.useRef(null);
const inputRef = React.useRef(null);
const dispatch = Imports.useDispatch();
const cookies = new Imports.Cookies();

    const addEmoji = (e) => {
       setEmoji(e.native);
        setEmojiBox(false)
    }

    const openEmoji = () => {
        setEmojiBox(!emojiBox)
    }

    const handleSelect = () => {
        ref?.current?.click();
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = () => {
        const data = {body: message, type: 'text', recipients: user.id};
        if(Object.keys(thread).length === 0 && mid){
            dispatch(Imports.addThread({url: '/api/threads', body: data, cookie: cookies.get("token")}))
                    .then(Imports.unwrapResult).then((res) => res)
                    .catch((e) => e.message)
        }else{
        dispatch(Imports.updateThread({url: `/api/threads/${thread.id}`, body: data, cookie: cookies.get("token")}))
        .then(Imports.unwrapResult).then((res) => res)
        .catch((e) => e.message)
        }
       
    }

    return (
        <div>
        <FileUpload ref={ref} />
        <div className={`emoji-box w3-card-2 ${emojiBox ? 'show-emoji-box' : ''}`}>
                <Picker onSelect={addEmoji} />
        </div>
            <div className="message-input-contents">
                <div className="emoji-btn"><button onClick={openEmoji}><EmojiIcon /> </button></div>
                <div className="file-btn"><button onClick={handleSelect}><FileIcon /></button></div>
                <div className="message-input-box">
                    <textarea placeholder="Type a message" type="text" name="message" className="message-input"
                    onChange={handleChange} ref={inputRef} autoFocus
                    ></textarea>
                </div>
                <div>
                    {message && <button className="send-btn" onClick={sendMessage}><SendIcon /></button>}
                </div>
        </div> 
        </div>
    )
}
