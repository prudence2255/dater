import React from 'react';
import {useSelector} from 'react-redux';
import * as Imports from 'components/Imports';
import MessageCard from 'components/profile/MessageCard';
import MessageBody from 'components/profile/MessageBody';
import {threads} from 'store/data/threads';
import {messagesSelector} from 'store/slices/messagesSlice';

 function Notifications() {
  const [showMessages, setShowMessages] = React.useState(false);

const {thread} = useSelector(messagesSelector);
 const threadWithMessages = threads.map((thread, i) => <MessageCard key={i} thread={thread}
     setShowMessages={setShowMessages} 
 />)
    return (
        <Imports.Layout>
        <div className="container-fluid">
        <div className="messages">
            <div className="messages-container">
                <div className="message-list w3-card">
               {threadWithMessages}
                </div>
                <div className={`message-body 
                ${showMessages ? 'show-message-modal': ''}`}>
                   <MessageBody thread={thread} setShowMessages={setShowMessages}/>
                </div>
            </div>
         </div> 
        </div>
        </Imports.Layout>
    )
}

export default Imports.Auth(Notifications);