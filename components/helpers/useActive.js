import {useState} from 'react';

/**
 * toggle active element
 */

const useActive = () => {
    const [isActive, setIsActive] = useState(true);
    const [activeLink, setActiveLink] = useState('about');

    const setActive = (activeId) => {
        setIsActive(true);
        setActiveLink(activeId);
    }

   return {
       isActive,
       activeLink,
       setActive,
   } 
}


export default useActive;