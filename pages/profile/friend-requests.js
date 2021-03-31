import React from 'react';
import * as Imports from 'components/Imports';
import FriendRequestCard from 'components/profile/FriendRequestCard';

 function FriendRequests({user}) {
    return (
        <Imports.Layout>
             <div className="container">
             <div>
                <h4 className="text-center bg-white py-2">Friend Requests</h4>
                </div>
                <div className="row">
                   <div className="col-md-3">
                   <div className="friend-requests">
                        <FriendRequestCard user={''}/>
                    </div>
                   </div>
                </div>
            </div>
        </Imports.Layout>
       
    )
}

export default Imports.Auth(FriendRequests);