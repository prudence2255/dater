import React from 'react';
import Link from 'next/link';
import * as Imports from 'components/Imports';
import FriendRequestCard from 'components/profile/FriendRequestCard';
import { getFriendRequests } from 'store/actions/friendActions';
import {friendsSelector} from 'store/slices/friendsSlice';


 function FriendRequests() {
    const {friendRequests} = Imports.useSelector(friendsSelector);
    const {status} = Imports.useSelector(Imports.loadersSelector);
    

   const userCards = friendRequests?.map((user, i) => (<FriendRequestCard user={user} key={i}/>))
       
       return (
           <Imports.Layout>
               <div className="container requests">
               <div className="user-cards-header">
               <div className="info-box mb-3">
                <span className="info-box-icon bg-primary elevation-1"><i className="fas fa-user-plus" /></span>
                <div className="info-box-content">
                <span className="info-box-text">Friend requests</span>
                <span className="info-box-number">{friendRequests?.length}</span>
                </div>
                {/* /.info-box-content */}
                </div>

                </div>
                {friendRequests?.length === 0 && status === 'succeeded' && (
                 <div className="row no-results">
                <div className="col-md-6 mx-auto text-center">
                  <p>Your friend requests list is empty!</p>
                  <Link href="/profile">
                      <a className="no-results-link">Meet new friends</a>
                  </Link>
                </div>
                </div>
                )}
       
               <div className="user-cards">
                   {userCards}
                </div>
           </div>
           </Imports.Layout>
       )
}

export default Imports.Auth(FriendRequests);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req,}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
       await store.dispatch(getFriendRequests({url: `/api/friend-requests`, cookie: cookie.get("token")}));
    }
  );
