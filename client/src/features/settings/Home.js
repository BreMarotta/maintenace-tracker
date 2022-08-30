import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledBackground, StyledLi, Banner } from '../../Styles/Styled';
import Login from './Login'

const Home = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const user = useSelector((state) => state.users.user)

  
    if (!loggedIn){
      return (
        <Login />
      
      )
    } else {
    return (
        <StyledBackground backgroundColor={design.background}>
          <Banner main={design.main}>{design.company_name != "" ? design.company_name : user.username}</Banner>
          <ul>
            <StyledLi backgroundColor={design.main}><li>Welcome to your Maintenance Tracker Application! 
              <br/>This site is designed to help keep track of ongoing maintenance as well as important information for your personal and business items. Please see the list below for a deep dive of the different functions you can use with this application. </li></StyledLi>
            <hr color={design.accent}/>

            <StyledLi backgroundColor={design.background}>If you click on the <Link to='/people'><strong>{design.members}</strong></Link> tab, you can see a list of all people currently saved. From that page, you can add people, go to an individual's page to see or update their details, and filter to only see currently active people. On a person's page, you can see a record of all their repairs. People with no logged repairs can be deleted at any time. </StyledLi>
            <br/>
            <StyledLi backgroundColor={design.background}>Clicking on <Link to='/items'><strong>Items</strong></Link> will navigate to a landing page for all items currently saved. From this page, you can add items to your inventory or click on individual item to see its details. From an item's page, you can update information, add parts to that item, and update the details for those parts. </StyledLi>
            <br/>
            <StyledLi backgroundColor={design.background}>Visiting <Link to='/repairs'><strong>Repairs</strong></Link> will show a collection of all repairs currently logged on your site. These repairs can be filtered to either show every repair listed, or to just show ongoing repairs. With each repair, you can update all details. Repairs can be deleted at any time.  </StyledLi>
            <br/>
            <StyledLi backgroundColor={design.background}>Clicking on <Link to='/locations'><strong>Locations</strong></Link> will take you to a list of all locations for your application. From this page, you can add additiaonl locations and update those already in your system. If a location does not have any items assigned to it, it can be deleted at any time. By clicking on the "..." button for a location, you can see a list of items stored there. </StyledLi>
            <br/>
            <StyledLi backgroundColor={design.background}>The <Link to='/categories'><strong>Categories </strong></Link> page shows a list of all categories for your account. You can add new categories, edit those already saved, delete categories with no assigned items, and view a list of all items assigned to that category. Categories with no items can be deleted at any time. </StyledLi>
            <br/>
            <StyledLi backgroundColor={design.background}>Visit the settings <Link to='/settings'>⚙️ </Link> page at any time to personalize your site. Members can be renamed, you can add a company or organization name, and change the styling of the site. Any changes made will be reflected throughout the site. At any time, you can return to default styling options from the settings page. </StyledLi>

          </ul>      
        </StyledBackground>
    )
    }
}

export default Home