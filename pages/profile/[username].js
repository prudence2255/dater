import React from 'react';
import * as Imports from 'components/Imports';
import Image from 'next/image';
import About from 'components/profile/About';
import Photos from 'components/profile/Photos';
import Friends from 'components/profile/Friends';
import useActive from 'components/helpers/useActive';
import {ProfileLoader} from 'components/Loaders';
import {useRouter} from 'next/router';
import ImageUpload from 'components/profile/ImageUpload';

 function Profile() {
     const [loading, setLoading] = React.useState();
    const { isActive, activeLink, setActive} = useActive();
    const dispatch = Imports.useDispatch();
    const {user, authUser, profilePic} = Imports.useSelector(Imports.usersSelector);
    const router = useRouter();
    const {username} = router.query;

    const getPhotos = () => {
        setLoading(true);
        setActive('photos');
        dispatch(Imports.getPhotos({url: `/api/photos/${username}`}))
        .then(Imports.unwrapResult).then(() => setLoading(false))
        .catch(() => setLoading(false))
    }
    
    return (
        <Imports.Layout>
        <div className="container-fluid main-profile">
            <div className="row w3-card bg-white no-gutters ">
                <div className="col-md-4 basic-info pb-5">
                    <div className="profile-info-card">
                    <div className="card img">
                    {user.username === authUser.username && (
                     <div className="profile-pic-upload-div">
                     <ImageUpload btn="profile_pic"/>
                    </div>
                    )}
                    <Image className="card-img-top img-fluid profile-info-pic"
                     src={profilePic?.medium ?? '/male-avatar.png'} alt="profile picture" 
                        width={100}
                        height={300}
                    />
                    <div className="card-body">
                     <div>
                        <div>{user?.likes ?? 0}</div>
                        <div>Likes</div>
                     </div>

                     <div>
                    <div>{user?.friends ?? 0}</div>
                    <div>Friends</div>
                     </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-8 mt-2 pb-5">
                <div className="profile-info">
                   <div className="brief-profile">
                   <b>{user?.first_name} {user?.last_name}</b> <br />
                    <span>{user?.gender}, {user?.age}</span> <br />
                    <span>{user?.country}, {user?.city}</span>
                   </div>
                   <div className="detail-profile">
                    <div className="tabs">
                        <button onClick={() => setActive('about')} className={`${isActive && activeLink === 'about' ? 'active-btn': ''}`}>About</button>
                        <button onClick={getPhotos} className={`${isActive && activeLink === 'photos' ? 'active-btn': ''}`}>Photos</button>
                        <button onClick={() => setActive('friends')} className={`${isActive && activeLink === 'friends' ? 'active-btn': ''}`}>Friends</button>
                    </div>
                  <div className="tab-content">
                  <div className={`friends-tab ${isActive && activeLink === 'friends' ? 'show-tab-content': ''}`}>
                  <Friends />
                  </div>
                  <div className={`photos-tab ${isActive && activeLink === 'photos' ? 'show-tab-content': ''}`}>
                  <Photos loading={loading}/>
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


export default Imports.Auth(Profile);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req, query}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.getUser({url: `/api/clients/${query.username}`, cookie: cookie.get("token")}));
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
    }
  );