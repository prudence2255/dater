import React from 'react';
import Link from 'next/link';
import * as imports from 'components/Imports';
import ActiveLink from 'components/ActiveLink';


export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = React.useState(undefined);

   const {
     authUser,
     new_messages_count,
     new_notifications_count,
     new_views_count,
     new_likes_count,
     new_friends_count
    } = imports.useSelector(imports.usersSelector);

 const {username, profile_pictures} = authUser;

    return (
        <>
{/* Main Sidebar Container */}
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <div className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></div>
    {/* Brand Logo */}
    <Link href="/profile">
    <a className="brand-link">
      <img src="/dater-fav-ico.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Dater.com</span>
    </a>
    </Link>
    
    {/* Sidebar */}
    <div className="sidebar">
      <div className="user-panel-box" style={{
        backgroundImage: `url(${profile_pictures?.photos?.xsmall ?? `/male-avatar.png`})`
      }}> 
      <span>{authUser?.first_name?.slice(0, 1)}{authUser?.last_name?.slice(0, 1)}</span>
      </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

         
          <li className="nav-item">
           <ActiveLink href="/profile" activeClassName="active-link">
           <a className="nav-link">
              <i className="nav-icon fas fa-users" />
              <p>
               Meet Friends
              </p>
            </a>
           </ActiveLink>
          </li>
          <li className="nav-item">
           <ActiveLink href={`/profile/[username]`} as={`/profile/${username}`} activeClassName="active-link">
           <a className="nav-link">
              <i className="nav-icon far fa-user" />
              <p>
               View Profile
              </p>
            </a>
           </ActiveLink>
          </li>
          <li className="nav-item">
           <ActiveLink href="/profile/account-settings" activeClassName="active-link">
           <a className="nav-link">
              <i className="nav-icon fas fa-cog" />
              <p>
              Account Settings
              </p>
            </a>
           </ActiveLink>
          </li>
          <li className="nav-item">
          <ActiveLink href="/profile/messages" activeClassName="active-link">
          <a className="nav-link">
              <i className="nav-icon fas fa-envelope" />
              <p>
               Messages
               {new_messages_count > 0 ? <span className="badge badge-info right">{new_messages_count}</span> : ''}
               
              </p>
            </a>
          </ActiveLink>  
          </li>
          <li className="nav-item">
          <ActiveLink href="/profile/notifications" activeClassName="active-link">
          <a className="nav-link">
              <i className="nav-icon far fa-bell" />
              <p>
              Notifications
               {new_notifications_count > 0 ? <span className="badge badge-info right">{new_notifications_count}</span> : ''}
               
              </p>
            </a>
          </ActiveLink>  
          </li>
          <li className="nav-item">
          <ActiveLink href="/profile/views" activeClassName="active-link">
          <a className="nav-link">
              <i className="nav-icon far fa-eye" />
              <p>
              Views
               {new_views_count ? <span className="badge badge-info right">{new_views_count}</span> : ''}
               
              </p>
            </a>
          </ActiveLink>  
          </li>
          <li className="nav-item">
          <ActiveLink href="/profile/likes" activeClassName="active-link">
          <a className="nav-link">
              <i className="nav-icon far fa-heart" />
              <p>
               Likes
               {new_likes_count ? <span className="badge badge-info right">{new_likes_count}</span> : ''}
               
              </p>
            </a>
          </ActiveLink>  
          </li>
          <li className="nav-item">
          <ActiveLink href="/profile/friend-requests" activeClassName="active-link">
          <a className="nav-link">
              <i className="nav-icon fas fa-user-plus" />
              <p>
              Friend Requests
              {new_friends_count ? <span className="badge badge-info right">{new_friends_count}</span> : ''}
               
              </p>
            </a>
          </ActiveLink>  
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
    </aside>
        </>
    )
}
