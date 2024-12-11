'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import {
    useStytchB2BClient,
    useStytchMemberSession,
    useStytchOrganization,
} from '@stytch/nextjs/b2b';
import Link from 'next/link';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
    }, [isInitialized, session, organization]);

    return (
        <main className="w-full min-h-screen grid grid-cols-[200px_1fr] items-center">
            <div className="sticky top-0 mb-auto h-full max-h-screen px-4 pt-4 pb-20 flex flex-col bg-slate-700 text-right">
                <h1 className="text-center text-xl font-bold">Dashboard</h1>
                <h2 className="mt-2 mb-4 mx-auto p-2 block border-[1px] rounded border-white max-w-full text-sm leading-4 text-center overflow-hidden text-ellipsis text-nowrap">
                    {organization?.organization_name}
                </h2>
                <Link href="/dashboard">home</Link>
                {
                    // Admin only settings and views
                    role === 'admin' && (
                        <>
                            <span className="mt-6 mb-2 mx-auto w-full h-[1px] bg-white"></span>
                            <h3 className="text-center">Admin Portal</h3>
                            <span className="my-1 mx-auto w-[90%] h-[1px] bg-white"></span>
                            <Link href="/dashboard/settings">org settings</Link>
                            <Link href="/dashboard/members">members</Link>
                            <Link href="/dashboard/sso">sso</Link>
                        </>
                    )
                }
                <button
                    className="mt-auto mb-0 bg-blue-400 px-8 py-2 rounded"
                    onClick={() => {
                        stytch.session.revoke();
                    }}>
                    log out
                </button>
            </div>
            <div className="min-h-full flex flex-row bg-white text-black">
                {children}
            </div>
        </main>
    );
}
