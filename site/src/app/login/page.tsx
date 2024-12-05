'use client';

import { StytchLogin, useStytch, useStytchUser } from '@stytch/nextjs';
import { Products, StytchLoginConfig } from '@stytch/vanilla-js';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import GoogleSso from '@/components/google_sso_btn';
import PasswordLogin from '@/components/password_login';
import MagicLogin from '@/components/magic_login';

const stytch_config: StytchLoginConfig = {
    products: [Products.emailMagicLinks, Products.oauth],
    emailMagicLinksOptions: {
        loginRedirectURL: 'http://localhost:3000/authenticate',
        loginExpirationMinutes: 30,
        signupRedirectURL: 'http://localhost:3000/authenticate',
        signupExpirationMinutes: 30,
        createUserAsPending: true,
    },
    oauthOptions: {
        providers: [
            {
                type: 'google',
                position: 'floating',
            },
        ],
    },
    /*passwordOptions: {
        loginExpirationMinutes: 30,
        loginRedirectURL: 'http://localhost:3000/login',
        resetPasswordExpirationMinutes: 30,
        resetPasswordRedirectURL: 'http://localhost:3000/reset',
    }, */
};

export default function Login() {
    const router = useRouter();
    const stytch = useStytch();
    const { user, isInitialized } = useStytchUser();
    const searchParams = useSearchParams();

    const [isLegacy, updateLegacyStatus] = useState(false);

    useEffect(() => {
        const stytch_token_type = searchParams.get('stytch_token_type');
        if (
            stytch &&
            !user &&
            isInitialized &&
            (stytch_token_type === 'oauth' ||
                stytch_token_type === 'magic_links')
        ) {
            router.replace('/authenticate?' + searchParams.toString());
        }
    }, [isInitialized, router, searchParams, stytch, user]);

    return (
        <main className="w-full min-h-full flex flex-col gap-8 row-start-2 items-center">
            <div className="min-h-full flex flex-row gap-8">
                <Image
                    className="m-auto mt-0"
                    src="/datadog_logo.svg"
                    alt="Datadog logo"
                    width={280}
                    height={280}
                />
                <div className="w-[400px]">
                    <h1 className="text-2xl">Log in to Datadog</h1>
                    <p className="mt-4 mb-8 text-sm">
                        New user?{' '}
                        <Link className="text-slate-400" href="/register">
                            Try for free{' '}
                            <svg
                                className="inline-block fill-slate-400"
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>
                        </Link>
                    </p>
                    <div className="mb-6">
                        <GoogleSso />
                    </div>
                    {!isLegacy ? <MagicLogin /> : <PasswordLogin />}
                    <button
                        className="mt-10 w-full h-[36px] bg-blue-500 rounded"
                        onClick={() => {
                            updateLegacyStatus(!isLegacy);
                        }}>
                        {isLegacy
                            ? 'Try New Passwordless Login'
                            : 'Legacy user with a password?'}
                    </button>
                </div>
            </div>
        </main>
    );
}
