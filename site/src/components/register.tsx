'use client';

import { StytchLogin } from '@stytch/nextjs';
import { Products, StytchLoginConfig } from '@stytch/vanilla-js';
import Image from 'next/image';
import Link from 'next/link';
import MagicLogin from './magic_login';

const registerUser = async (email?: string, password?: string) => {
    if (!email || !password) {
        return alert('make sure all fields are filled');
    }

    const res = await fetch('http://localhost:3001/register', {
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
        localStorage.setItem('token', res.token);
    } else {
        alert(res.message);
    }
};

export const Register = () => {
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
                    <h1 className="text-2xl">Get started with Datadog</h1>
                    <p className="my-4 text-sm">
                        Existing user?{' '}
                        <Link className="text-slate-400" href="/login">
                            Log In{' '}
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
                    <p className="mt-4 mb-8">
                        Try it free for 14 days and monitor as many servers as
                        you like
                        <br />
                        <span className="text-xs">*Required Fields</span>
                    </p>
                    <MagicLogin>
                        <input
                            className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                            name="name"
                            type="text"
                            placeholder="Full Name*"
                            required></input>
                        <input
                            className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                            name="company"
                            type="text"
                            placeholder="company*"
                            required></input>
                        <input
                            className="bg-gray-800 h-[36px] indent-2 rounded border-slate-500 border-[1px]"
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            required></input>
                    </MagicLogin>
                </div>
            </div>
        </main>
    );
};
