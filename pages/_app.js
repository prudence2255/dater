import Router from 'next/router';
import 'styles/w3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {wrapper} from 'store/store';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'styles/app.scss';


if(typeof window !== 'undefined'){
AOS.init();
 
}

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  if(typeof window !== 'undefined'){
    const sidebar = document.querySelector(".main-sidebar");
    sidebar.classList.add('hide-sidebar');
    }
})

Router.events.on('routeChangeError', () => {
  NProgress.done();
})

 const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
     
    )
  }

  export default wrapper.withRedux(App)