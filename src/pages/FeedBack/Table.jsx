import React, { useContext, useState } from 'react';
import TableFoot from '../../components/Table/TableFoot';
import TableRow from '../../components/Table/TableRow';
import SortButton from '../../components/UI Elements/SortButton';
import { FeedBackContext } from '../../contexts/FeedBackContext';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === true
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}



const Table = React.memo(() => {
    const { feedBackState, feedBackDispatch, actionType } = useContext(FeedBackContext);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    let maxPages = Math.floor(feedBackState.feedBack.length / rowsPerPage);

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
        feedBackDispatch({
            type: actionType.SORT_ORDER,
            payload: {
                orderBy: fieldName,
                iconOf: iconOf
            }
        })
    };
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <table className='table'>
            <thead>
                <tr className='table__head-row'>
                    <th className='table__head'>
                        <SortButton
                            name={'Name'}
                            state={feedBackState.sortName}
                            handleClick={() => handleClickSort('name', 'sortName')}
                        />
                    </th>
                    <th className='table__head'>Went Well</th>
                    <th className='table__head'>Could Improve</th>
                    <th className='table__head'>
                        <SortButton
                            name={'Timestamp'}
                            state={feedBackState.sortTimeframe}
                            handleClick={() => handleClickSort('timeStamp', 'sortTimeframe')}
                        />
                    </th>
                    <th className='table__head'>Resulting Feedback</th>
                    <th className='table__head'>Action</th>
                </tr>
            </thead>
            <tbody>
                {feedBackState.feedBack
                    .sort(getComparator(
                        feedBackState.order,
                        feedBackState.sortBy,
                    )).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => (
                        <TableRow 
                            item={item}
                            handleClick={handleClick}
                            handleClose={handleClose}
                            anchorEl={anchorEl}
                        />
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