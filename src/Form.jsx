import React, { useState } from "react"

const Form = ({ addColor }) => {
  const [color, setColor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <div className="big-container">
      <h3 style={{ color: color }}>color generator</h3>
      <section className="container">
        <p style={{ color: color }}>select a color from the box</p>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn" style={{ background: color }}>
            submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default Form
