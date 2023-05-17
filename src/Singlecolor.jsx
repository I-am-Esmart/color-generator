import React from "react"
import { toast } from "react-toastify"

const Singlecolor = ({ color, index }) => {
  const { hex, weight } = color

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success("copied to clipboard")
      } catch (error) {
        toast.error("failed to copy")
      }
    } else
      toast.error("Clipboard not available. Please check your browser settings")
  }

  return (
    <article
      className={index > 30 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="color-value"> #{hex}</p>
      <p className="percent-value"> {weight}% </p>
    </article>
  )
}

export default Singlecolor
