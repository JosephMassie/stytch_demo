'use client';

import { useStytch } from '@stytch/nextjs';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ErrorMsg from './error_msg';

const loginUser = async (email?: string, password?: string) => {
    if (!email || !password) {
        return alert('make sure all fields are filled');
    }

    const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then((res) => res.json());

    if (res.success) {
        sessionStorage.setItem('token', res.token);
    } else {
        alert(res.message);
    }
};

export default function PasswordLogin() {
    const router = useRouter();
    const stytch = useStytch();

    const [lastError, setLastError] = useState('');
    const [resetPassState, setResetPassState] = useState(false);

    return (
        <div>
            {resetPassState ? (
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(event) => {
                        event.preventDefault();
                        const formData = new FormData(
                            event.currentTarget as HTMLFormElement
                        );
                        const email = formData.get('email') as string;
                        stytch.passwords.resetByEmailStart({
                            email,
                        });
                    }}>
                    <input
                        className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                        name="email"
                        type="email"
                        placeholder="Email*"
                        required></input>
                    <button
                        className="w-full h-[36px] bg-blue-500 rounded"
                        type="submit">
                        Reset Password
                    </button>
                </form>
            ) : (
                <>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={(event) => {
                            event.preventDefault();

                            const formData = new FormData(
                                event.currentTarget as HTMLFormElement
                            );
                            const email = formData.get('email') as string;
                            const password = formData.get('pwd') as string;

                            stytch.passwords
                                .authenticate({
                                    email,
                                    password,
                                    session_duration_minutes: 60,
                                })
                                .then(() => {
                                    router.push('/dashboard');
                                })
                                .catch((resp) => {
                                    let msg = '';

                                    switch (resp.status_code) {
                                        case 401:
                                            msg =
                                                'invalid username or password';
                                            break;
                                        default:
                                            break;
                                    }
                                    setLastError(msg);
                                });

                            /*
                    loginUser(email, password).then(() => {
                        stytch.session;
                        router.push('/dashboard');
                    });
                    */
                        }}>
                        <input
                            className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                            name="email"
                            type="email"
                            placeholder="Email*"
                            required></input>
                        <input
                            className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                            name="pwd"
                            type="password"
                            placeholder="Password*"
                            required
                        />
                        {lastError != '' && (
                            <ErrorMsg msg={lastError}></ErrorMsg>
                        )}
                        <button
                            className="w-full h-[36px] bg-blue-500 rounded"
                            type="submit">
                            Log in
                        </button>
                    </form>
                    <button
                        className="mt-2 text-sm text-blue-600"
                        onClick={() => setResetPassState(true)}>
                        Forgot password?
                    </button>
                </>
            )}
        </div>
    );
}
