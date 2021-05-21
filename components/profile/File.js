import React from 'react';
import { DownloadIcon} from 'components/Icons';
import Lightbox from "react-awesome-lightbox";


export default function Files({file, url, i, preview, setPreview}) {
const [lightBox, setLightBox] = React.useState();

const header = document.querySelector(".main-header");
const messageHeader = document.querySelector(".message-header");
const sidebar = document.querySelector(".main-sidebar");
const homeHeader = document.querySelector(".home-header");

    const handlePreview = () => {  
                 setPreview(true)
                 setLightBox(true)
                 header?.classList.add("zIndex");
                 messageHeader?.classList.add("zIndex");
                 sidebar?.classList.add("zIndex");
                 homeHeader?.classList.add("zIndex");
            }

    const handleClose = () => {
    setPreview(false)
    setLightBox(false);
     header?.classList.remove("zIndex");
    messageHeader?.classList.remove("zIndex");
    sidebar?.classList.remove("zIndex");
     homeHeader?.classList.remove("zIndex");
    }



    let fileElement;
        if(file?.type?.includes("image")){
            fileElement = (
                <div className="img-el">
                <a href={url} className="btn download-btn" download><DownloadIcon /></a>
                <img src={url} className="img-fluid message-img" onClick={handlePreview}/>
               {lightBox &&  <Lightbox  image={url} title="image"
                    onClose={handleClose}
                    zoomStep={1}
                 />}
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
