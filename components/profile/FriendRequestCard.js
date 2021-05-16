import React from 'react';
import * as Imports from 'components/Imports';
import {acceptFriendRequest, rejectFriendRequest } from 'store/actions/friendActions';
import {setFriendRequests} from 'store/slices/friendsSlice';
import Link from 'next/link';


export default function FriendRequestCard({user}) {

    const {username, profile_pictures, first_name, city} = user;
    const dispatch = Imports.useDispatch();
    const cookies = new Imports.Cookies();

    const handleAccept = () => {
      dispatch(setFriendRequests({id: user.id}));
        dispatch(acceptFriendRequest({
            url: `/api/accept-friend-request`,
             body: {client_id: user.id},
            cookie: cookies.get("token")}));
        }


     const handleReject = () => {
        dispatch(setFriendRequests({id: user.id}));
        dispatch(rejectFriendRequest({
            url: `/api/reject-friend-request`,
             body: {client_id: user.id},
            cookie: cookies.get("token")}));
        }

    return (
        <div className="user-card friend-requests-card">
        <div className="card img">
        <Link href={`/profile/[username]`} as={`/profile/${username}`}>
            <a>
            <img className="card-img-top img-fluid user-card-img" src={profile_pictures?.photos?.small ?? `/male-avatar.png`}
             alt="profile picture" 
            />
            </a>
        </Link>
        <div className="card-body">
        <Link href={`/profile/[username]`} as={`/profile/${username}`}>
            <a>
            <div className="user-name"><b>{first_name}</b>, {city} <span className="status"></span></div>
            </a>
        </Link>
           <div className="action-btns">
            <button className="accept" onClick={handleAccept}>
              Accept
            </button>
            <button className="reject" onClick={handleReject}>
               Reject
            </button>
           </div>
        </div>
        </div>
        </div>
    )
}
