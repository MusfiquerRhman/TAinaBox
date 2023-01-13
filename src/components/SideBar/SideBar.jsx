import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClassIcon from '@mui/icons-material/Class';
import FeedbackIcon from '@mui/icons-material/Feedback';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBarStyles.scss';

const CustomNavLinks = ({text, link, Icon}) => (
    <NavLink to={link} className={`sidebar__link  ${(navData) => (navData.isActive ? "active" : '')}`}>
        <Icon />
        <span className='sidebar__link--text'>{text}</span>
    </NavLink>
)


const SideBar = React.memo((props) => {
    return (
        <div className='container'>
            <div className='sidebar__container'>
                <div className='sidebar__title-box'>
                    <h1 className='sidebar__title'>TA in a Box</h1>
                </div>
                <div className='sidebar__links'>
                    <CustomNavLinks Icon={ClassIcon} link='/' text="Class"/>
                    <CustomNavLinks Icon={GroupIcon} link='/user' text="User"/>
                    <CustomNavLinks Icon={FeedbackIcon} link='/feedback' text="Feedback"/>
                    <CustomNavLinks Icon={AccountCircleIcon} link='/profile' text="Profile"/>
                </div>
            </div>

            <main>{props.children}</main>
        </div>
    )
})

export default SideBar;