import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as A from 'components/Imports';
import Notifications from 'react-notify-toast';


export default function Header() {
const [loading, setLoading] = React.useState(false); 
const {errors} = A.useSelector(A.errorsSelector);
const {authUser,
  new_messages_count,
  new_notifications_count,
  notifications_count,
  new_views_count,
  new_likes_count,
  new_friends_count
} = A.useSelector(A.usersSelector);


 const {profile_pictures} = authUser;

const dispatch = A.useDispatch();
    const cookies = new A.Cookies();
    const router = useRouter();
    const onLogout = () => {
        setLoading(true);
        dispatch(A.logout({url: '/api/client-logout', cookie: cookies.get("token")}))
        .then(A.unwrapResult).then(res => {
            setLoading(false);
            if(!cookies.get("token")){
                A.notify.show('Successfully logged out', 'success', 2000);
                router.push('/');
            }
        }).catch(e => setLoading(false))
    }

    const handleProfile = () => {
      router.push({pathname: '/profile/[username]', query: { username: authUser?.username }});
    }

    return (
        <>
         <Notifications options={{zIndex: 200, top: '50px'}}/>
         {loading && <A.SpinLoader loading={loading}/>} 
        {errors && <A.ShowError />}

        {/* Navbar */}
    <nav className="main-header navbar navbar-expand navbar-teal navbar-dark">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto navbar-dropdown">
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          {notifications_count > 0 ? <span className="badge badge-warning navbar-badge">{notifications_count}</span> : ''}
         
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div className="dropdown-divider" />
          {new_messages_count > 0 && (
            
            <Link href="/profile/messages">
              <a className="dropdown-item">
              <i className="fas fa-envelope mr-2" /> {new_messages_count} New message(s)
              <span className="float-right text-muted text-sm"></span>
              </a>
            </Link>
           
         
          )}
          <div className="dropdown-divider" />
          {new_notifications_count > 0 && (
           
            <Link href="/profile/notifications">
              <a className="dropdown-item">
              <i className="fas far fa-bell mr-2" /> {new_notifications_count} New notification(s)
            <span className="float-right text-muted text-sm"></span>
              </a>
            </Link>
           
         
          )}
          <div className="dropdown-divider" />
          {new_views_count > 0 && (
            <Link href="/profile/views">
              <a className="dropdown-item">
              <i className="far fa-eye mr-2" /> {new_views_count} New view(s)
            <span className="float-right text-muted text-sm"></span>
              </a>
            </Link>
          )}
          <div className="dropdown-divider" />
          {new_likes_count > 0 && (
           
            <Link href="/profile/likes">
              <a className="dropdown-item">
              <i className="far fa-heart mr-2" /> {new_likes_count} New like(s)
            <span className="float-right text-muted text-sm"></span>
              </a>
            </Link>
            
         
          )}
          <div className="dropdown-divider" />
          {new_friends_count > 0 && (
           
            <Link href="/profile/friend-requests">
              <a className="dropdown-item">
              <i className="fas fa-user-plus mr-2" /> {new_friends_count} New friend request(s)
            <span className="float-right text-muted text-sm"></span> 
              </a>
            </Link>
           
        
          )}
          <div className="dropdown-divider" />
        </div>
      </li>
       {/* User Dropdown Menu */}
       <li className="nav-item dropdown mr-5">
        <button className="nav-link" data-toggle="dropdown">
          <img src={profile_pictures?.photos?.xsmall ?? `/male-avatar.png`} className="img-fluid auth-user-avatar"/>
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div className="dropdown-divider" />
          <button className="dropdown-item" onClick={handleProfile}>
            <i className="fas fa-user mr-2" /> View profile
          </button>
          <div className="dropdown-divider" />
          <button className="dropdown-item text-capitalize" onClick={onLogout}>
            <i className="fas fa-power-off mr-2" /> Logout
          </button>
          <div className="dropdown-divider" />         
        </div>
      </li>
    </ul>
  </nav>
  {/* /.navbar */}
  </>
    )
}
