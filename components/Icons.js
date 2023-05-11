import React from "react";
import {
  FaUserAlt,
  FaBars,
  FaPowerOff,
  FaUserPlus,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaCamera,
  FaUserFriends,
  FaEnvelope,
  FaHeart,
  FaAngleLeft,
} from "react-icons/fa";

import { IoMdNotifications, IoIosSettings, IoMdSend } from "react-icons/io";
import {
  MdMessage,
  MdErrorOutline,
  MdFileUpload,
  MdAttachFile,
  MdClose,
  MdFileDownload,
} from "react-icons/md";
import { BsEyeFill, BsInfoCircle, BsArrowDownShort } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";
import { GrEmoji } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";

export const FiltersIcon = () => {
  return (
    <>
      <FiFilter title="Filters" size={25} />
    </>
  );
};

export const AddFriendIcon = () => {
  return (
    <>
      <FaUserPlus title="Add friend" />
    </>
  );
};

export const DownloadIcon = () => {
  return (
    <>
      <MdFileDownload />
    </>
  );
};

export const CloseIcon = () => {
  return (
    <>
      <MdClose />
    </>
  );
};

export const SendIcon = () => {
  return (
    <>
      <IoMdSend size="25" />
    </>
  );
};

export const EmojiIcon = () => {
  return (
    <>
      <GrEmoji size="25" />
    </>
  );
};

export const FileIcon = () => {
  return (
    <>
      <MdAttachFile size="25" />
    </>
  );
};

export const UploadIcon = () => {
  return (
    <>
      <MdFileUpload size="20" />
    </>
  );
};

export const FriendsIcon = () => {
  return (
    <>
      <GiThreeFriends />
    </>
  );
};

export const CameraIcon = () => {
  return (
    <>
      <FaCamera />
    </>
  );
};

export const LogoutIcon = () => {
  return (
    <>
      <FaPowerOff />
    </>
  );
};

export const AlertIcon = () => {
  return (
    <>
      <MdErrorOutline color="#f00" />
    </>
  );
};

export function EditIcon({ size }) {
  return (
    <>
      <BiEdit size={size} title="edit" />
    </>
  );
}

export function LeftAngleIcon({ size }) {
  return (
    <>
      <FaAngleLeft size={size} title="go back" color="#009b72" />
    </>
  );
}

export function UserIcon({ size }) {
  return (
    <>
      <FaUserAlt size={size} title="user" />
    </>
  );
}

export const BarsIcon = ({ size }) => {
  return (
    <>
      <FaBars size={size} title="toggle sidebar" />
    </>
  );
};

export const MoneyIcon = ({ size }) => {
  return (
    <>
      <FaMoneyCheckAlt title="save money" size={size} />
    </>
  );
};

export const PhoneIcon = ({ size }) => {
  return (
    <>
      <FaMobileAlt title="live chart" size={size} />
    </>
  );
};

export const RequestsIcon = ({ size }) => {
  return (
    <>
      <FaUserFriends title="friend requests" size={size} />
    </>
  );
};

export const MessagesIcon = ({ size }) => {
  return (
    <>
      <FaEnvelope title="new messages" size={size} />
    </>
  );
};

export const NotificationIcon = ({ size }) => {
  return (
    <>
      <IoMdNotifications title="notifications" size={size} />
    </>
  );
};

export const SettingsIcon = ({ size }) => {
  return (
    <>
      <IoIosSettings title="settings" size={size} />
    </>
  );
};

export const MessageIcon = ({ size, title }) => {
  return (
    <>
      <MdMessage title={title} size={size} />
    </>
  );
};

export const ViewIcon = ({ size }) => {
  return (
    <>
      <BsEyeFill title="views" size={size} />
    </>
  );
};

export const LikeIcon = ({ size, title }) => {
  return (
    <>
      <FaHeart title={title} size={size} />
    </>
  );
};

export const InfoIcon = ({ size }) => {
  return (
    <>
      <BsInfoCircle size={size} />
    </>
  );
};
