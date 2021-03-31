import React from 'react';
import {FaUserAlt, FaBars, FaPowerOff,
    FaMobileAlt, FaMoneyCheckAlt,
    FaUserFriends, FaEnvelope, FaHeart, FaAngleLeft
} from 'react-icons/fa';

import {IoMdNotifications, IoIosSettings,
    } from 'react-icons/io';
import {MdMessage, MdErrorOutline} from 'react-icons/md';
import {BsEyeFill, BsInfoCircle} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';



export const LogoutIcon = () => {
    return(
         <>
         <FaPowerOff />
             </>
     )
   
 }

export const AlertIcon = () => {
    return(
         <>
         <MdErrorOutline color="#f00"/>
             </>
     )
   
 }

export function EditIcon({size}) {
    return (
        <>
        <BiEdit
            size={size}
            title="edit"
            
        />
        </>
    )
}

export function LeftAngleIcon({size}) {
    return (
        <>
        <FaAngleLeft
            size={size}
            title="go back"
            color="#009b72"
        />
        </>
    )
}

export function UserIcon({size}) {
    return (
        <>
        <FaUserAlt
            size={size}
            title="user"
        />
        </>
    )
}

export const BarsIcon = ({size}) => {
    return (
        <>
            <FaBars 
             size={size}
                title="toggle sidebar"
            />
        </>
    )
}

export const MoneyIcon = ({size}) => {
    return (
        <>
            <FaMoneyCheckAlt 
                title="save money"
                size={size} 
            />
        </>
    )
}

export const PhoneIcon = ({size}) => {
    return (
        <>
            <FaMobileAlt 
                title="live chart"
                size={size} 
            />
        </>
    )
}


export const RequestsIcon = ({size}) => {
    return (
        <>
            <FaUserFriends 
                title="friend requests"
                size={size}
            />
        </>
    )
}

export const MessagesIcon = ({size}) => {
    return (
        <>
            <FaEnvelope
                title="new messages"  
                size={size}
            />
        </>
    )
}

export const NotificationIcon = ({size}) => {
    return (
        <>
            <IoMdNotifications
                title="notifications"
                size={size}
            />
        </>
    )
}

export const SettingsIcon = ({size}) => {
    return (
        <>
            <IoIosSettings
                title="settings"
                size={size}
            />
        </>
    )
}

export const MessageIcon = ({size}) => {
    return (
        <>
            <MdMessage
                title="messages"
                size={size}
            />
        </>
    )
}

export const ViewIcon = ({size}) => {
    return (
        <>
            <BsEyeFill
                title="views"
                size={size}
            />
        </>
    )
}

export const LikeIcon = ({size}) => {
    return (
        <>
            <FaHeart
                title="likes"
                size={size}
            />
        </>
    )
}


export const InfoIcon = ({size}) => {
    return(
        <>
        <BsInfoCircle
 size={size}
        />
        </>
    )
}