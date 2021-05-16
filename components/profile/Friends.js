import React from 'react';
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
           <div className="friends">
              {userCards}
           </div> 
        </div>
    )
}
