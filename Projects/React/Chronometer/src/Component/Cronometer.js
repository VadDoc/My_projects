import React, { useState } from 'react'

let interval
let flag = false

export default function Chronometer() {
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)

  const handlerStartStop = () => {
    if (!flag) {
      interval = setInterval(() => {
        setSec((prev) => prev + 1)
      }, 1000)
      flag = !flag

    } else {
      setSec(0)
      setMin(0)
      setMin(0)  
      clearInterval(interval)
      flag = !flag
    }
  }

  const handlerWait = (e) => {
    clearInterval(interval)
    flag = !flag
}


  const handlerResert = () => {
    setSec(0)
    setMin(0)
    setMin(0)
  }

  if (sec === 20) {
    setSec((prev) => (prev = 0))
    setMin((prev) => prev + 1)
  }

  if (min === 10) {
    setMin((prev) => (prev = 0))
    setHour((prev) => prev + 1)
  }

  return (
    <div>
      <p>
        <span style={{ display: hour > 9 ? 'none' : 'inline' }}>0</span>
        <span>{hour}</span>:
        <span style={{ display: min > 9 ? 'none' : 'inline' }}>0</span>
        <span>{min}</span>:
        <span style={{ display: sec > 9 ? 'none' : 'inline' }}>0</span>
        <span>{sec}</span>
      </p>
      <p>
        <button className={'btn btn-success'} onClick={handlerStartStop}>
          Start/Stop
        </button>
        <button className={'btn btn-warning'} onClick={handlerWait}>
          Wait
        </button>
        <button className={'btn btn-danger'} onClick={handlerResert}>
          Resert
        </button>
      </p>
    </div>
  )
}
