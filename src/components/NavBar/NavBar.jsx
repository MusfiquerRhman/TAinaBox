import NotificationsIcon from '@mui/icons-material/Notifications';
import React from "react";

const NavBar = () => {
    return (
        <div className="navbar__container">
            <div className="navbar__left">
                <h2 className="title-tertiary">Class Management</h2>
                <NotificationsIcon />
            </div>
            <div className="navbar__right">
                <p className='title-tertiary'>Musfiquer Rhman</p>
                <div className='navbar__image-box'>
                    <img alt='user' src={'https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/117745653_176475144041910_3998483349071500847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEOOdWoTMevhkzhdB3CAC4Lk_z1cVStw4iT_PVxVK3DiI3lnbbbSF9PW-DpLLwHLaY5xcsL2kNHxnrP0i_CIyeq&_nc_ohc=4H0iMZlMvwkAX9fTbkm&_nc_ht=scontent.fdac149-1.fna&oh=00_AfAnwuTAzARP3tQkV8aKbloxFisCi_kaCwVimd794AAXMg&oe=63E8FCDF'}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;