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
                <Image 
                src="/male-avatar.png"
                  width={60}
                  height={60}
                  className="img-fluid message-card-img"  
                />
            </div>
            <div className="message-item">
            <div><b>Alidu Arahim</b></div>
            <span>{thread.messages[0].body}</span>
            </div>
            <div className="message-item">
                <span>5:30 PM</span>
            </div>
        </div>
    )
}
