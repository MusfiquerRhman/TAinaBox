import React, { useContext, useState } from 'react';
import TableFoot from '../../components/Table/TableFoot';
import TableRow from '../../components/Table/TableRow';
import DropDown from '../../components/UI Elements/DropDown';
import SortButton from '../../components/UI Elements/SortButton';
import { UserContext } from '../../contexts/UserContext';
import { compare } from '../helperFunctions';

const Table = React.memo(() => {
    const { userState, userDispatch, actionType } = useContext(UserContext);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const changeStatusValue = (e) => {
        userDispatch({
            type: actionType.ADD_DATA,
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    let maxPages = Math.floor(userState.users.length / rowsPerPage);

    const decrementPage = () => {
        setPage(page => page > 0 ? page - 1 : page)
    }

    const incrementPage = () => {
        setPage(page => page < maxPages ? page + 1 : page);
    }

    const handleChangePerPage = (e) => {
        setRowsPerPage(e.target.value)
    }

    const handleClickSort = (fieldName, iconOf) => {
        userDispatch({
            type: actionType.SORT_ORDER,
            payload: {
                orderBy: fieldName,
                iconOf: iconOf
            }
        })
    };

    const tableHeads = [
        { name: 'Name', status: userState.sortName, handleClick: () => handleClickSort('name', 'sortName') },
        { name: 'Type', status: userState.sortType, handleClick: () => handleClickSort('type', 'sortType') },
        { name: 'Email', status: userState.sortEmail, handleClick: () => handleClickSort('email', 'sortEmail') },
        { name: 'Phone No', status: userState.sortPhone, handleClick: () => handleClickSort('phone', 'sortPhone') },
        { name: 'Status', status: userState.sortStatus, handleClick: () => handleClickSort('status', 'sortStatus') },
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [
        { value: 0, text: 'Active' },
        { value: 1, text: 'Suspended' },
        { value: 2, text: 'Deactivated' },
    ]

    return (
        <table className='table'>
            <thead>
                <tr className='table__head-row'>
                    {tableHeads.map((item, index) => (
                        <th key={index} className='table__head'>
                            <SortButton
                                name={item.name}
                                state={item.status}
                                handleClick={item.handleClick}
                                key={index}
                            />
                        </th>
                    ))}
                    <th className='table__head'>Action</th>
                </tr>
            </thead>
            <tbody>
                {userState.users
                    .sort(compare(userState.order, userState.sortBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => (
                        <React.Fragment key={index}>
                            <TableRow
                                item={item}
                                handleClick={handleClick}
                                handleClose={handleClose}
                                anchorEl={anchorEl}
                            >
                                <td>
                                    <DropDown
                                        value={userState.status}
                                        name={'status'}
                                        options={options}
                                        onChange={changeStatusValue}
                                    />
                                </td >
                            </TableRow>
                        </React.Fragment>
                    ))}
            </tbody>
            <TableFoot page={page}
                handleChangePerPage={handleChangePerPage}
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                maxPages={maxPages}
            />
        </table>
    )
})


export default Table;