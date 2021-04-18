import React from 'react';
import {CloseIcon, DownloadIcon} from 'components/Icons';

export default function Files({file, url, preview, setPreview}) {

    const handlePreview = () => {
        setPreview(true);
    }
const handleClose = () => {
    setPreview(false)
}
    let fileElement;
        if(file?.type?.includes("image")){
            fileElement = (
                <div className="img-el">
                <a href={url} className="btn download-btn" download><DownloadIcon /></a>
                <img  src={url} className="img-fluid message-img" onClick={handlePreview}/>
                 <div className={`w3-modal img-prev-modal ${preview ? 'show-large-img':''}`}>
                 <span className="close" onClick={handleClose}><CloseIcon /></span>
                <div className="w3-modal-content w3-animate-zoom">
                <div>
                <img  src={url} className="img-fluid modal-img"/>
                </div>
                 </div>
                 </div>
                </div>
            )
        }else if(file?.type?.includes("video")){
            fileElement = (
                    <video controls autoPlay={false} className="message-video">
                    <source src={url} type="video/mp4" />
                     Your browser does not support the video tag.
                    </video>
                 )
        }else{
            fileElement = <iframe src={url} className="message-iframe"/>
        }
    return (
        <div>
           <div className="message">{fileElement}</div>
        </div>
    )
}
