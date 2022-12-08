import React from 'react';
import "./day6.scss";

export default function Day6() {
  return (
     <div className="frame day-6">
            <div className="profile-wrapper">
                <div className="profile-main">
                    <div className="picture-wrapper">
                         <div className="profile-picture">
                            <img src="https://100dayscss.com/codepen/jessica-potter.jpg" alt="profile" />
                        </div>
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                    </div>
                <div className="profile-info">
                    <span>Jessica Potter</span>
                    <span>Visual Artist</span>
                </div>
                <div className="profile-buttons">
                    <button>Follow</button>
                    <button>Message</button>
                </div>
            </div>
                <div className="stats-wrapper">
                    <div>
                        <span>523</span>
                        <span>Posts</span>
                    </div>
                    <div>
                        <span>1387</span>
                        <span>Likes</span>
                    </div>
                    <div>
                        <span>146</span>
                        <span>Followers</span>
                    </div>
                </div>
            </div>
        </div>
  )
}