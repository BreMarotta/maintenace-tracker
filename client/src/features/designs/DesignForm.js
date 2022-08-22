// import React, { useState } from 'react'
// import { CompactPicker } from 'react-color';
// import { useSelector, useDispatch } from 'react-redux';
// import { designUpdate } from './designSlice'
// import { useDesign } from './useDesign';
// import { Button } from '../../Styles/Styled';
// import { Form } from '../../Styles/Form.style';

// const DesignForm = ({ toggle }) => {;
//     const dispatch = useDispatch()
//     const user = useSelector((state) => state.users.user)
//     const design = useDesign(user)
//     const errors = useSelector((state) => state.design.errors);
//     const [showBannerInput, setShowBannerInput] = useState(false)

//     const designInArray = useSelector(state => state.design.design[0])
//     const designAsObj = useSelector(state => state.design.design)
//     const currentDesign = designInArray == undefined ? designAsObj : designInArray

//     const [designObj, setDesignObj] = useState({
//         id: currentDesign.id,
//         background: currentDesign.background,
//         accent: currentDesign.accent,
//         main: currentDesign.main,
//         banner: currentDesign.banner
//     })

//     const handleBannerChange = (e) => {
//         const newObj = {
//             ...designObj, 
//             [e.target.name]: e.target.value
//         }
//         setDesignObj(newObj)
//     }

//     const handleChange = (name, color) => {
//         const newObj = {
//             ...designObj,
//             [name]: color,
//         }
//         setDesignObj(newObj);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(designUpdate(designObj));
//         toggle();
//     }

//     const bannerInput = showBannerInput == true ? 
//         <div>
//             <label>New Image: </label>
//             <input type="text" id="banner" name="banner" onChange={handleBannerChange}/> 
//         </div>: ""

//   return (
//     <div>
//         <Form onSubmit={handleSubmit}>
//             <label>Change Banner Background:</label>
//                 <input
//                     type="checkbox"
//                     checked={showBannerInput}
//                     onChange={(e) => setShowBannerInput(!showBannerInput)} />
//                 {bannerInput}
            
//             <br/>
            
//             <label>
//                 Background Color:  </label>   
//                     <div>
//                         <CompactPicker color={designObj.background} name="background" onChange={(e) => handleChange("background", e.hex)} />
//                     </div>
//             <br/>

//             <label>
//                 Main Color:</label>
//                     <div>
//                         <CompactPicker color={designObj.main} onChange={(e) => handleChange("main", e.hex)} />
//                     </div>
//             <br/>

//             <label>
//                 Accent Color:</label>
//                     <div>
//                         <CompactPicker color={designObj.accent} onChange={(e) => handleChange("accent", e.hex)} />
//                     </div>
                
                
//             <br/>

//             <Button backgroundColor={design.main}type="submit">Set Design Preferences</Button>
//         </Form>
//     </div>
//   )
// }

// export default DesignForm
