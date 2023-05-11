import { useEffect } from 'react';
import * as A from 'components/Imports';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export default function Auth(Component) {
  return () => {
    const router = useRouter();
    const { errors } = A.useSelector(A.errorsSelector)
    useEffect(() => {
      if (errors) {
        if (errors.includes('Unauthenticated')) {
          cookies.remove('token', { path: '/' });
          router.push('/');
        }
      }
      if (!cookies.get('token')) router.push('/')
    }, [errors])

    return (<Component {...arguments} />)
  }
}