import Image from 'next/image';
import React from 'react';

export default function FriendRequestCard() {
    return (
        <div className="friend-requests-card">
        <div className="card img w3-card">
        <Image className="card-img-top img-fluid profile-info-pic" src="/male-avatar.png" alt="profile picture" 
            width={200}
            height={200}
        />
        <div className="card-body">
           <div className="user-name"><b>Arahim</b>, Accra </div>
           <div className="action-btns">
            <button className="accept">
            Accept    
            </button>
            <button className="reject">
            Reject
            </button>
           </div>
        </div>
        </div>
        </div>
    )
}
