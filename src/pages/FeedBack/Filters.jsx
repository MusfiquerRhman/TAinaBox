import ClearIcon from '@mui/icons-material/Clear';
import { Dialog } from '@mui/material';
import Chip from '@mui/material/Chip';
import React, { useContext, useDeferredValue, useEffect, useState } from "react";
import UserPopup from '../../components/Popups/UserPopup';
import DropDown from '../../components/UI Elements/DropDown';
import { FeedBackContext } from '../../contexts/FeedBackContext';

const coursesList = [
    'CSE 100',
    'ASE 101',
    'BSE 102',
    'DSE 103',
    'ESE 104',
    'FSE 105',
    'CFE 106',
    'CGE 107',
    'CTE 108',
    'CST 109',
    'ASG 110',
]

const options = [
    { value: 0, text: 'Positive' },
    { value: 1, text: 'Negative' },
    { value: 2, text: 'Neutral' },
]

const Filters = React.memo(props => {
    const { feedBackState, feedBackDispatch, actionType } = useContext(FeedBackContext);
    const [searchedTermCourses, setSearchedTermCourses] = useState('');
    const [searchResultCourses, setSearchResultCourses] = useState([]);
    const deferredSearchTermCourses = useDeferredValue(searchedTermCourses).toLowerCase();

    const [searchedTermClass, setSearchedTermClass] = useState('');
    const [searchResultClass, setSearchResultClass] = useState([]);
    const deferredSearchTermClass = useDeferredValue(searchedTermClass).toLowerCase();

    const [openAddParticipant, setOpenAddParticipant] = useState(false);

    const changeValue = (e) => {
        e.preventDefault();

        feedBackDispatch({
            type: actionType.ADD_DATA,
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleDeleteChips = (value, name) => {
        feedBackDispatch({
            type: actionType.DELETE_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }

    const handleChangeAddChips = (value, name) => {
        feedBackDispatch({
            type: actionType.ADD_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }

    const onChangeSearchCourses = (e) => {
        setSearchedTermCourses(e.target.value);
    }

    const onChangeSearchClass = (e) => {
        setSearchedTermClass(e.target.value);
    }

    const clearClassSearch = () => {
        setSearchedTermClass('')
    }

    const clearCourseSearch = () => {
        setSearchedTermCourses('')
    }

    useEffect(() => {
        setSearchResultCourses(coursesList.filter(item =>
            item.toLowerCase().includes(deferredSearchTermCourses)
        ));
    }, [deferredSearchTermCourses])

    useEffect(() => {
        setSearchResultClass(coursesList.filter(item =>
            item.toLowerCase().includes(deferredSearchTermClass)
        ));
    }, [deferredSearchTermClass])

    const handleCloseAddParticipant = () => {
        setOpenAddParticipant(false);
    }

    const handleSubmitAddParticipant = (e) => {
        e.preventDefault();

        
        // TODO:
    }

    return (
        <div className="user__filters">
            <div className='popup'>
                <Dialog onClose={handleCloseAddParticipant} open={openAddParticipant}>
                    <UserPopup type='Add' handleSubmit={handleSubmitAddParticipant} />
                </Dialog>
            </div>
            <div className='user__filters-options--box'>
                <div className='user__filters-options'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            name='name'
                            className='filters__input'
                            placeholder='First name and/or Last name'
                            value={feedBackState.name}
                            type="text"
                            id="name"
                            onChange={changeValue}
                        />
                    </div>
                    <div>
                        <label htmlFor='inFeedBack'>In Feedback</label>
                        <input
                            name='inFeedBack'
                            className='filters__input'
                            placeholder='Email address'
                            value={feedBackState.inFeedBack}
                            type="text"
                            id="inFeedBack"
                            onChange={changeValue}
                        />
                    </div>
                    <div>
                        <DropDown
                            title={'Resulting Feedback'}
                            value={feedBackState.resultingFeedback}
                            name={'resultingFeedback'}
                            options={options}
                            onChange={changeValue}
                        />
                    </div>
                </div>
                <div className='user__filters-options'>
                    <div className='chip__box'>
                        <label htmlFor='number'>Courses</label>
                        <div className='chips'>
                            {feedBackState.course.map((value) => (
                                <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                                    key={value}
                                    label={value}
                                    onDelete={() => handleDeleteChips(value, 'course')}
                                />
                            ))}
                        </div>
                        <div className='search'>
                            <div className='search__box' >
                                <input type="text"
                                    className='search__input'
                                    placeholder='Type to Search Courses'
                                    onChange={onChangeSearchCourses}
                                    value={searchedTermCourses}
                                />
                                <div className='search__clear' onClick={clearCourseSearch}>
                                    <ClearIcon sx={{ margin: 'auto' }} />
                                </div>
                            </div>
                        </div>
                        {
                            (searchedTermCourses !== '' && (
                                <div className='search__results'>
                                    {
                                        searchResultCourses.length === 0 ? (
                                            <p className='search_item'>Nothing Found</p>
                                        ) : (
                                            searchResultCourses.map((item, i) => (
                                                <p key={i}
                                                    onClick={() => handleChangeAddChips(item, 'course')}
                                                    className='search_item'
                                                >
                                                    {item}
                                                </p>
                                            ))
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className='chip__box' >
                        <label htmlFor='number'>Classes</label>
                        <div className='chips'>
                            {feedBackState.class.map((value) => (
                                <Chip sx={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                                    key={value}
                                    label={value}
                                    onDelete={() => handleDeleteChips(value, 'class')}
                                />
                            ))}
                        </div>
                        <div className='search'>
                            <div className='search__box' >
                                <input type="text"
                                    className='search__input'
                                    placeholder='Type to Search Class'
                                    onChange={onChangeSearchClass}
                                    value={searchedTermClass}
                                />
                                <div className='search__clear' onClick={clearClassSearch}>
                                    <ClearIcon sx={{ margin: 'auto' }} />
                                </div>
                            </div>
                        </div>
                        {
                            (searchedTermClass !== '' && (
                                <div className='search__results'>
                                    {
                                        searchResultClass.length === 0 ? (
                                            <p className='search_item'>Nothing Found</p>
                                        ) : (
                                            searchResultClass.map((item, i) => (
                                                <p className='search_item'
                                                    onClick={() => handleChangeAddChips(item, 'class')}
                                                    key={i}
                                                >
                                                    {item}
                                                </p>
                                            ))
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='user__filter-buttons'>
                <button className='bordered__button warning__button'>Reset Filter</button>
                <button className='bordered__button'>Filter</button>
            </div>
        </div>
    )
})

export default Filters;