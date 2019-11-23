import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './index.css'

export default function LoadIndicator() {
  const { max, loaded: value } = useSelector(({ ui }) => ui.loader)
  const [className, setClassName] = useState("load-indicator position-center");

  useEffect(() => {
    if (max && max === value) {
      setClassName(c => `${c} fade-out`)
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