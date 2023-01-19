import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Dialog from '@mui/material/Dialog';
import React, { useState } from "react";
import ClassAndHours from '../Popups/ClassAndHours';
import EditClassDetails from '../Popups/EditClassDetails';

const Header = () => {
    const [openSchedule, setOpenSchedule] = useState(false);
    const [openEditClass, setOpenEditClass] = useState(false);

    const handleClickEditSchedule = (e) => {
        e.preventDefault();
        setOpenSchedule(true);
    }

    const handleCloseSchedule = (e) => {
        e.preventDefault();
        setOpenSchedule(false);
    }

    const handleClickEditClass = (e) => {
        e.preventDefault();
        setOpenEditClass(true);
    }

    const handleCloseEditClass = (e) => {
        e.preventDefault();
        setOpenEditClass(false);
    }

    return (
        <section className="header__container">
            <div className='popup'>
                <Dialog onClose={handleCloseSchedule} open={openSchedule}>
                    <ClassAndHours handleClose={handleCloseSchedule} />
                </Dialog>                
                <Dialog onClose={handleCloseEditClass} open={openEditClass}>
                    <EditClassDetails handleClose={handleCloseEditClass} />
                </Dialog>
            </div>
            <div className="header__details">
                <div className="header__image">
                    <img alt='user' src={'https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/117745653_176475144041910_3998483349071500847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEOOdWoTMevhkzhdB3CAC4Lk_z1cVStw4iT_PVxVK3DiI3lnbbbSF9PW-DpLLwHLaY5xcsL2kNHxnrP0i_CIyeq&_nc_ohc=4H0iMZlMvwkAX9fTbkm&_nc_ht=scontent.fdac149-1.fna&oh=00_AfAnwuTAzARP3tQkV8aKbloxFisCi_kaCwVimd794AAXMg&oe=63E8FCDF'} />
                </div>
                <div>
                    <h1 className='title-tertiary'>Class Name</h1>
                    <h4 className='header__details--info'>Teacher / Co-teacher</h4>
                    <p className='header__details--info'>Class ID</p>
                    <p className='header__details--info'>8:30 am - 11:00am</p>
                    <p className='header__details--info'>12:00 pm - 3:00pm</p>
                    <p className='header__details--info'>4:00 pm - 5:00pm</p>

                    <button className="bordered__button">
                        <EditIcon sx={{ marginRight: '0.5rem' }} />
                        Edit Schedule
                    </button>
                </div>
            </div>
            <div className="header__actions">
                <button className="bordered__button margin__bottom" onClick={handleClickEditSchedule}>
                    <AccessTimeIcon sx={{ marginRight: '0.5rem' }} />
                    Location and Hours
                </button>
                <button className="bordered__button margin__bottom">
                    <ManageAccountsIcon sx={{ marginRight: '0.5rem' }} />
                    Manage Role
                </button>
                <button className="bordered__button margin__bottom" onClick={handleClickEditClass}>
                    <EditIcon sx={{ marginRight: '0.5rem' }} />
                    Edit Class
                </button>
            </div>
        </section>
    )
}

export default Header;