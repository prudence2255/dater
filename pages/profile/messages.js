import React from 'react';
import {useSelector} from 'react-redux';
import * as Imports from 'components/Imports';
import MessageCard from 'components/profile/MessageCard';
import MessageBody from 'components/profile/MessageBody';
import {messagesSelector} from 'store/slices/messagesSlice';
import { LeftAngleIcon } from 'components/Icons';
import dynamic from 'next/dynamic';
import TransformThreads from 'components/helpers/transformThreads';
import {setThread} from 'store/slices/messagesSlice';

const MessageInput = dynamic(
    () => import('components/profile/MessageInput'),
    { ssr: false }
  );

 function Messages() {
 const [showMessages, setShowMessages] = React.useState(false);
 const {user, authUser} = Imports.useSelector(Imports.usersSelector);
 const {thread, threads} = useSelector(messagesSelector);

 const threadsClass = new TransformThreads(threads, authUser);
 const newThreads = threadsClass?.getThreads();
 const threadWithMessages = newThreads?.map((thread, i) => <MessageCard key={i} thread={thread}
     setShowMessages={setShowMessages} 
 />)

 const router = Imports.useRouter();
 const dispatch = Imports.useDispatch();
const {mid} = router.query;

/**
 * check if there is already a thread containing the user
 */
React.useEffect(() => {
    if(mid){
        const oldThread = threads?.find(thread => thread?.users?.map(user => user?.username === mid));
        oldThread && dispatch(setThread(oldThread));
    }
}, [mid]);

    return (
        <Imports.Layout>
        <div className="container-fluid">
        <div className="messages">
        <div className={`message-input-container ${showMessages || mid ? 'show-message-input': ''}`}>
                <MessageInput thread={thread} mid={mid}/>
        </div>
        <div className={`message-header w3-card-2 ${showMessages || mid ? 'show-message-header': ''}`}>
            <div>
                <button onClick={() => setShowMessages(false)} >
                    <LeftAngleIcon size="30"       
                    />
                </button>
            </div>
            <div>
               
            </div>
        </div>
            <div className="messages-container">
                <div className="message-list w3-card">
               {threadWithMessages}
                </div>
                <div className={`message-body 
                ${showMessages || mid ? 'show-message-modal': ''}`}>
                   <MessageBody thread={thread} setShowMessages={setShowMessages}/>
                
                </div>
            </div>
         </div> 
        </div>
        </Imports.Layout>
    )
}

export default Imports.Auth(Messages);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req, query}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       query?.mid && await store.dispatch(Imports.getUser({url: `/api/clients/${query.mid}`, cookie: cookie.get("token")}));
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
       await store.dispatch(Imports.getThreads({url: `/api/get-threads`, cookie: cookie.get("token")}));
    }
  );