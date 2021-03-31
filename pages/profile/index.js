import React from 'react';
import * as Imports from 'components/Imports';
import Image from 'next/image';
import About from 'components/profile/About';
import Photos from 'components/profile/Photos';
import Friends from 'components/profile/Friends';
import useActive from 'components/helpers/useActive';

 function Index() {
    const { isActive, activeLink,setActive,} = useActive();
    return (
        <Imports.Layout>
        <div className="container-fluid main-profile">
            <div className="row w3-card bg-white no-gutters ">
                <div className="col-md-4 basic-info pb-5">
                    <div className="profile-info-card">
                    <div className="card img">
                    <Image className="card-img-top img-fluid profile-info-pic" src="/male-avatar.png" alt="profile picture" 
                        width={100}
                        height={350}
                    />
                    <div className="card-body">
                     <div>
                        <div>0</div>
                        <div>Likes</div>
                     </div>

                     <div>
                    <div>0</div>
                    <div>Friends</div>
                     </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-8 mt-2 pb-5">
                <div className="profile-info">
                   <div className="brief-profile">
                   <b>Arahim Bio</b> <br />
                    <span>Male, 24</span> <br />
                    <span>Ghana, Greater Accra</span>
                   </div>
                   <div className="detail-profile">
                    <div className="tabs">
                        <button onClick={() => setActive('about')} className={`${isActive && activeLink === 'about' ? 'active-btn': ''}`}>About</button>
                        <button onClick={() => setActive('photos')} className={`${isActive && activeLink === 'photos' ? 'active-btn': ''}`}>Photos</button>
                        <button onClick={() => setActive('friends')} className={`${isActive && activeLink === 'friends' ? 'active-btn': ''}`}>Friends</button>
                    </div>
                  <div className="tab-content">
                  <div className={`friends-tab ${isActive && activeLink === 'friends' ? 'show-tab-content': ''}`}>
                  <Friends />
                  </div>
                  <div className={`photos-tab ${isActive && activeLink === 'photos' ? 'show-tab-content': ''}`}>
                  <Photos />
                  </div>
                  <div className={`about-tab ${isActive && activeLink === 'about' ? 'show-tab-content': ''}`}>
                  <About />
                  </div>
                  </div>
                   </div>
                </div>
                </div>
            </div>
        </div>
        </Imports.Layout>
    )
}


export default Imports.Auth(Index);