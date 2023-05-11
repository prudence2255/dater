import React from "react";
import Cropper from "react-cropper";
import { CameraIcon, UploadIcon } from "components/Icons";
import * as A from "components/Imports";

export default function ImageUpload({ btn }) {
  const [image, setImage] = React.useState(null);
  const [cropper, setCropper] = React.useState();
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState();
  const dispatch = A.useDispatch();

  const cookies = new A.Cookies();
  const fileRef = React.useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader?.readAsDataURL(files[0]);
    setShowModal(true);
  };

  const handleSelect = () => {
    const sidebar = document.querySelector(".main-sidebar");
    sidebar?.classList.add("zIndex");
    fileRef?.current?.click();
  };

  const handleSave = () => {
    const sidebar = document.querySelector(".main-sidebar");
    sidebar?.classList.remove("zIndex");
    setLoading(true);
    cropper?.getCroppedCanvas()?.toBlob((blob) => {
      const formData = new FormData();
      formData.append("photos", blob, `${blob.size}.jpeg`);

      dispatch(
        btn === "profile_pic"
          ? A.uploadProfilePic({
              url: "/api/upload-profile-picture",
              body: formData,
              cookie: cookies.get("token"),
            })
          : A.photoUpload({
              url: `/api/upload-photo`,
              body: formData,
              cookie: cookies.get("token"),
            })
      )
        .then(A.unwrapResult)
        .then((res) => {
          setLoading(false);
        })
        .catch((e) => setLoading(false));
    }, "image/jpeg");

    setShowModal(false);
  };

  const handleClose = () => {
    const sidebar = document.querySelector(".main-sidebar");
    sidebar?.classList.remove("zIndex");
    setShowModal(false);
  };

  return (
    <div className="image-upload">
      <A.SpinLoader loading={loading} />
      <div>
        <div className="image-upload-div">
          {btn === "profile_pic" ? (
            <button className="image-upload-btn" onClick={handleSelect}>
              <CameraIcon /> <small>Change profile picture</small>
            </button>
          ) : (
            <button className="upload-photo-btn" onClick={handleSelect}>
              <UploadIcon />
              Upload
            </button>
          )}
          <input
            type="file"
            name="file"
            style={{ display: "none" }}
            ref={fileRef}
            onChange={onChange}
          />
        </div>
        <div className="image-upload-modal">
          <div className={`w3-modal ${showModal ? "show-modal" : ""}`}>
            <div className="w3-modal-content w3-animate-zoom">
              <Cropper
                initialAspectRatio={1}
                autoCrop={false}
                preview=".img-preview"
                src={image}
                viewMode={2}
                guides={true}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
              />
              <div className="action-btns">
                <button className="save-btn" onClick={handleSave}>
                  Save
                </button>
                <button className="cancel-btn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
