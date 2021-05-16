import React from 'react';
import {useSelector} from 'react-redux';
import * as Imports from 'components/Imports';
import NotificationCard from 'components/profile/NotificationCard';
import {notificationsSelector} from 'store/slices/notificationsSlice';
import {getNotifications} from 'store/actions/notificationAction';
 function Notifications() {

   const {notifications} = useSelector(notificationsSelector);

    const notificationList = notifications.map((notification, i) => <NotificationCard key={i} notification={notification} 
 />)
    return (
        <Imports.Layout>
        <div className="container notifications">
       <div className="row">
        <div className="col-md-8 mx-auto">
        <div className="card">
        <div className="notifications-header card-header text-center"><h3>Notifications</h3></div>
        <div className="card-body">
        {notificationList}
         </div> 
        </div>
        </div>
       </div>
        </div>
        </Imports.Layout>
    )
}

export default Imports.Auth(Notifications);


export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(getNotifications({url: `/api/notifications`, cookie: cookie.get("token")}));
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
    }
  );