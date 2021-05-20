import React from 'react';
import ImageUpload from 'components/profile/ImageUpload';
import * as Imports from 'components/Imports';
import {CardLoader} from 'components/Loaders';
import Lightbox from "react-awesome-lightbox";


export default function Photos({loading}) {
    const [viewImages, setViewImages] = React.useState(null);
    const [startIndex, setStartIndex] = React.useState(0);
    const {user, authUser, photos} = Imports.useSelector(Imports.usersSelector);
    const {status} = Imports.useSelector(Imports.loadersSelector);

    const handleOpenImage = (index) => {
        setStartIndex(index)
        setViewImages(true);
    }

    const handleCloseImage = () => {
        setViewImages(false);
    }

    if(loading){
        return(
            <CardLoader />   
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

    const largeImages = photos?.map(image => ({
            url: image?.photos?.larger,
            title: user?.name
    }));

    const images = photos?.map((obj, i) => (
        <div className="photo" key={i} onClick={() => handleOpenImage(i)}
        style={{cursor: 'pointer'}}
        >
        <img 
         src={obj?.photos?.xsmall}
        className="img-fluid"
        width="150"
        height="150"
        />
        </div>
     ))

    return (
        <div>
        {viewImages && <Lightbox 
        images={largeImages} 
        onClose={handleCloseImage}
        zoomStep={1}
        startIndex={startIndex}
        />}
        <div className="photos">
       {images}
        </div>
            <div className="row">
           {user?.username === authUser?.username && (
            <div className="col-md-2 mx-auto mt-3 text-center">
                <div>
                    <ImageUpload btn="photo-upload"/>
                </div>
           </div>     
           )}
       </div>
        </div>
    )
}
