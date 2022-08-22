// import React, { useState, useContext } from 'react'
// import SettingsForm from './SettingsForm'
// import DesignForm from '../designs/DesignForm'
// import { DisperseInfo } from '../../Disperse'
// import { useDesign } from '../designs/useDesign'
// import { StyledBackground } from '../../Styles/Styled'
// import Login from './Login'

// const SettingsContainer = () => {
//   const { loggedIn } = useContext(DisperseInfo)
//   const design = useDesign()
//   // const [showSettings, setShowSettings] = useState(false)
//   // const [showDesign, setShowDesign] = useState(false)

//   // const toggleSettings = () => {
//   //   setShowSettings(!showSettings)
//   // }

//   // const displaySettings = showSettings == true ? <SettingsForm toggle={toggleSettings}/> : ""

//   // const toggleDesign = () => {
//   //   setShowDesign(!showDesign)
//   // }

//   // const displayDesign = showDesign == true ? <DesignForm toggle={toggleDesign}/> : ""

//   // const togglePerson = () => {
//   //   setShowPerson(!showPerson)
//   // }
  
// if (loggedIn ){
//   return (
//     <StyledBackground backgroundColor={design.background}> 
//       <h3>Settings:  </h3>
//       <SettingsForm />
//       {/* <hr/>
//       <label>User Settings: </label>
//         <input
//           type="checkbox"
//           checked={showSettings}
//           onChange={toggleSettings}/>
//       {displaySettings}
//       <hr/>
//       <label>Personalize Design: </label>
//         <input
//             type="checkbox"
//             checked={showDesign}
//             onChange={toggleDesign}/>
//       {displayDesign}
//       <hr/>         */}
//     </StyledBackground>
    
//   )} else {
//     return (
//      <Login />
//     )
//   }
  
// }

// export default SettingsContainer