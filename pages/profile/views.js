import React from 'react';
import * as Imports from 'components/Imports';
import UserCard from 'components/profile/UserCard';

 function Views({user}) {
    return (
        <Imports.Layout>
             <div className="container">
             <div>
            <h4 className="text-center bg-white py-2">Views</h4>
        </div>
                <div className="row">
                   <div className="col-md-3">
                   <div className="views">
                        <UserCard user={''}/>
                    </div>
                   </div>
                </div>
            </div>
        </Imports.Layout>
       
    )
}

export default Imports.Auth(Views);