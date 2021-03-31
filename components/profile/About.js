    import React from 'react';
    import {UserIcon, InfoIcon, EditIcon} from 'components/Icons';
    import Link from 'next/link';

    export default function About() {
        return (
            <div>
            <div className="personal-info">
                <h4 className="my-5"> <small className="mb-2"><InfoIcon /></small> Summary Profile</h4>
                <p className="ml-4 summary-profile">
                Here We Make It Easy To Meet Folks And Feel 
                Things Out First–So When You Do Go On That First Date, 
                Or Meet For Coffee Without Spending A Penny, 
                You Can Relax And Be Yourself.
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
                <div className="value">Male</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Age</div>
                </div>
                <div className="col-md-6">
                <div className="value">24</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Lives in</div>
                </div>
                <div className="col-md-6">
                <div className="value">Ghana, Accra</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Interested in</div>
                </div>
                <div className="col-md-6">
                <div className="value">Women</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Marital status</div>
                </div>
                <div className="col-md-6">
                <div className="value">Single</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Loading for</div>
                </div>
                <div className="col-md-6">
                <div className="value">Marriage</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Education</div>
                </div>
                <div className="col-md-6">
                <div className="value">Bachelor's degree</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Profession</div>
                </div>
                <div className="col-md-6">
                <div className="value">Engineering</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Religion</div>
                </div>
                <div className="col-md-6">
                <div className="value">Musilem</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Height</div>
                </div>
                <div className="col-md-6">
                <div className="value">5'10"(168cm)</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Eye color</div>
                </div>
                <div className="col-md-6">
                <div className="value">Black</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Hair color</div>
                </div>
                <div className="col-md-6">
                <div className="value">Dark</div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite music</div>
                </div>
                <div className="col-md-6">
                <div className="value"></div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite TV shows</div>
                </div>
                <div className="col-md-6">
                <div className="value"></div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite movies</div>
                </div>
                <div className="col-md-6">
                <div className="value"></div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <div className="label">Favorite books</div>
                </div>
                <div className="col-md-6">
                <div className="value"></div>
                </div>
                </div>
                </div>
                </div>
                <div className="edit-profile-btn">
                    <Link href="/profile/edit-profile">
                    <a>  <EditIcon size="18"/> EDIT</a>
                    </Link>
                </div>
                </div>
            </div> 
            </div>
        )
    }
