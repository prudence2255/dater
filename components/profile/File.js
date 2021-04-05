import React from 'react';

export default function Files({file, url}) {
    let fileElement;
        if(file?.type?.includes("image")){
            fileElement = <img  src={url} className="img-fluid message-img"/>
        }else if(file?.type?.includes("video")){
            fileElement = (
                    <video width="100%" height="auto" controls autoPlay={false}>
                    <source src={url} type="video/mp4" />
                     Your browser does not support the video tag.
                    </video>
                 )
        }else{
            fileElement = <iframe src={url} width="100%" height="300"/>
        }
    return (
        <div>
            {fileElement}
        </div>
    )
}
