'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useStytchMember } from '@stytch/nextjs/b2b';

import Discover from '@/components/discover';

const Reset = () => {
    const { member, isInitialized } = useStytchMember();
    const router = useRouter();

    useEffect(() => {
        if (isInitialized && member) {
            router.replace('/dashboard');
        }
    }, [isInitialized, router, member]);

    if (!isInitialized) return <div>Loading...</div>;

    return <Discover />;
};

export default Reset;
