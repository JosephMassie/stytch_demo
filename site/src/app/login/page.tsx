'use client';

import { useStytchMember } from '@stytch/nextjs/b2b';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Discover from '@/components/discover';

export default function Login() {
    const { member, isInitialized } = useStytchMember();
    const router = useRouter();

    useEffect(() => {
        if (isInitialized && member) {
            router.replace('/dashboard');
        }
    }, [isInitialized, router, member]);

    return <Discover />;
}
