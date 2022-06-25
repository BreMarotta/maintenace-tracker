import React, { useState } from 'react'
import ColorOptions from './ColorOptions';
import { CirclePicker } from 'react-color';

const DesignForm = ({ onDesignSubmit }) => {
    const [banner, setBanner] = useState("");
    const [background, setBackground] = useState("");
    const [main, setMain] = useState("");
    const [accent, setAccent] = useState("");

    
    const designObject = {
        banner: banner,
        background: background,
        main: main, 
        accent: accent
    }
    console.log(designObject)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(designObject);

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Banner Image: </label>
                <input type="text" name="banner" onChange={(e) => setBanner(e.target.value)} />
                <br/>
            
            <label background={{background}}>
                Background Color: 
                <CirclePicker color={background.color} onChange={(e) => setBackground(e.hex)} />
            </label>    
            <br/>

            <label type="text" onChange={(e) => setMain(e.target.value)}>
                Main Color: 
                <ColorOptions />
            </label>
            <br/>

            <label type="text" onChange={(e) => setAccent(e.target.value)}>
                Accent Image: 
                <ColorOptions />
            </label>
            <br/>

            <button type="submit">Set Design Preferences</button>

        </form>
        DesignForm
    </div>
  )
}

export default DesignForm
