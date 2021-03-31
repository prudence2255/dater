import React from 'react';
import Image from 'next/image';

export default function Photos({images}) {
    return (
        <div>
        <div className="row">
            {images || ['/male-avatar.png'].map((img, i) => (
                <div className="col-md-3" key={i}>
                <div className="photo">
                <Image 
                 src={img}
                className="img-fluid"
                width={150}
                height={150}
                />
                </div>
            </div>
            ))}
        </div>
       
        </div>
    )
}
