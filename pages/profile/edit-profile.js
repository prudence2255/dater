import React from 'react';
import BasicInfoForm from 'components/profile/BasicInfoForm';
import DetailInfoForm from 'components/profile/DetailInfoForm';
import * as Imports from 'components/Imports';

function EditProfile() {
    return (
        <Imports.Layout>
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