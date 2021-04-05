import React from 'react';
import * as Imports from 'components/Imports';
import Files from 'components/profile/File';


export default function MessageBody({thread}) {

    const {authUser} = Imports.useSelector(Imports.usersSelector);
    if(!thread) return <div>Loading...</div>
   
    const messages = thread?.messages?.map((message, i) => {
             if(message?.type !== 'text'){
           return (
             <div key={i} className={`message-text ${message.user_id === authUser?.id ? 'me' : 'them'}`}>
            <Files url={message?.file_url} file={{type: message?.type}}/>
             </div>
             )    
         }
        else{
            return (
             <div key={i} className={`message-text ${message.user_id === authUser?.id ? 'me' : 'them'}`}>
                {message.body}
             </div>
                )
            }
         })
    


    return (
        <div>
        {messages}
        </div>
    )
}