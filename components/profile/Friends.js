import React from 'react';
import UserCard from 'components/profile/UserCard';

export default function Friends({friends}) {
    return (
        <div>
           <div className="row">
               {/* {friends || [].map((user, i) => ( */}
                <div className="col-md-4" >
                <div className="friend-card">
                    <UserCard user={''}/>
                </div>

                </div> 
               {/* ))} */}
           </div> 
        </div>
    )
}
