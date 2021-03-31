import React from 'react';
import Link from 'next/link';
import * as imports from 'components/Imports';
import { UserIcon,
    SettingsIcon, MessageIcon,
    NotificationIcon, ViewIcon,
    LikeIcon, RequestsIcon 
} from 'components/Icons';

export default function SideBar({show, target}) {
   
    return (
        <div className="user-sidebar">
        <div className={`user-sidebar-items ${show && target === 'toggle-sidebar' ? 'show-user-sidebar' : '' }`}>
        <div className="user-img" style={{
            backgroundImage: `url(/male-avatar.png)`
        }}>

        </div>
        <div className="profile-options">
           <nav>
               <ul>
                <li>
                 <Link href="/profile">
                <a>
               <span>
               <UserIcon />
               </span>
               <span>
               View profile
               </span>
               <span>7</span>
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
                
               <span>7</span>
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
              <span>7</span>
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
               <span>7</span>
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
                <span>7</span>
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
                    <span>7</span>
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
                <span>7</span>
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
