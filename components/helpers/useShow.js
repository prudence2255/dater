import {useState} from 'react';

/**
 * toggle the visibility of elements;
 */

const useShow = () => {
    const [show, setShow] = useState();
    const [target, setTarget] = useState();

    const toggleShow = (targetId) => {
        setShow(!show);
        setTarget(targetId);
    }

    return {
        show, setShow,
        target, setTarget,
        toggleShow
    }
}


export default useShow;