import React from 'react';
import Link from 'next/link';
import * as imports from 'components/Imports';
import { UserIcon,
    SettingsIcon, MessageIcon,
    NotificationIcon, ViewIcon,
    LikeIcon, RequestsIcon,
    FriendsIcon 
} from 'components/Icons';

export default function SideBar({show, target}) {
   const {authUser} = imports.useSelector(imports.usersSelector);

    return (
        <div className="user-sidebar">
        <div className={`user-sidebar-items ${show && target === 'toggle-sidebar' ? 'show-user-sidebar' : '' }`}>
        <div className="user-img" style={{
            backgroundImage: `url(${authUser?.profile_pictures?.photos?.xsmall ?? '/male-avatar.png'})`
        }}>

        </div>
        <div className="profile-options">
           <nav>
               <ul>
               <li>
                 <Link href={`/profile`}>
                <a>
               <span>
               <FriendsIcon />
               </span>
               <span>
               Meet Friends
               </span>
               <span></span>
                </a>
                 </Link>
                   </li>

                <li>
                 <Link href={`/profile/[username]`} as={`/profile/${authUser?.username}`}>
                <a>
               <span>
               <UserIcon />
               </span>
               <span>
               View profile
               </span>
               <span></span>
                </a>
                 </Link>
                   </li>

                   <li>
               <Link href="/account">  
                <a>
                <span>
               <SettingsIcon />
               </span>
                <span>
                Account Settings
                </span>
               <span></span>
                </a>
                </Link>
                   </li>

                <li>
                 <Link href="/profile/messages"> 
                <a>
                <span>
               <MessageIcon />
               </span>
              <span>
              Messages
              </span>
              {authUser?.new_messages ? <span className="count">{authUser?.new_messages}</span> : 
              <span></span>
               }
            
                </a>
                 
                </Link>
                 </li>

                <li>
               <Link href="/profile/notifications">
                  
                <a>
                <span>
               <NotificationIcon />
               </span>
               <span>
               Notifications
               </span>
               <span className="count">{authUser?.new_notifications ?? 0}</span>
               </a>
               
                 </Link>
                </li>

                <li>
                <Link href="/profile/views">
                  
                <a>
                <span>
               <ViewIcon />
               </span>
               <span>
               Views
               </span>
                <span className="count">{authUser?.new_views ?? 0}</span>
                </a>
               
                 </Link>
                 </li>


                   <li>
                   <Link href="/profile/likes">
                  
                    <a>
                    <span>
                  <LikeIcon />
                  </span>
                    <span>
                    Likes
                    </span>
                    <span className="count">{authUser?.new_likes ?? 0}</span>
                    </a>
                   
                   </Link>
                   </li>


                <li>
                   <Link href="/profile/friend-requests">
                  
                 <a>
                 <span>
               <RequestsIcon />
               </span>
                <span>
                Friend Requests
                </span>
                <span className="count">{authUser?.new_requests ?? 0}</span>
                 </a>
                   </Link>
                 </li>
               </ul>
           </nav>
        </div>
        </div>
        </div>
    )
}
