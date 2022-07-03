import React, { useState } from 'react'
import { CompactPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { designUpdate } from './designSlice'

const DesignForm = ({ toggle }) => {;
    const dispatch = useDispatch()
    const errors = useSelector((state) => state.design.errors);

    const designInArray = useSelector(state => state.design.design[0])
    const designAsObj = useSelector(state => state.design.design)
    const currentDesign = designInArray == undefined ? designAsObj : designInArray

    const [designObj, setDesignObj] = useState({
        banner: currentDesign.banner,
        background: currentDesign.background,
        main: currentDesign.main,
        accent: currentDesign.accent,
        id: currentDesign.id
    })

    // console.log(currentDesign)
    // console.log("Array: ", designInArray)
    // console.log("Object: ", designAsObj)
    const handleBannerChange = (e) => {
        const newObj = {
            ...designObj, 
            [e.target.name]: e.target.value
        }
        setDesignObj(newObj)
    }

    const handleChange = (name, color) => {
        const newObj = {
            ...designObj,
            [name]: color,
        }
        setDesignObj(newObj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Sending to fetch", designObj)
        dispatch(designUpdate(designObj));
        // toggle();
    }

  return (
    <div>
        <form className="designForm"onSubmit={handleSubmit}>
            <label>Banner Image: </label>
                <input 
                    type="text" 
                    id="banner"
                    name="banner"
                    value={designObj.banner}
                    onChange={handleBannerChange}/>
                <br/>
            
            <label style={{color: 'white', background: currentDesign.background}}>
                Background Color: 
                <br/>
                <CompactPicker color={designObj.background} name="background" onChange={(e) => handleChange("background", e.hex)} />
            </label>    
            <br/>

            <label style={{color: 'white', background: currentDesign.main}}>
                Main Color: 
                <br/>
                <CompactPicker color={designObj.main} onChange={(e) => handleChange("main", e.hex)} />
            </label>    
            <br/>

            <label style={{color: 'white', background: currentDesign.accent}}>
                Accent Color: 
                <br/>
                <CompactPicker color={designObj.accent} onChange={(e) => handleChange("accent", e.hex)} />
            </label>    
            <br/>

            <button type="submit">Set Design Preferences</button>
        </form>
    </div>
  )
}

export default DesignForm
