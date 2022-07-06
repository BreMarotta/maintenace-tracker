import React, { useState } from 'react'
import { CompactPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { designUpdate } from './designSlice'
import { useDesign } from './useDesign';

const DesignForm = ({ toggle }) => {;
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users.user)
    const design = useDesign(user)
    const errors = useSelector((state) => state.design.errors);

    const designInArray = useSelector(state => state.design.design[0])
    const designAsObj = useSelector(state => state.design.design)
    const currentDesign = designInArray == undefined ? designAsObj : designInArray

    const [designObj, setDesignObj] = useState({
        id: currentDesign.id,
        background: currentDesign.background,
        accent: currentDesign.accent,
        main: currentDesign.main
    })

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
            
            <label style={{color: 'white', background: design.background}}>
                Background Color: 
                <br/>
                <CompactPicker color={designObj.background} name="background" onChange={(e) => handleChange("background", e.hex)} />
            </label>    
            <br/>

            <label style={{color: 'white', background: design.main}}>
                Main Color: 
                <br/>
                <CompactPicker color={designObj.main} onChange={(e) => handleChange("main", e.hex)} />
            </label>    
            <br/>

            <label style={{color: 'white', background: design.accent}}>
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
