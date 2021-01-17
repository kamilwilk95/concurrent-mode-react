import React, { Suspense } from 'react';
import { Api } from 'api';
import { Users } from 'Users';
import { Loader } from 'Loader';


const resource = Api.getUsersForSuspense();

export const SuspenseBasic = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Users promise={resource} />
        </Suspense>
    )
}