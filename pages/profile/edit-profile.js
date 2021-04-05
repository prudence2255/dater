import React from 'react';
import BasicInfoForm from 'components/profile/BasicInfoForm';
import DetailInfoForm from 'components/profile/DetailInfoForm';
import * as Imports from 'components/Imports';
import Notifications from 'react-notify-toast';

function EditProfile() {
    return (
        <Imports.Layout>
          <Notifications options={{zIndex: 200, top: '50px'}}/>
        <div className="container">
            <div className="edit-profile w3-card">
                <div className="basic-info">
                    <h5>Basic Info</h5>
                    <BasicInfoForm />
                </div>
                <div className="details-info">
                    <h5>Detail Info</h5>
                    <DetailInfoForm />
                </div>
            </div>
        </div>
        </Imports.Layout>
        
    )
}

export default Imports.Auth(EditProfile);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req, query}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
    }
  );