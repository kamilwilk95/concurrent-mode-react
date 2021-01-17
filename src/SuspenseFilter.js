import { Api } from 'api'
import { Loader } from 'Loader';
import React, { Suspense } from 'react';
import { useState } from 'react';
import { Users } from 'Users';


export const SuspenseFilter = () => {

    const [resource, setResource] = useState(() => Api.getUsersForSuspenseFilter(''));

    return (
        <div>
            <input placeholder="Filter by name" onChange={(e) => {
                console.log('onChange');
                setResource(() => Api.getUsersForSuspenseFilter(e.target.value));
            }} />

            <Suspense fallback={<Loader />}>
                <Users promise={resource} />
            </Suspense>
        </div>
    );
}