import ClassIcon from '@mui/icons-material/Class';
import FeedbackIcon from '@mui/icons-material/Feedback';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react';
import { NavLink } from 'react-router-dom';
import UVUSquareWhite from '../../assets/logo/UVUSquareWhite-0003.png';

const CustomNavLinks = ({text, link, Icon}) => (
    <NavLink to={link} className={`sidebar__link  ${(navData) => (navData.isActive ? "active" : '')}`}>
        <Icon className='sidebar__link--icon'/>
        <span className='sidebar__link--text'>{text}</span>
    </NavLink>
)

const SideBar = React.memo((props) => {
    return (
        <div className='container'>
            <div className='sidebar__container'>
                <div className='sidebar__title-box'>
                    <div className='sidebar__image--box'>
                        <img alt='Utah Valley University' src={UVUSquareWhite}/>
                    </div>
                    <h1 className='sidebar__title'>TA in a Box</h1>
                </div>
                <div className='sidebar__links'>
                    <CustomNavLinks Icon={ClassIcon} link='/' text="Class"/>
                    <CustomNavLinks Icon={GroupIcon} link='/users' text="User"/>
                    <CustomNavLinks Icon={FeedbackIcon} link='/feedback' text="Feedback"/>
                </div>
            </div>

            <main>{props.children}</main>
        </div>
    )
})

export default SideBar;