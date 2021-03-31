import React from 'react';
import {LikeIcon, MessageIcon} from 'components/Icons';
import Image from 'next/image';


export default function UserCard({user}) {
    return (
        <div className="user-card">
        <div className="card img w3-card">
        <Image className="card-img-top img-fluid profile-info-pic" src="/male-avatar.png" alt="profile picture" 
            width={200}
            height={200}
        />
        <div className="card-body">
           <div className="user-name"><b>Arahim</b>, Accra <span className="status"></span></div>
           <div className="user-icons">
            <button>
               <span>
               <MessageIcon size={25}/>
               </span>
            </button>
            <button>
               <span>
               <LikeIcon size={25}/>
               </span>
            </button>
           </div>
        </div>
        </div>
        </div>
    )
}
