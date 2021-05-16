import React from 'react';
import Head from 'next/head';
import TestNav from './TestNav';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import TestSidebar from './TestSidebar';


export default function ProfileLayout({children}) {
    return (
        <>
            <Head>
            <script src="/plugins/jquery/jquery.min.js" />
            <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js" />
            <script src="/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js" />
            <script src="/dist/js/adminlte.js" />
            </Head> 
  <div className="hello">          
 <div className="wrapper">
  {/* Preloader */}
  <div className="preloader flex-column justify-content-center align-items-center">
    <img className="animation__wobble" src="/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
  </div>
 <TestNav />
 <TestSidebar />
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard v2</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v2</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
  {/* Main Footer */}
  <footer className="main-footer">
   
  </footer>
</div>
</div>
        </>
    )
}
