import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {
    
    return(
        <div style={{backgroundColor:'aqua'}} className="display-board">
            <h4 style={{color: 'black'}}>Users Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}