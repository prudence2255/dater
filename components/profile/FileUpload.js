import React from 'react';
import * as A from 'components/Imports';
import Files from 'components/profile/File';
import * as Imports from 'components/Imports';
import {tempMsg, tempAddMsg} from 'store/slices/messagesSlice';


 const FileUpload = React.forwardRef(({thread, mid}, ref) => {
  const [file, setFile] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState();
  const {user, authUser} = Imports.useSelector(Imports.usersSelector);
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
   // setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", file?.type);
      
      if(Object.keys(thread).length === 0 && mid){
        formData.append("recipients", user?.id );
          dispatch(Imports.addThread({url: '/api/threads', body: formData, cookie: cookies.get("token")}))
                  .then(Imports.unwrapResult).then((res) => res)
                  .catch((e) => e.message);

               dispatch(tempAddMsg({
                  user_id: authUser?.id,
                  file_url: url,
                  type: file?.type
                }));
      }else{
      formData.append("recipients", thread?.receiver?.id);
       /**
       * display temporal message
       */

        dispatch(tempMsg({
          user_id: authUser?.id,
          file_url: url,
          type: file?.type
      }));

      dispatch(Imports.updateThread({url: `/api/threads/${thread.id}`, body: formData, cookie: cookies.get("token")}))
      .then(Imports.unwrapResult).then((res) => res)
      .catch((e) => e.message)
      }
       
      setShowModal(false);
  }

  
  const handleClose = () => {
    setShowModal(false)
  }


  return (
    <div className="file-upload">
    {/* <A.SpinLoader loading={loading}/> */}
      <div>
    <div className="file-upload-div">
     <input type="file" name="file" style={{display: 'none'}} ref={ref} onChange={onChange}/>
    </div>
       <div className="file-upload-modal">
       <div className={`w3-modal ${showModal ? 'show-modal':''}`}>
      <div className="w3-modal-content w3-animate-zoom">
        <div>
            <Files file={file} url={url} />
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