import React from 'react';
import { LeftAngleIcon } from 'components/Icons';


export default function MessageBody({thread, setShowMessages}) {

    if(!thread) return <div>Loading...</div>
    let messages;
    if(thread.messages){
         messages = thread?.messages?.map((message, i) => (
            <p key={i} className={`message-text ${message.user_id === 1 ? 'me' : 'them'}`}>
                {message.body}
            </p>
        ))
    }else{
        messages = <p className="message-text">{thread.message}</p>
    }


    return (
        <div>
        <div className="message-header">
            <div>
                <button onClick={() => setShowMessages(false)}>
                    <LeftAngleIcon size="30"
                       
                    />
                </button>
            </div>
            <div>
                hello
            </div>
        </div>
        {messages}
        </div>
    )
}
