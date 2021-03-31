import Router from 'next/router';
import 'styles/w3.css';
import 'styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {wrapper} from 'store/store';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

if(typeof window !== 'undefined'){
AOS.init();
}
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

 const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
     
    )
  }

  export default wrapper.withRedux(App)