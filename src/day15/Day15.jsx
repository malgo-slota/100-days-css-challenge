import React, { useState, useRef, useEffect } from 'react'
import "./day15.scss";

export default function Day15 () {

    const [dragActive, setDragActive]  = useState(false);
    const [uploadedFile, setUploadedFile] = useState("");
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState("Upload file");
  
    const drop = useRef(null);

    useEffect(() => {
      drop.current.addEventListener('dragover', handleDragOver);
      drop.current.addEventListener('drop', handleDrop);

      return () => {
        drop.current.removeEventListener('dragover', handleDragOver);
        drop.current.removeEventListener('drop', handleDrop);
      };
    }, []);

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(true);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const {files} = e.dataTransfer;
      if (files && files.length) {
        setUploadedFile(files[0].name);
      }
      setDragActive(false);
    };

    const onButtonClick = () => {
        if(uploadedFile !== "") {
          setUploading(true);
          setStatus("Uploading...");
          setTimeout(() => {
            setStatus("Done")
          }, 3700);
        } 
    };

  return (
    <div className="frame day-15">
        <div className="container">
            <div className={`header ${uploading ? "uploading-file" : "" }`}>
            Drop file to upload</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input  type="file" id="input-img-upload" multiple={true} />
                <label htmlFor="input-img-upload" ref={drop}>
                {uploading ? 
                <div>
                  <div className="loading-bar"></div>
                  <span class="material-symbols-outlined arrows">
                    sync 
                  </span>
                  <span class="material-symbols-outlined upload-done">
                    done
                  </span>
                </div>
                 :
                    <div className={`dashed-border ${dragActive ? "drag-active" : "" }`}>
                        {
                          uploadedFile ? 
                          <p>{uploadedFile}</p> :
                          <span className="material-symbols-outlined">
                            cloud_upload
                          </span>  
                        }
                    </div>
                  }
                    <button className='upload-btn' onClick={onButtonClick}>
                        {status}
                    </button>
                </label>
            </form>
        </div>
    </div>
  )
}
