import React from 'react';
import "./day7.scss";

export default function Day7() {
    
    const backCard = document.querySelector(".backcard");
    const frontCard = document.querySelector(".frontcard");
    const searchBar = document.querySelector(".searchbar");

    const openMenu = () => {
        frontCard.classList.toggle("show-menu");
        backCard.classList.toggle("backcard-slide");
    }   

    const showSearchbar = () => {
        searchBar.classList.toggle("searchbar-show");
    }

  return (
      <div className="frame day-7">
            <div className="frontcard">
                <div className="notifications-header">
                    <div type="checkbox" id="notification-menu">
                        <div className="open-menu-icon"
                                onClick={openMenu}>
                            <div>
                                <span className="menu-icon-upper-line"></span>
                                <span className="menu-icon-dot"></span>
                            </div>
                            <div className="menu-icon-down-line"></div>
                        </div>
                    </div>
                    <div className="header-text">Notifications</div>
                    <div className="open-searchbar-icon"
                            onClick={showSearchbar}>
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input type="text" className="searchbar" placeholder="Search ..." />
                </div>
                <div className="notifications-wrapper">
                    <div className="vertical-line"></div>
                    <div className="notifiction">
                        <div className="bullet-point-box"><div className="bullet-point"></div></div>
                        <div>
                            <div className="notifiction-time">9:24 AM</div>
                            <div>
                                <span className="notifiction-name">John Walker</span>
                                <span>posted a photo on your wall.</span>
                            </div>
                        </div>
                    </div>
                    <div className="notifiction">
                        <div className="bullet-point-box"><div className="bullet-point"></div></div>
                        <div>
                            <div className="notifiction-time">8:19 AM</div>
                            <div>
                                <span className="notifiction-name">Alice Parker</span>
                                <span>commented your last post</span>
                            </div>
                        </div>
                    </div>
                    <div className="notifiction">
                        <div className="bullet-point-box"><div className="bullet-point"></div></div>
                        <div>
                            <div className="notifiction-time">Yesterday</div>
                            <div>
                                <span className="notifiction-name">Luke Wayne</span>
                                <span>added you as friend.</span>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className="backcard">
                <div>
                    <span className="material-symbols-outlined">dashboard</span>
                    <span>Dashboard</span>
                </div>
                 <div>
                    <span className="material-symbols-outlined">person</span>
                    <span>Profile</span>
                </div>
                 <div>
                    <span className="material-symbols-outlined">notifications</span>
                    <span>Notifications</span>
                </div>
                 <div>
                    <span className="material-symbols-outlined">mail</span>
                    <span>Messages</span>
                </div>
                 <div>
                    <span className="material-symbols-outlined">settings</span>
                    <span>Settings</span>
                </div>
            </div>
        </div>
  )
}