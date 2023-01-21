import ClearIcon from '@mui/icons-material/Clear';
import Chip from '@mui/material/Chip';
import React, { useContext, useDeferredValue, useEffect, useState } from "react";
import DropDown from '../../components/UI Elements/DropDown';
import { UserContext } from "../../contexts/UserContext";

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
    { value: 0, text: 'Student' },
    { value: 1, text: 'Teacher' },
    { value: 2, text: 'Dean' },
    { value: 3, text: 'Co Teacher' },
]

const Filters = React.memo(props => {
    const { userState, userDispatch, actionType } = useContext(UserContext);
    const [searchedTermCourses, setSearchedTermCourses] = useState('');
    const [searchResultCourses, setSearchResultCourses] = useState([]);
    const deferredSearchTermCourses = useDeferredValue(searchedTermCourses).toLowerCase();

    const [searchedTermClass, setSearchedTermClass] = useState('');
    const [searchResultClass, setSearchResultClass] = useState([]);
    const deferredSearchTermClass = useDeferredValue(searchedTermClass).toLowerCase();


    const changeValue = (e) => {
        e.preventDefault();

        userDispatch({
            type: actionType.ADD_DATA,
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleDeleteChips = (value, name) => {
        userDispatch({
            type: actionType.DELETE_CHIPS,
            payload: {
                value: value,
                name: name
            }
        })
    }

    const handleChangeAddChips = (value, name) => {
        userDispatch({
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

    return (
        <div className="user__filters">
            <div className='user__filters-options--box'>
                <div className='user__filters-options'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            name='name'
                            className='filters__input'
                            placeholder='First name and/or Last name'
                            value={userState.name}
                            type="text"
                            id="name"
                            onChange={changeValue}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            name='email'
                            className='filters__input'
                            placeholder='Email address'
                            value={userState.email}
                            type="email"
                            id="email"
                            onChange={changeValue}
                        />
                    </div>
                    <div>
                        <label htmlFor='number'>Phone Number</label>
                        <input
                            name='number'
                            className='filters__input'
                            placeholder='Email address'
                            value={userState.number}
                            type="text"
                            id="number"
                            onChange={changeValue}
                        />
                    </div>
                    <div>
                        <DropDown
                            title={'Status'}
                            value={userState.status}
                            name={'status'}
                            options={options}
                            onChange={changeValue}
                        />
                    </div>
                </div>
                <div className='user__filters-options'>
                    <div className='chip__box'>
                        <label htmlFor='number'>Courses</label>
                        <div className='chips'>
                            {userState.course.map((value) => (
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
                                    <ClearIcon sx={{margin: 'auto'}}/>
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
                            {userState.class.map((value) => (
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
                                    <ClearIcon sx={{margin: 'auto'}}/>
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
                <button className='bordered__button'>Create User</button>
            </div>
        </div>
    )
})

export default Filters;