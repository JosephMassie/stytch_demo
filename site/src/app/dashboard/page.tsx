'use client';

import { useMemo } from 'react';
import { useStytchMemberSession } from '@stytch/nextjs/b2b';

export default function Dashboard() {
    const { session, isInitialized } = useStytchMemberSession();

    const role = useMemo(() => {
        return session?.roles.includes('stytch_admin') ? 'admin' : 'user';
    }, [session?.roles]);

    if (!isInitialized) return <div>Loading..</div>;

    return (
        <div className="p-8">
            <h2 className="text-2xl">Welcome to your Datadog dashboard</h2>
            <p className="mt-8">
                You are currently logged in as an{' '}
                <span className="italic">{role}</span>.
            </p>
        </div>
    );
}
