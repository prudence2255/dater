import React from 'react';
import * as A from 'components/Imports';
import Files from 'components/profile/File';


 const FileUpload = React.forwardRef((props, ref) => {
  const [file, setFile] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState();
  const dispatch = A.useDispatch();
  
  const cookies = new A.Cookies();
  

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    setFile(files[0])
     const fileUrl = URL.createObjectURL(files[0]);
    setUrl(fileUrl);
    setShowModal(true);
  };


  

  const handleSave = () => {
    setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
  }

  
  const handleClose = () => {
    setShowModal(false)
  }


  return (
    <div className="image-upload">
    <A.SpinLoader loading={loading}/>
      <div>
    <div className="image-upload-div">
     <input type="file" name="file" style={{display: 'none'}} ref={ref} onChange={onChange}/>
    </div>
       <div className="image-upload-modal">
       <div className={`w3-modal ${showModal ? 'show-modal':''}`}>
      <div className="w3-modal-content w3-animate-zoom">
        <div>
            <Files file={file} url={url}/>
        </div>
        <div className="action-btns">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={handleClose}>Cancel</button>
        </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
})

export default FileUpload;