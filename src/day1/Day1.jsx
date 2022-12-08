import React from 'react';
import "./day1.scss";

export default function Day1() {
  return (
    <div className="frame day-1">
            <div className="number">
                <div className="one">
                    <div className="one-diagonal"></div>
                    <div className="one-vertical"></div>
                </div>
                <div className="zero"></div>
                <div className="zero"></div>
            </div>
            <span className="text">DAYS</span>
            <span className="text-small">CSS CHALLENGE</span> 
    </div>
  )
}