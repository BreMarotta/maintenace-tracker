import React, { useState, useEffect, useContext } from 'react';
import { DisperseInfo } from '../../Disperse';
import { CompactPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { designUpdate } from '../designs/designSlice';
import { Button, StyledBackground } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import { Form } from '../../Styles/Form.style';
import Login from './Login';
import { useHistory } from 'react-router-dom';

const SettingsForm = () => {
    const dispatch = useDispatch()
    const design = useDesign()
    const history = useHistory()
    const { loggedIn } = useContext(DisperseInfo)
    const errors = useSelector((state) => state.design.errors);   
    const [showBannerInput, setShowBannerInput] = useState(false)

    const [settingsObj, setSettingsObj] = useState({
        id: "",
        company_name: "",
        members: "",
        main: "",
        accent: "",
        background: "",
        banner: ""
    })

    const [d, setD] = useState(false)

    useEffect(() => {
        const x = design.id ? design.id : ""
        const company_name = design.id ? design.company_name : ""
        const members = design.id ? design.members : ""
        const main = design.id ? design.main : ""
        const accent = design.id ? design.accent : ""
        const background = design.id ? design.background : ""
        const banner = design.id ? design.banner : ""
        const newObj = {...settingsObj, 
            ["id"]: x,
            ["company_name"]: company_name,
            ["members"]: members,
            ["main"]: main,
            ["accent"]: accent,
            ["background"]: background,
            ["banner"]: banner,
            }
            setSettingsObj(newObj)
    }, [design])

    const handleChange = (e) => {
        const newObj = {...settingsObj, [e.target.name]: e.target.value}
        setSettingsObj(newObj)
    }

    const handleColorChange = (name, color) => {
        const newObj = {
            ...settingsObj,
            [name]: color,
        }
        setSettingsObj(newObj);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setD(false)
        dispatch(designUpdate(settingsObj))
        history.push('/')
    }

    const errorLis = errors.map(x => <li key={x}>{x}</li>)

    const bannerInput = showBannerInput == true ? 
    <div>
        <label>New Image: </label>
        <input type="text" id="banner" name="banner" onChange={handleChange}/> 
    </div>: ""

    const returnDefault = () => {
        setD(!d)
        const newObj = {...settingsObj, 
            background: "#A9A9A9",
            main: "#2F4F4F",
            accent: "#FF7F50",
            banner: "https://media.istockphoto.com/vectors/work-tools-pattern-of-hammer-screwdriver-spanner-vector-id1177622447?k=20&m=1177622447&s=612x612&w=0&h=VtiVLiAnbMUJKXQxwGcl2hq8XDN-pPOJQKiu1zWV6kU=",
            };
        setSettingsObj(newObj)
    }
if(loggedIn){
  return (
    <StyledBackground backgroundColor={design.background}> 
        <h3>Settings:  </h3>
        <Form onSubmit={handleSubmit}>
            {errorLis}
            <label>Organization or Company Name:</label>
                <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    value={settingsObj.company_name}
                    onChange={handleChange}></input>
                    <br/>
                    <br/>
            <label>Type of People:</label>
            <div>On this site, you can include family members, employees, or other types of people who will be able to perform repairs.</div>
                <input 
                    type="text"
                    name="members"
                    id="members"
                    value={settingsObj.members}
                    onChange={handleChange}></input>
                    <br/>

                    <label>Change Banner Background:</label>
                <input
                    type="checkbox"
                    checked={showBannerInput}
                    onChange={(e) => setShowBannerInput(!showBannerInput)} />
                {bannerInput}
            
            <br/>
            
            <label>
                Background Color:  </label>   
                    <div>
                        <CompactPicker color={settingsObj.background} name="background" onChange={(e) => handleColorChange("background", e.hex)} />
                    </div>
            <br/>

            <label>
                Main Color:</label>
                    <div>
                        <CompactPicker color={settingsObj.main} onChange={(e) => handleColorChange("main", e.hex)} />
                    </div>
            <br/>

            <label>
                Accent Color:</label>
                    <div>
                        <CompactPicker color={settingsObj.accent} onChange={(e) => handleColorChange("accent", e.hex)} />
                    </div>
                
            <label>Return to Default Design: </label>
            <input
                type="checkbox"
                checked={d}
                onChange={returnDefault}/>
                
            <br/>

            <Button backgroundColor={design.accent}type="submit">Apply Changes</Button>
        </Form>
    </StyledBackground  >
  )
    }else{
        return (
            <Login />
        )
    }
}

export default SettingsForm
