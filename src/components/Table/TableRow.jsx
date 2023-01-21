import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const TableRow = React.memo(props => {
    const {item, handleClick, handleClose, anchorEl} = props;
    const open = Boolean(anchorEl);

    return (
        <tr>
            {
                Object.keys(item).map((key, i) => (
                    <td key={i}>{item[key]}</td>
                ))
            }
            {props.children}
            <td>
                <button style={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    cursor: 'pointer'
                }}
                    onClick={handleClick}
                >
                    <MoreVertIcon onClick={handleClick} />
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    elevation={0}
                >
                    <MenuItem onClick={handleClose}>View</MenuItem>
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Detail</MenuItem>
                </Menu>
            </td>
        </tr>
    )
})

export default TableRow