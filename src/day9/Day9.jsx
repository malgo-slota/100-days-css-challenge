import React from 'react';
import "./day9.scss";

export default function Day9() {
  return (
      <div className="frame day-9">
            <div className="rainy-night-wrapper">
                <div className="moon">
                    <div className="crater-1"></div>
                    <div className="crater-2"></div>
                    <div className="crater-3"></div>
                    <div className="crater-4"></div>
                    <div className="crater-5"></div>
                    <div className="crater-6"></div>
                    <div className="crater-7"></div>
                    <div className="crater-8"></div>
                    <div className="crater-9"></div>
                    <div className="crater-10"></div>
                </div>
                <div className="land-back">
                    <div className="land-back-hill-1"></div>
                    <div className="land-back-hill-2"></div>
                </div>
                <div className="land-front">
                    <div className="land-front-hill-1"></div>
                    <div className="land-front-hill-2"></div>
                    <div className="land-front-hill-3"></div>
                </div>
                <div className="rain">
                    <div className="drop-l-1"></div>
                    <div className="drop-l-2"></div>
                    <div className="drop-l-3"></div>
                    <div className="drop-l-4"></div>
                    <div className="drop-l-5"></div>
                    <div className="drop-l-6"></div>
                    <div className="drop-l-7"></div>
                    <div className="drop-l-8"></div>
                    <div className="drop-l-9"></div>
                    <div className="drop-l-10"></div>

                    <div className="drop-m-1"></div>
                    <div className="drop-m-2"></div>
                    <div className="drop-m-3"></div>
                    <div className="drop-m-4"></div>
                    <div className="drop-m-5"></div>
                    <div className="drop-m-6"></div>
                    <div className="drop-m-7"></div>
                    <div className="drop-m-8"></div>
                    <div className="drop-m-9"></div>
                    <div className="drop-m-10"></div>

                    <div className="drop-s-1"></div>
                    <div className="drop-s-2"></div>
                    <div className="drop-s-3"></div>
                    <div className="drop-s-4"></div>
                    <div className="drop-s-5"></div>
                    <div className="drop-s-6"></div>
                    <div className="drop-s-7"></div>
                    <div className="drop-s-8"></div>
                    <div className="drop-s-9"></div>
                    <div className="drop-s-10"></div>
                </div>
            </div>
            <div className="weather-info">
                <div className="weather-today">
                    <div>12°</div>
                    <div>
                        <div>Wind: E 7km/h</div>
                        <div>Humidity: 87%</div>
                    </div>
                </div>
                <div>
                    <div className="forecast">
                        <span>TUE</span>
                        <span>21° / 9°</span>
                    </div>
                    <div className="forecast">
                         <span>WED</span>
                        <span>23° / 10°</span>
                    </div>
                </div>
            </div>
        </div>
  )
}