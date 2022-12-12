import React from 'react'
import "./day12.scss";

export default function Day12() {

  return (
    <div className="frame day12">
        <div className="quotation-mark"></div>
        <div className="quote">
            I know quite certainly that I myself have no special talent; curiosity, 
            <span>obsession
             <div className="definition">
                <div className="pronunciation">[əbˈseʃ(ə)n]</div>
                <div className='content'>
                    <span>Obsession</span>, a persistent disturbing preoccupation with an often unreasonable idea or feeling.
                </div>
            </div>
            </span> and dogged endurance, combined with self-criticism have brought me to my ideas.
        </div>
        <div className="author">Albert Einstein</div>
    </div>
  )
}
