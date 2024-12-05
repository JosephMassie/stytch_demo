'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useStytchUser, useStytch } from '@stytch/nextjs';

const MAGIC_LINKS_TOKEN = 'magic_links';
const OAUTH_TOKEN = 'oauth';

export default function Auth() {
    const { user, isInitialized } = useStytchUser();
    const stytch = useStytch();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (stytch && !user && isInitialized) {
            const token = searchParams.get('token');
            const stytch_token_type = searchParams.get('stytch_token_type');

            if (token) {
                let req;

                switch (stytch_token_type) {
                    case MAGIC_LINKS_TOKEN:
                        req = stytch.magicLinks.authenticate(token, {
                            session_duration_minutes: 60,
                        });
                        break;
                    case OAUTH_TOKEN:
                        req = stytch.oauth.authenticate(token, {
                            session_duration_minutes: 60,
                        });
                        break;
                    default:
                        console.error(
                            `unknown token type ${stytch_token_type}`
                        );
                        break;
                }

                if (req) {
                    req.catch(() => {
                        console.warn('authentication failed');
                        router.replace('/login');
                    });
                }
            } else {
                router.replace('/login');
            }
        }
    }, [isInitialized, router, searchParams, stytch, user]);

    useEffect(() => {
        if (!isInitialized) return;

        if (user) {
            router.replace('/dashboard');
        }
    }, [router, user, isInitialized]);

    return <div>Loading...</div>;
}
