import React from 'react';
import Link from 'next/link';
import {useSelector} from 'react-redux';
import * as Imports from 'components/Imports';
import {viewsSelector} from 'store/slices/viewsSlice';
import {getViews} from 'store/actions/viewAction';


function Views() {
const {authUser} = Imports.useSelector(Imports.usersSelector);
const {views} = useSelector(viewsSelector);
const {status} = Imports.useSelector(Imports.loadersSelector);
const userCards = views?.map((user, i) => (<Imports.UserCard user={user} key={i}/>))
    
    return (
        <Imports.Layout>
            <div className="container views">
            <div className="user-cards-header">
            <div className="info-box mb-3">
            <span className="info-box-icon bg-primary elevation-1"><i className="far fa-eye" /></span>
            <div className="info-box-content">
            <span className="info-box-text">Views</span>
            <span className="info-box-number">{views?.length}</span>
            </div>
            {/* /.info-box-content */}
            </div>

             </div>

             {views?.length === 0 && status === 'succeeded' && (
                 <div className="row no-results">
                <div className="col-md-6 mx-auto text-center">
                  <p>You don't have any views! Improve your profile, upload good looking pictures to attract
                  more views and conversations
                  </p>
                  <Link href="/profile/[username]" as={`/profile/${authUser?.username}`}>
                      <a className="no-results-link">Go to profile</a>
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

export default Imports.Auth(Views);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req,}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
       await store.dispatch(getViews({url: `/api/viewers`, cookie: cookie.get("token")}));
    }
  );
