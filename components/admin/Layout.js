import React from 'react';
import Header from 'components/admin/Header';
import AdminSidebar from 'components/admin/Sidebar';
import * as imports from 'components/Imports';

export default function Layout({children}) {
    const {show, toggleShow, target} = imports.useShow();
    return (
        <div className="admin-layout">
            <Header show={show} toggleShow={toggleShow} target={target}/>
            <div>
            <div>
            <AdminSidebar  show={show} toggleShow={toggleShow} target={target}/>
            </div>
                {children}
            </div>
        </div>
    )
}
