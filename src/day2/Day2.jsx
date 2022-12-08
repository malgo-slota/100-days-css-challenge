import React from 'react';
import "./day2.scss";

export default function Day2() {
  return (
    <div className="frame day-2">
        <label htmlFor="bars">
            <input type="checkbox" id="bars" />
                <div className="hamburger">
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span>
                </div>
        </label>
    </div>
  )
}