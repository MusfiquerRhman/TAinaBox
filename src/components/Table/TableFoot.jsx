import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';

const TableFoot = React.memo(props => {
    const { handleChangePerPage, decrementPage, incrementPage, page, maxPages} = props;

    return (
        <tfoot>
        <tr className='per__page'>
            <td colSpan={3}></td>
            <td colSpan={1}>
                <span className='per__page-title'>Rows Per page</span>
                <select className='per__page-select' onChange={handleChangePerPage}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                </select>
            </td>
            <td colSpan={1}>
                <button onClick={decrementPage} className='page__nav' disabled={page <= 0}>
                    <ArrowBackIosIcon /> Previous page
                </button>
            </td>
            <td colSpan={1}>
                <button onClick={incrementPage} className='page__nav' disabled={page >= maxPages}>
                    Next page <ArrowForwardIosIcon />
                </button>
            </td>
        </tr>
    </tfoot>
    )
})

export default TableFoot;