import React, { useEffect, useState } from 'react';
import "./day10.scss";

export default function Day10() {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    
     useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setDate(now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear());
            setTime(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
        }, 1000);
  }, []);

    return (
        <div className="frame day-10">
            <div className='clock-face'>
                <div className='dotted-frame'>
                    <svg className="spinner">
                        <circle cx="50%" cy="50%" r="99"></circle>
                    </svg>
                    <div className="clock">
                        <div>{date}</div>
                        <div className="time">{time}</div>
                        <div className="other-info">
                            <div>
                                <div className="heart"></div>
                                <span>81</span>
                            </div>
                            <div>
                                1248 KCAL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}