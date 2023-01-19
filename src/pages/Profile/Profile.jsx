import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useState } from "react";
import ClassAndHours from '../../components/Popups/ClassAndHours';
import { ProfileContext } from '../../contexts/ProfileContext';

const Profile = () => {
    const { profileState } = useContext(ProfileContext);
    const [openSchedule, setOpenSchedule] = useState(false);

    const handleClickEditSchedule = () => {
        setOpenSchedule(true);
    }

    const handleCloseSchedule = () => {
        setOpenSchedule(false);
    }

    return (
        <>
            <section className='topic__container' >
                <div className='popup'>
                    <Dialog onClose={handleCloseSchedule} open={openSchedule}>
                        <ClassAndHours handleClose={handleCloseSchedule}/>
                    </Dialog>
                </div>
                <div className='header__container'>
                    <div className="header__details">
                        <div className="header__image">
                            <img alt='user' src={'https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/117745653_176475144041910_3998483349071500847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEOOdWoTMevhkzhdB3CAC4Lk_z1cVStw4iT_PVxVK3DiI3lnbbbSF9PW-DpLLwHLaY5xcsL2kNHxnrP0i_CIyeq&_nc_ohc=4H0iMZlMvwkAX9fTbkm&_nc_ht=scontent.fdac149-1.fna&oh=00_AfAnwuTAzARP3tQkV8aKbloxFisCi_kaCwVimd794AAXMg&oe=63E8FCDF'} />
                        </div>
                        <div>
                            <h1 className='title-tertiary'>{profileState.name}</h1>
                            <h4 className='header__details--info'>{profileState.type} / {profileState.role}</h4>
                            <p className='header__details--info'>{profileState.location}</p>
                        </div>
                        <div className='profile__sideinfo'>
                            <h4 className='title-tertiary'>Office Hours: </h4>
                            {profileState.officeHours.map((item, index) => (
                                <p key={index} className='header__details--info'>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="header__actions">
                        <button className="bordered__button margin__bottom">
                            <AccountCircleOutlinedIcon sx={{ marginRight: '0.5rem' }} />
                            View Profile
                        </button>
                        <button className="bordered__button margin__bottom" onClick={handleClickEditSchedule}>
                            <AccessTimeIcon sx={{ marginRight: '0.5rem' }} />
                            Edit Schedule
                        </button>
                        <button className="bordered__button margin__bottom">
                            <ManageAccountsIcon sx={{ marginRight: '0.5rem' }} />
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className='profile__details-card'>
                    <h4 className='title-tertiary'>Courses and Sections: </h4>
                    {
                        profileState.sections.map((item, index) => (
                            <p key={index} className='header__details--info'>{profileState.course} - Section: {item}</p>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Profile;