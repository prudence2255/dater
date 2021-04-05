import React from 'react';
import {LikeIcon, MessageIcon} from 'components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import * as A from 'components/Imports';


export default function UserCard({user}) {

    const {username, profile_pictures, first_name, city} = user;

    const router = A.useRouter();
    const sendMessage = () => {
        router.push(`/profile/messages?mid=${username}`)
    }

    return (
        <div className="user-card">
        <div className="card img w3-card">
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
           <div className="user-icons">
            <button onClick={sendMessage}>
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
