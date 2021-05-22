import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
        <title>dater.com</title>
          <meta name="og:description" content="
          Dater.com is the The Best Social Network And Dating Site For Live Chatting 
          And Finding New Friends. Virtually Meet Thousands Of Like-Minded Singles And Connect At Lightning Speed.
          " />
           <meta name="og:image" content="/home-img.jpg" />
        <link rel="icon" href="/dater-fav-ico.png" />
      </Head>
      <div className="home-header w3-card-4">
      <Login loginModal={loginModal} setLoginModal={setLoginModal}/>
          <div className="container">
            <nav className="home-nav-items">
            <div className="dater-logo">
              <Link href="/">
                <a>
                  <img src="/dater-fav-ico.png" alt="Dater.com"
                    className="img-fluid img-circle" width="40" height="40"
                  />
                </a>
              </Link>
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