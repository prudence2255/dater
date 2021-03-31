import React from 'react';
import Header from 'components/profile/Header';
import Sidebar from 'components/profile/Sidebar';
import * as imports from 'components/Imports';

export default function Layout({children}) {
    const {show, toggleShow, target} = imports.useShow();
    return (
        <div className="profile-layout">
            <Header show={show} toggleShow={toggleShow} target={target}/>
            <div>
            <div>
            <Sidebar  show={show} toggleShow={toggleShow} target={target}/>
            </div>
               <div className="profile-main-content">
               {children}
               </div>
            </div>
        </div>
    )
}
