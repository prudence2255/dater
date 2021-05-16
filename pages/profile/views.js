import React from 'react';
import {useSelector} from 'react-redux';
import * as Imports from 'components/Imports';
import {viewsSelector} from 'store/slices/viewsSlice';
import {getViews} from 'store/actions/viewAction';


 function Views() {

const {views} = useSelector(viewsSelector);

const userCards = views?.map((user, i) => (<Imports.UserCard user={user} key={i}/>))
    
    return (
        <Imports.Layout>
            <div className="container views">
            <div className="user-cards-header">
            <div className="info-box mb-3">
            <span className="info-box-icon bg-primary elevation-1"><i className="far fa-eye" /></span>
            <div className="info-box-content">
            <span className="info-box-text">Likes</span>
            <span className="info-box-number">{views?.length}</span>
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

export default Imports.Auth(Views);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req,}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
       await store.dispatch(getViews({url: `/api/viewers`, cookie: cookie.get("token")}));
    }
  );
