import React from 'react';
import * as Imports from 'components/Imports';
import {notificationsSelector, setNotification} from 'store/slices/notificationsSlice';


export default function NotificationCard({notification}) {
    //const {notification} = useSelector(notificationsSelector);

    const {data: {info}} = notification;

    const dispatch = Imports.useDispatch();
    const handleSet = (notification) => {
        dispatch(setNotification(notification))
    }

    return (
        <>
        <div className="notification-card" data-toggle="modal" data-target="#modal-secondary"
        onClick={() => handleSet(notification)}
        >
            <div className="notification-item">
            <img 
                src={`/male-avatar.png`}
                  className="img-fluid notification-card-img"  
                />
            </div>
            <div className="notification-item">
                <div><b>Dater.com</b> <span className="ml-3">5:30 PM</span></div>
                <p>{info?.slice(0, 20)}...</p>
            </div>
        </div>
        <div className="dropdown-divider" />

        {/* modal for single notification */}
        <div className="modal fade" id="modal-secondary" style={{display: 'none'}} aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content w3-animate-zoom bg-white">
            <div className="modal-header">
                <h4 className="modal-title text-center">Dater.com</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <p>{info}</p>
            </div>
            </div>
            {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
        </div>
        </>
    )
}



