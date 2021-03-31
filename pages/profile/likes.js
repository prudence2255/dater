import React from 'react';
import * as Imports from 'components/Imports';
import UserCard from 'components/profile/UserCard';

function Likes({user}) {
    return (
        <Imports.Layout>
             <div className="container">
             <div>
            <h4 className="text-center bg-white py-2">Likes</h4>
            </div>
                <div className="row">
                   <div className="col-md-3">
                   <div className="likes">
                        <UserCard user={''}/>
                    </div>
                   </div>
                </div>
            </div>
        </Imports.Layout>
       
    )
}

export default Imports.Auth(Likes);