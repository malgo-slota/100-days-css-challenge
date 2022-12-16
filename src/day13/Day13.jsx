import React, { useState } from 'react';
import "./day13.scss";

export default function Day13() {

  const [profileOpen, setProfileOpen] = useState(false);

  const handleOpen = () => {
    setProfileOpen(true);
  }

  const handleClose = () => {
    setProfileOpen(false);
  }

  return (
    <div className="frame day-13">
        <div className="profile-links">
          <div>
              <img className="profile-link-img" src="https://100dayscss.com/codepen/13-1.jpg" alt="user profile"/>
              <button className="plus" onClick={handleOpen}>+</button>
          </div>
          <div>
              <img className="profile-link-img" src="https://100dayscss.com/codepen/13-2.jpg" alt="user profile"/>
              <button className="plus" onClick={handleOpen}>+</button>
          </div>
          <div>
              <img className="profile-link-img" src="https://100dayscss.com/codepen/13-3.jpg" alt="user profile"/>
              <button className="plus" onClick={handleOpen}>+</button>
          </div>
          <div>
              <img className="profile-link-img" src="https://100dayscss.com/codepen/13-4.jpg" alt="user profile"/>
              <button className="plus" onClick={handleOpen}>+</button>
          </div>
        </div>
          <div className={`profile ${profileOpen ? "show" : "" }`}>
            <div className='profile-top'>
              <img src="https://100dayscss.com/codepen/13-1-header.jpg" alt="user profile"/>
              <button className="close" onClick={handleClose}>
                <span className="material-symbols-outlined">
                  close
                </span>
              </button>
            </div>
            <div className="profile-icon">
              <img src="https://100dayscss.com/codepen/13-1.jpg" alt="user profile"/>
            </div>
            <div className="profile-bottom">
                <div>Julia Toth</div>
                <div className="icons">
                  <span className="material-symbols-outlined">
                    call
                  </span>
                  <span className="material-symbols-outlined">
                    mail
                  </span>
                  <span className="material-symbols-outlined">
                    group_add
                  </span> 
                </div>
            </div>
          </div>
    </div>
  )
}