import React from 'react';
import Header from 'components/profile/Header';
import Sidebar from 'components/profile/Sidebar';
import * as imports from 'components/Imports';

export default function Layout({children}) {
  
    return (
 <>         
 <div className="wrapper">
  <Header />
  <Sidebar  />
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Main content */}
    <section className="content">
        {children}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  
</div>
           
 </>
    )
}
