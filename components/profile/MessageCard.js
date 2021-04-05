import React from 'react';
import Image from 'next/image';
import {useDispatch} from 'react-redux';
import {setThread} from 'store/slices/messagesSlice';

export default function MessageCard({thread, setShowMessages}) {

    const dispatch = useDispatch();
    const currentThread = (current) => {
            dispatch(setThread(current));
           setShowMessages(true);
     }
const {profilePic, lastMessage, lastMessageTime, receiver,
      last_read, count,
     } = thread;

 if(typeof window !== 'undefined'){
const threadContainer = document.querySelector(".message-list");

const threads = threadContainer?.getElementsByClassName("message-card");

for (let i = 0; i < threads?.length; i++) {
  threads[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active-thread");

    if (current?.length > 0) {
      current[0].className = current[0].className.replace(" active-thread", "");
    }

    this.className += " active-thread";
  });
}
    }


     return (
        <div onClick={() => currentThread(thread)} className="message-card ">
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
