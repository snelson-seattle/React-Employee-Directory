import React from "react";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import TableRow from "../TableRow";
import TableData from "../TableData";
import TableHeading from "../TableHeading";

function Table({usersList, handleBtnClick}){
    return (
        <table className="table table-striped">
            <TableHead>
                <TableHeading>
                    <h4 className="text-left">Image</h4>
                </TableHeading>
                <TableHeading>
                    <h4 className="text-left">First Name</h4>
                </TableHeading>
                <TableHeading>
                    <h4 className="text-left" onClick={handleBtnClick}>Last Name</h4>
                </TableHeading>
                <TableHeading>
                    <h4 className="text-left">Phone</h4>
                </TableHeading>
                <TableHeading>
                    <h4 className="text-left">Email</h4>
                </TableHeading>
                <TableHeading>
                <h4 className="text-left">DOB</h4>
                </TableHeading>
            </TableHead>
            <TableBody>
                {usersList.map(user => {
                    return(
                        <TableRow>
                            <TableData>
                                <img src={user.picture.thumbnail}></img>
                            </TableData>
                            <TableData>
                                {user.name.first}
                            </TableData>
                            <TableData>
                                {user.name.last}
                            </TableData>
                            <TableData>
                                {user.phone}
                            </TableData>
                            <TableData>
                                <a href="mailto:">{user.email}</a>
                            </TableData>
                            <TableData>
                                {user.dob.date.slice(0,10)}
                            </TableData>
                        </TableRow>
                    )
                })}
            </TableBody>
        </table>
    );
}

export default Table;