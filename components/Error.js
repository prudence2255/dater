import {errorsSelector, clearErrors} from 'store/slices/errorsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {AlertIcon} from 'components/Icons';

 const ShowError = () => {
    const {errors} = useSelector(errorsSelector)
    const dispatch = useDispatch()
const handleClose = () => {
    dispatch(clearErrors())
}
    useEffect(() => {
        return () => {
        }
    }, [errors])
    return(
        <>
        <div className={`errors`} >
           <div className={`error-content w3-card-2 `}>
           <div>
            <h3><AlertIcon /></h3>
        </div>
           <div>
           {
                errors && errors.map((e, i ) => (<p key={i}>{e}</p>))
            }
           </div>
           <div>
                <button className="btn btn-primary" onClick={handleClose}>Ok</button>
           </div>
           </div>
        </div>
      
        </>
    )
}

export default ShowError;