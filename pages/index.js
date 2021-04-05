import React from 'react';
import Head from 'next/head';
import Echo from 'laravel-echo';
import socketio from 'socket.io-client';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Pusher from 'pusher-js';
import Home from 'components/public/Home';
import Login from 'components/profile/Login';
import * as imports from 'components/Imports';
import Notifications from 'react-notify-toast';
import { useRouter } from 'next/router';



const index = () => {
  const [loginModal, setLoginModal] = React.useState();
  const {errors} = imports.useSelector(imports.errorsSelector);
  const {loading} = imports.useSelector(imports.loadersSelector);
 

  const cookies = new imports.Cookies();
  const router = useRouter();
  React.useEffect(() => {
    if(cookies.get("token")){
      router.push('/profile');
    }
  }, [])
  return (
    <div className="home-container">
    <Notifications options={{zIndex: 200, top: '50px'}}/>
    {loading && <imports.SpinLoader loading={loading}/>} 
      {errors && <imports.ShowError />}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-header w3-card-4">
      <Login loginModal={loginModal} setLoginModal={setLoginModal}/>
          <div className="container">
            <nav className="home-nav-items">
            <div className="dater-logo">
              Logo
            </div>
             <div>
             <span>Already a member?</span>
             </div>
            <div>
            <button className="dater-login-btn" title="login"
            onClick={() => setLoginModal(true)}
            >LOG IN</button>
            </div>
            </nav>
          </div>
      </div>
        <main className="home-main-content">
          
            <Home />

        </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default index;