import React from 'react';
import * as Imports from 'components/Imports';
import {getLikers} from 'store/actions/likeAction';
import {likesSelector} from 'store/slices/likesSlice';

function Likes() {
    const {likers} = Imports.useSelector(likesSelector);
   const userCards = likers?.map((user, i) => (<Imports.UserCard user={user} key={i}/>))
    
    return (
        <Imports.Layout>
         <div className="container likes">
         <div className="user-cards-header">
         <div className="info-box mb-3">
         <span className="info-box-icon bg-primary elevation-1"><i className="far fa-heart mr-2" /></span>
        <div className="info-box-content">
        <span className="info-box-text">Likes</span>
        <span className="info-box-number">{likers?.length}</span>
         </div>
        {/* /.info-box-content */}
        </div>

         </div>
            <div className="user-cards">
                {userCards}
             </div>
        </div>
        </Imports.Layout>
       
    )
}

export default Imports.Auth(Likes);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
       await store.dispatch(getLikers({url: `/api/likers`, cookie: cookie.get("token")}))
    }
  );

           

 