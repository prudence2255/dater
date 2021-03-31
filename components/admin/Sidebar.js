import React from 'react';
import * as imports from 'components/Imports';

export default function SideBar({show, target}) {
   
    return (
        <div className="admin-sidebar">
        <div className={`admin-sidebar-items ${show && target === 'toggle-sidebar' ? 'show-sidebar' : '' }`}>
            <h3>Hello</h3>
        </div>
        </div>
    )
}
