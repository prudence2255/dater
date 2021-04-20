import React from 'react';
import {useDispatch} from 'react-redux';
import {setThread} from 'store/slices/messagesSlice';
import * as Imports from 'components/Imports';

export default function MessageCard({thread, id, setShowMessages}) {
  const messages = Imports.useSelector(Imports.messagesSelector);
    const dispatch = useDispatch();
    const cookies = new Imports.Cookies();
    
    const currentThread = (current) => {
            dispatch(setThread(current));
            dispatch(Imports.getThread({url: `/api/threads/${current.id}`, cookie: cookies.get("token")}));
           setShowMessages(true);
     }
const {profilePic, lastMessage, lastMessageTime, receiver,
      last_read, count,
     } = thread;

     return (
        <div onClick={() => currentThread(thread)} className={`message-card ${id === messages?.thread?.id ? 'active-thread' : ''}`}>
            <div className="img-container message-item">
                <img 
                src={profilePic?.profile_picture?.photos?.xsmall ?? `/male-avatar.png`}
                  width="60"
                  height="60"
                  className="img-fluid message-card-img"  
                />
            </div>
            <div className="message-item last-message-el">
            <div className="first-name">{receiver?.first_name}</div>
    
            <span className={`${last_read ? '' : 'no-read'}`}>{lastMessage}</span>
            
            </div>
            <div className="message-item time">
                <span>{new Date(lastMessageTime).toLocaleTimeString()}</span><br />
                <span className={`${count ? 'count' : ''}`}>{count !== 0 ? count : ''}</span>
            </div>
        </div>
    )
}
