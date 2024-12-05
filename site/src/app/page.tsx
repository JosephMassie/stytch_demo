'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useStytchUser } from '@stytch/nextjs';

export default function Home() {
    const { user, isInitialized } = useStytchUser();
    const router = useRouter();

    useEffect(() => {
        if (isInitialized && user) {
            router.replace('/dashboard');
        } else {
            router.replace('/login');
        }
    }, [router, user, isInitialized]);

    return (
        <main className="w-full min-h-full flex flex-col gap-8 row-start-2 items-center">
            <div className="min-h-full flex flex-row gap-8">Homepage</div>
        </main>
    );
}
