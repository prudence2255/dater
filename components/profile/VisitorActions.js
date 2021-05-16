import React from 'react';
import {MessageIcon, AddFriendIcon, LikeIcon} from 'components/Icons';
import { sendFriendRequest } from 'store/actions/friendActions';
import {like, unlike, getLikes} from 'store/actions/likeAction';
import {isPresent} from 'components/helpers/isPresent';
import {likesSelector} from 'store/slices/likesSlice';
import {friendsSelector} from 'store/slices/friendsSlice';
import * as A from 'components/Imports';

export default function VisitorActions({user}) {
    const [isLike, setIsLike] = React.useState(null)
    const [isFriend, setIsFriend] = React.useState(null)
    const [isRequest, setIsRequest] = React.useState(null)
    const {likes} = A.useSelector(likesSelector);
    const {authUserFriends, myFriendRequests} = A.useSelector(friendsSelector);
    
    const dispatch = A.useDispatch();
    const cookies = new A.Cookies();
    const {username} = user;
    const router = A.useRouter();

    const sendMessage = () => {
        router.push(`/profile/messages?mid=${username}`)
    }


    /**
     * handles like and dislike
     */

     const handleLike = () => {
        if(isLike){
             setIsLike(false)
           dispatch(unlike({url: `/api/unlike`, body: {client_id: user.id}, cookie: cookies.get("token")}));      
        }else{
            setIsLike(true) 
            dispatch(like({url: `/api/like`, body: {client_id: user.id}, cookie: cookies.get("token")}));    
        }
    }


    /**
     * sends a friend request
     */
    const handleFriendRequest = () => {
        setIsRequest(true);
        dispatch(sendFriendRequest({url: `/api/send-friend-request`, body: {client_id: user.id}, cookie: cookies.get("token")}))
        }

    React.useEffect(() => {
        dispatch(getLikes({url: `/api/likes`, cookie: cookies.get("token")}));
     }, []);
 
 
     React.useEffect(() => {
      setIsLike(isPresent(likes, user));
     }, [likes?.length > 0 && likes[0].id, user?.id]);


     React.useEffect(() => {
        setIsFriend(isPresent(authUserFriends, user));
       }, [authUserFriends?.length > 0 && authUserFriends[0].id, user?.id]);
  
       React.useEffect(() => {
        setIsRequest(isPresent(myFriendRequests, user));
       }, [myFriendRequests?.length > 0 && myFriendRequests[0].id, user?.id]);

    let FriendStatus;

    if(isFriend){
        FriendStatus = <span>Friends</span>;
    }else if(isRequest){
        FriendStatus = <span>Request sent</span>;
    }else{
        FriendStatus = <button onClick={handleFriendRequest}>
                        <AddFriendIcon />
                         </button>
    }

    return (
        <>
         <div className="visitor-actions-panel">
         <div>
         <button onClick={sendMessage}>
            <MessageIcon />
            </button>
         </div>
         <div>
         {FriendStatus}
         </div>
         <div>
         <button className={`like-btn ${isLike ? 'liked' : ''}`} onClick={handleLike}>
            <LikeIcon />
            </button>
         </div>  
        </div> 
        </>
    )
}
