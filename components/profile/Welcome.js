import React from 'react';
import Link from 'next/link';
import * as Imports from 'components/Imports';
export default function Welcome({user, setShow}) {
    
    const {first_name} = user;

    const cookies = new Imports.Cookies();
    const handleClose = () => {
      cookies.remove('info', {path: '/'});
      setShow(false) 
    }

      if(typeof window !== 'undefined'){
        const modal = document.querySelector(".welcome-dialog");
       window.addEventListener('click', (e) => {
       if(e.target === modal){
        cookies.remove('info', {path: '/'});
        setShow(false)
       }
       })
        }
    

    return (
    <div className={`welcome-dialog `}>
    <div className="card w3-card-2">
      <div className="card-header">
        <h3 className="card-title text-center">Welcome {first_name}</h3>
        <button type="button" className="close" onClick={handleClose}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="card-body">
        <p>
        Thank you for joining Dater.com!
        Congratulations on taking this important step toward meeting the person of your dreams. We look forward to helping you achieve this goal, and here's what you can do right now to maximize your success:
      <br />
        Complete your profile and post your photo if you haven't done so already.
        You'll get many more responses if you show your face. First impressions are important.
        Treat people with respect and kindness. Respect shown to others is respect earned.
        Start searching and send messages to people who interest you. Your special someone is out there waiting for you!
      <br />
        If there's anything we can do to make your experience more valuable, we want to know. Don't hesitate to contact Us with any questions, concerns or suggestions you may have.
        Best of luck in your search,
        Your friends at Dater.com
        </p>
        <br />
        <Link href={`/profile/[username]`} as={`/profile/${user?.username}`}>
          <a className="btn btn-primary p-2 mb-2 mr-auto ml-auto w-50" onClick={handleClose}>View profile</a>
        </Link>
      </div>
    </div>
    {/* /.modal-content */}
  </div>
    )
}


