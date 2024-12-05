'use client';

import { useStytch } from '@stytch/nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorMsg from './error_msg';

export default function MagicLogin({
    children,
}: {
    children?: React.ReactNode;
}) {
    const stytch = useStytch();

    const [lastError, setLastError] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <div>
            {emailSent ? (
                <div className="mt-2">
                    <h2 className="mb-1 text-lg font-bold">Check your email</h2>
                    <p>
                        An email was sent to
                        <br />
                        <span className="font-bold">{email}</span>
                        <a
                            className="mt-2 block text-blue-500"
                            href="https://mail.google.com/mail/u/0/#search/from%3A%40stytch.com%20in%3Aanywhere"
                            target="_blank">
                            Open in Gmail
                        </a>
                        <a
                            className="my-1 block text-blue-500"
                            href="https://mail.yahoo.com/d/search/keyword=stytch.com"
                            target="_blank">
                            Open in Yahoo
                        </a>
                        <a
                            className="block text-blue-500"
                            href="https://outlook.office.com/mail/0/inbox"
                            target="_blank">
                            Open in Outlook
                        </a>
                    </p>
                </div>
            ) : (
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(event) => {
                        event.preventDefault();

                        const formData = new FormData(
                            event.currentTarget as HTMLFormElement
                        );
                        const user_email = formData.get('email') as string;
                        setEmail(user_email);

                        stytch.magicLinks.email
                            .loginOrCreate(user_email, {
                                login_expiration_minutes: 30,
                                signup_expiration_minutes: 60,
                            })
                            .then(() => {
                                setEmailSent(true);
                            })
                            .catch((resp) => {
                                let msg = '';

                                switch (resp.status_code) {
                                    case 401:
                                        msg = 'invalid username or password';
                                        break;
                                    default:
                                        break;
                                }
                                setLastError(msg);
                            });
                    }}>
                    {children}
                    <input
                        className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                        name="email"
                        type="email"
                        placeholder="Email*"
                        required></input>
                    {lastError != '' && <ErrorMsg msg={lastError}></ErrorMsg>}
                    <button
                        className="w-full h-[36px] bg-blue-500 rounded"
                        type="submit">
                        Log in
                    </button>
                </form>
            )}
        </div>
    );
}
