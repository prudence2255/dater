    import React from 'react';
    import {UserIcon, InfoIcon, EditIcon} from 'components/Icons';
    import Link from 'next/link';
    import * as A from 'components/Imports';

    export default function About() {
        const {user, authUser} = A.useSelector(A.usersSelector);

        return (
            <div>
            <div className="personal-info">
                <h4 className="my-5"> <small className="mb-2"><InfoIcon /></small> Summary Profile</h4>
                <p className="ml-4 summary-profile">
                {user?.meta?.self_summary ?? 'N/A'}
                </p>
                <div className="info">
                <h4 className="my-5"> <small className="mb-2"><UserIcon /></small> Personal Info</h4>
                
                <div className="ml-4 info-list">
                <div className="labels">
                <div className="row">
                <div className="col-md-4">
                    <div className="label">Gender</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.gender}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Age</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.age}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Lives in</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.country}, {user?.city}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Interested in</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.interest ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Marital status</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.status ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Loading for</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.want ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Education</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.education ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Profession</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.profession ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Religion</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.religion ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Height</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.height ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Eye color</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.eye_color ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Hair color</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.hair_color ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite music</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.f_music ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite TV shows</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.f_shows ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite movies</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.f_movies ?? 'N/A'}</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite books</div>
                </div>
                <div className="col-md-6">
                <div className="value">{user?.meta?.f_books ?? 'N/A'}</div>
                </div>
                </div>
                </div>
                </div>
                {user?.username === authUser?.username && (
                    <div className="edit-profile-btn">
                    <Link href="/profile/edit-profile">
                    <a>  <EditIcon size="18"/> EDIT</a>
                    </Link>
                </div>
                )}
                </div>
            </div> 
            </div>
        )
    }
