import React, {useState} from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState("") //sets the state of color to be empty

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewColor(color)
        setColor("") // clears info from form
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color</label>
                <input type="text" name="color" value={color} 
                onChange={e=>setColor(e.target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default BoxForm