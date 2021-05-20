import React from 'react';
import * as Imports from 'components/Imports';
import About from 'components/profile/About';
import Photos from 'components/profile/Photos';
import Friends from 'components/profile/Friends';
import {useRouter} from 'next/router';
import ImageUpload from 'components/profile/ImageUpload';
import { myFriendRequests, getFriends, getAuthUserFriends } from 'store/actions/friendActions';
import VisitorActions from 'components/profile/VisitorActions';

 function Profile() {
    const [loading, setLoading] = React.useState();
    const dispatch = Imports.useDispatch();
    const {user, authUser, profilePic} = Imports.useSelector(Imports.usersSelector);
    const router = useRouter();
    const {username} = router.query;
    const cookies = new Imports.Cookies();

    /**
     * get user photos
     */
    const getPhotos = () => {
        setLoading(true);
        dispatch(Imports.getPhotos({url: `/api/photos/${username}`, cookie: cookies.get("token")}))
        .then(Imports.unwrapResult).then(() => setLoading(false))
        .catch(() => setLoading(false))
    }

    /**
     * get user friends
     */
    const handleFriends = () => {
        setLoading(true);
        dispatch(getFriends({url: `/api/friends/${username}`, cookie: cookies.get("token")}))
        .then(Imports.unwrapResult).then(() => setLoading(false))
        .catch(() => setLoading(false))
    }

    return (
        <Imports.Layout>
        <div className="container main-profile bg-white">
            <div className="row no-gutters ">
                <div className="col-md-4 basic-info pb-5">
                    <div className="profile-info-card">
                    <div className="card img">
                    {user.username === authUser.username && (
                     <div className="profile-pic-upload-div">
                     <ImageUpload btn="profile_pic"/>
                    </div>
                    )}
                    <img className="card-img-top img-fluid profile-info-pic"
                     src={profilePic?.medium ?? '/male-avatar.png'} alt="profile picture" 
                        width="100"
                        height="300"
                    />
                    <div className="card-body d-flex justify-content-around">
                     <div>
                        <div>{user?.likes_count}</div>
                        <div>Likes</div>
                     </div>
                     <div>
                    <div>{user?.friends_count}</div>
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
                   {/**visitor actions panel */}
                 {user.id !== authUser.id && (
                    <VisitorActions user={user}/>
                 )}
                   {/**end visitor actions panel */}

                   <div className="detail-profile mt-3">

                   <div className="card card-primary card-outline card-outline-tabs bg-white">
                 <div className="card-header p-0 border-bottom-0">
                <ul className="nav nav-tabs bg-white" id="custom-tabs-four-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="custom-tabs-four-home-tab" data-toggle="pill" href="#custom-tabs-four-home" role="tab" aria-controls="custom-tabs-four-home" aria-selected="false">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="custom-tabs-four-profile-tab" data-toggle="pill" href="#custom-tabs-four-profile" role="tab" aria-controls="custom-tabs-four-profile" aria-selected="false" onClick={getPhotos}>Photos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " id="custom-tabs-four-messages-tab" data-toggle="pill" href="#custom-tabs-four-messages" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="true" onClick={handleFriends}>Friends</a>
                </li>
                </ul>
                </div>
                <div className="card-body">
                <div className="tab-content" id="custom-tabs-four-tabContent">
                <div className="tab-pane fade active show" id="custom-tabs-four-home" role="tabpanel" aria-labelledby="custom-tabs-four-home-tab">
                <About />
                </div>
                <div className="tab-pane fade" id="custom-tabs-four-profile" role="tabpanel" aria-labelledby="custom-tabs-four-profile-tab">
                <Photos loading={loading}/>
                </div>
                <div className="tab-pane fade " id="custom-tabs-four-messages" role="tabpanel" aria-labelledby="custom-tabs-four-messages-tab">
                <Friends loading={loading}/>
                </div>

                </div>
            </div>
            {/* /.card */}
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
       await store.dispatch(myFriendRequests({url: `/api/my-friend-requests`, cookie: cookie.get("token")}));
       await store.dispatch(getAuthUserFriends({url: `/api/friends`, cookie: cookie.get("token")}));
    }
  );



