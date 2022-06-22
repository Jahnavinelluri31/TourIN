import React from 'react';
import {useEffect, useState} from 'react';

function Users()
{
    let [users,setUsers]=useState([])

    //Make API call
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(apiData => setUsers(apiData))
        .catch(err => console.log(err))
    },[])
    return(
        <div id="use">
        <div className='container'>
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((userObj) => <tr key={userObj.id}>
                        <td>{userObj.userId}</td>
                        <td>{userObj.id}</td>
                        <td>{userObj.title}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div> 
    </div> 
    )
}
export default Users;