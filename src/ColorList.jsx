import React from "react"
import Singlecolor from "./Singlecolor"
import { nanoid } from "nanoid"

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <Singlecolor key={nanoid()} color={color} index={index} />
      })}
    </section>
  )
}

export default ColorList
