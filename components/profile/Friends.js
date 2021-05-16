import React from 'react';
import Link from 'next/link';
import UserCard from 'components/profile/UserCard';
import {CardLoader} from 'components/Loaders';
import * as Imports from 'components/Imports';
import {friendsSelector} from 'store/slices/friendsSlice';

export default function Friends({loading}) {
    const {status} = Imports.useSelector(Imports.loadersSelector);
    const {friends} = Imports.useSelector(friendsSelector);


     const userCards = friends?.map((user, i) => (<UserCard user={user} key={i}/>))

    if(loading){
        return(
              <CardLoader/> 
            )
    }


    return (
        <div>
        {friends?.length === 0 && status === 'succeeded' && (
                 <div className="row no-results">
                <div className="col-md-6 mx-auto text-center">
                <p>Your friends list is empty!</p>
                  <Link href="/profile">
                      <a className="no-results-link">Meet new friends</a>
                  </Link>
                </div>
                </div>
            )}
           <div className="friends">
              {userCards}
           </div> 
        </div>
    )
}
