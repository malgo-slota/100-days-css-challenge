import React from 'react';
import "./day5.scss";

export default function Day5() {
  return (
     <div className="frame day-5">
            <div id="card">
                <div id="card-header">
                    <div id="card-header-left">
                        <span>WEEKLY REPORT</span>
                        <span>01. Feb - 07. Feb</span>
                    </div>
                    <div id="card-header-right">
                        <span>Revenue</span>
                        <span>$ 3621.79</span>
                    </div>
                </div>
                <div id="chart-bg">
                    <div className="chart-legend">
                        <div className="red-views">Views</div>
                        <div className="blue-purchases">Purchases</div>
                    </div>
                    <div className="lines-bg">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="red-data">
                        <div className="point-1 red-point">
                            <div className="red-tip">458</div>
                        </div>
                        <div className="point-2 red-point">
                            <div className="red-tip">812</div>
                        </div>
                        <div className="point-3 red-point">
                            <div className="red-tip">746</div>
                        </div>
                        <div className="point-4 red-point">
                            <div className="red-tip">877</div>
                        </div>
                        <div className="point-5 red-point">
                            <div className="red-tip">517</div>
                        </div>
                        <div className="point-6 red-point">
                            <div className="red-tip">432</div>
                        </div>
                        <div className="point-7 red-point">
                            <div className="red-tip">458</div>
                        </div>
                        <svg>
                            <polyline className="red-line" points="9,46 50,12 90,23 130,11 171,38 204,48 244,19"/>    
                        </svg>
                    </div>
                    <div className="blue-data">
                        <div className="point-1 blue-point">
                            <div className="blue-tip">26</div>
                        </div>
                        <div className="point-2 blue-point">
                            <div className="blue-tip">41</div>
                        </div>
                        <div className="point-3 blue-point">
                            <div className="blue-tip">22</div>
                        </div>
                        <div className="point-4 blue-point">
                            <div className="blue-tip">36</div>
                        </div>
                        <div className="point-5 blue-point">
                            <div className="blue-tip">25</div>
                        </div>
                        <div className="point-6 blue-point">
                            <div className="blue-tip">13</div>
                        </div>
                        <div className="point-7 blue-point">
                            <div className="blue-tip">20</div>
                        </div>
                        <svg>
                            <polyline className="blue-line" points="9,61 50,50 90,65 130,55 171,61 204,74 244,64"/>    
                        </svg>
                    </div>
                    <div className="weekdays">
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                        <span>SUN</span>
                    </div>
                </div>
            </div>
    </div>
  )
}