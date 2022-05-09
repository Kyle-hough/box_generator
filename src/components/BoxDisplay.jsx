import React from 'react'
import '../styles/style.css'
const BoxDisplay = (props) => {
  return (
    <div>
        {
            props.colors.map((color,i)=> {
                return(
                    <div className="box" key={i} style={{backgroundColor: color}}>
                      {color}
                    </div>
                )
            })
        }
    </div>
  )
}

export default BoxDisplay