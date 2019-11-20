import React, { useState, useEffect } from 'react';
import './index.css'

function LoadIndicator(props) {
  const { loadDataNum: max, loadedDataNum: value } = props.data
  const [className, setClassName] = useState("load-indicator position-center");

  useEffect(() => {
    if (max && max === value) {
      setClassName( c =>`${c} fade-out`)
      setTimeout(() => {
        setClassName(c => `${c} display-none`)
      }, 1500);
    }
  }, [max, value])

  return (
    <section id="load-indicator" className={className}>
      <div className="load-indicator-wrapper fade-in">
        <progress className="load-indicator-progress" max={max} value={value}></progress>
        <div className="load-indicator-text">{getPercent() + "%"}</div>
      </div>
    </section>
  )

  function getPercent() {
    let number = Math.floor((value / max) * 100);
    return number ? number : 0
  }
}

export default LoadIndicator;