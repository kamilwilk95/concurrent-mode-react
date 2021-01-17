import React from 'react';
import {
    Link
} from "react-router-dom";
export const Sidebar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/suspense">Suspense</Link>
            </li>
            <li>
                <Link to="/s-filter">Suspense Filter</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    </nav>
)