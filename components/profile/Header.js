import React from 'react';
import Link from 'next/link';
import {BarsIcon, UserIcon, LogoutIcon} from 'components/Icons';
import { useRouter } from 'next/router';
import * as A from 'components/Imports';
import Notifications from 'react-notify-toast';


export default function Header({show, toggleShow, target}) {
const [loading, setLoading] = React.useState(false); 
const {errors} = A.useSelector(A.errorsSelector);

    const dispatch = A.useDispatch();
    const cookies = new A.Cookies();
    const router = useRouter();
    const onLogout = () => {
        setLoading(true);
        dispatch(A.logout({url: '/api/client-logout'}))
        .then(A.unwrapResult).then(res => {
            setLoading(false);
            if(!cookies.get("token")){
                A.notify.show('Successfully logged out', 'success', 2000);
                router.push('/');
            }
        }).catch(e => setLoading(false))
    }

    return (
        <>
         <Notifications options={{zIndex: 200, top: '50px'}}/>
         {loading && <A.SpinLoader loading={loading}/>} 
        {errors && <A.ShowError />}
        <div className="user-header-container bg-light w3-card-4">
        <div className="user-header container-fluid">
          <nav>
              <ul className="dater-list">
              <li className={`dater-list-item sidebar-toggle`}>
                  <button onClick={() => toggleShow('toggle-sidebar')} className="icon">
                      <BarsIcon />
                  </button>
              </li>
                  <li className="dater-list-item logo-link">
                      <Link href="/">
                          <a>
                          Logo
                          </a>
                      </Link>
                  </li>
                  <li className="dater-list-item user-dropdown">
                    <button onClick={() => toggleShow('user-pop')} ><span className="user-name d-none d-lg-block">Arahim</span>
                    <img
                    src="/female-avatar.png"
                    alt="Picture of the author"
                    width="30"
                    height="30"
                    className="user-avatar"
                    />
                    </button>
                    <ul className={`w3-card-4 ${show && target === 'user-pop' ? 'show-popup': '' }`} >
                        <li className="dater-list-item">
                        <Link href="/profile">
                            <a> <UserIcon /> View Profile</a>
                        </Link>
                        </li>  
                        <li className="dater-list-item">
                        <button onClick={onLogout}>
                           <LogoutIcon /> Logout
                        </button>
                        </li>  
                    </ul>
                  </li>
              </ul>
          </nav>  
        </div>
        </div>
        </>
    )
}
