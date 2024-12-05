'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useStytchUser, useStytch } from '@stytch/nextjs';

const logoutUser = async (token: string) => {
    fetch('http://localhost:3001/logout', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            token,
        }),
    });
};

export default function Dashboard() {
    const { user, isInitialized } = useStytchUser();
    const router = useRouter();
    const stytch = useStytch();
    const pwdToken = sessionStorage.getItem('token');

    useEffect(() => {
        if (!isInitialized) return;

        if (!user) {
            router.replace('/login');
        }
    }, [router, user, isInitialized]);

    return (
        <main className="w-full min-h-full flex flex-col gap-8 row-start-2 items-center">
            <h1>Dashboard</h1>
            <button
                className="mt-4 bg-blue-400 px-8 py-2 rounded"
                onClick={() => {
                    if (pwdToken) {
                        logoutUser(pwdToken).then(() => {
                            sessionStorage.removeItem('token');
                            router.push('/login');
                        });
                    }

                    stytch.session.revoke();
                }}>
                log out
            </button>
        </main>
    );
}
