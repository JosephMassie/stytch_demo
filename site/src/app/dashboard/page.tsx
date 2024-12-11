'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import {
    useStytchB2BClient,
    useStytchMemberSession,
    useStytchOrganization,
} from '@stytch/nextjs/b2b';

export default function Dashboard() {
    const { session, isInitialized } = useStytchMemberSession();
    const stytch = useStytchB2BClient();
    const { organization } = useStytchOrganization();
    const router = useRouter();

    const role = useMemo(() => {
        return session?.roles.includes('stytch_admin') ? 'admin' : 'user';
    }, [session?.roles]);

    useEffect(() => {
        if (isInitialized && !session) {
            router.replace('/login');
        }
    }, [isInitialized, session]);

    if (!isInitialized) return <div>Loading..</div>;

    return (
        <main className="w-full min-h-full flex flex-col gap-8 row-start-2 items-center">
            <h1>Dashboard</h1>
            <p>
                Hello {'user'}! You are currently logged in to
                <br />
                <span>{organization?.organization_name}</span> as a{' '}
                <span>{role}</span>
            </p>
            <button
                className="mt-4 bg-blue-400 px-8 py-2 rounded"
                onClick={() => {
                    stytch.session.revoke();
                }}>
                log out
            </button>
        </main>
    );
}
