import React from 'react';

export const Users = ({ promise }) => {
    const users = promise.read();
    return (<div>Users: {users.map((u, i) => (<p key={i}>{u.first_name} {u.last_name} | {u.email}</p>))}</div>)
}