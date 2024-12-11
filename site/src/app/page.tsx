'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { useStytchMemberSession } from '@stytch/nextjs/b2b';

export default function Home() {
    const { session, isInitialized } = useStytchMemberSession();
    const router = useRouter();

    useEffect(() => {
        if (isInitialized && session) {
            router.replace('/dashboard');
        }
    }, [router, session, isInitialized]);

    return (
        <main className="w-full min-h-full flex flex-col row-start-2 items-center">
            <Image
                className="mx-auto mt-0 mb-4"
                src="/datadog_logo.svg"
                alt="Datadog logo"
                width={140}
                height={140}
            />
            <Link className="mt-4 py-2 px-8 bg-blue-500 rounded" href="/login">
                Login
            </Link>
        </main>
    );
}
