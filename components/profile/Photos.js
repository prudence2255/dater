import React from 'react';
import Image from 'next/image';
import ImageUpload from 'components/profile/ImageUpload';
import * as Imports from 'components/Imports';
import {CardLoader} from 'components/Loaders';

export default function Photos({loading}) {
    const {user, authUser, photos} = Imports.useSelector(Imports.usersSelector);
    const {status} = Imports.useSelector(Imports.loadersSelector);

    if(loading){
        return(
            <div className="row">
                {[1,2,3,4,5,6].map((item, i) => (
                   <CardLoader key={i}/>
                ))}
            </div>
        )
    }

    if(photos?.length === 0 && status === 'succeeded'){
        return (
            <div className="row">
              <div className="col-md-4 mx-auto mt-5">
              <h5 className="text-center">There are no photos!</h5>
              {user?.username === authUser?.username && (
            <div className="mx-auto mt-3 text-center">
                    <ImageUpload btn="photo-upload"/>
           </div>     
           )}
              </div>
            </div>
        )
    }

    const images = photos?.map((obj, i) => (
        <div className="col-md-3" key={i}>
        <div className="photo">
        <Image 
         src={obj?.photos?.xsmall}
        className="img-fluid"
        width={150}
        height={150}
        />
        </div>
         </div>
     ))

    return (
        <div>
        <div className="row">
            {images}
        </div>
            <div className="row">
           {user?.username === authUser?.username && (
            <div className="col-md-2 mx-auto mt-3">
                <div>
                    <ImageUpload btn="photo-upload"/>
                </div>
           </div>     
           )}
       </div>
        </div>
    )
}
