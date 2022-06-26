import React, { useState, useEffect } from 'react'
import { SwatchesPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { designUpdated, designAdded, designSaved } from './designSlice';

const DesignForm = () => {;
    const dispatch = useDispatch()
    const design = useSelector(state => state.design.entities)
    const b = (design.background == null ? "#90a4ae" : design.background)
    const m = (design.main == null ? "#455a64" : design.main)
    const a = (design.accent == null ? "#81c784" : design.accent)

    const [designObj, setDesignObj] = useState({
        banner: '',
        background: b,
        main: m,
        accent: a
    })

    useEffect(() => {
        dispatch(designUpdated(designObj))
    }, [designObj])

    const handleChange = (name, color) => {
        setDesignObj({
            ...designObj,
            [name]: color,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(designSaved(designObj));

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Banner Image: </label>
                <input type="text" name="banner"/>
                <br/>
            
            <label style={{color: 'white', background: designObj.background}}>
                Background Color: 
                <SwatchesPicker color={designObj.background} name="background" onChange={(e) => handleChange("background", e.hex)} />
            </label>    
            <br/>

            <label style={{color: 'white', background: designObj.main}}>
                Main Color: 
                <SwatchesPicker color={designObj.main} onChange={(e) => handleChange("main", e.hex)} />
            </label>    
            <br/>

            <label style={{color: 'white', background: designObj.accent}}>
                Accent Color: 
                <SwatchesPicker color={designObj.accent} onChange={(e) => handleChange("accent", e.hex)} />
            </label>    
            <br/>

            <button type="submit">Set Design Preferences</button>

        </form>
        DesignForm
    </div>
  )
}

export default DesignForm
