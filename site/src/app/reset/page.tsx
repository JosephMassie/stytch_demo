'use client';

import React, { useState, useEffect } from 'react';
import { Products } from '@stytch/vanilla-js';
import { StytchPasswordReset } from '@stytch/nextjs';

const config = {
    passwordOptions: {
        loginExpirationMinutes: 30,
        loginRedirectURL: 'http://localhost:3000/authenticate',
        resetPasswordExpirationMinutes: 30,
        resetPasswordRedirectURL: 'http://localhost:3000/authenticate',
    },
    products: [Products.passwords],
};

const Reset = () => {
    const [passwordResetToken, setPasswordResetToken] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        setPasswordResetToken(token ?? '');
    }, []);

    return (
        <div className="m-auto mt-0">
            <StytchPasswordReset
                config={config}
                passwordResetToken={passwordResetToken}
                styles={{
                    container: {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    },
                    colors: {
                        primary: 'white',
                        secondary: 'white',
                    },
                    buttons: {
                        primary: {
                            backgroundColor: '#3b82f6',
                            borderColor: '#3b82f6',
                            textColor: 'white',
                        },
                        secondary: {
                            backgroundColor: '#3b82f6',
                            borderColor: '#3b82f6',
                        },
                    },
                    inputs: {
                        backgroundColor: '#1f2937',
                        borderColor: '#64748b',
                        textColor: '#64748b',
                        placeholderColor: '#64748b',
                    },
                    logo: {
                        logoImageUrl:
                            'https://static.datadoghq.com/static/c/3d631087/asset-3d631087b0606ae081ab.svg',
                    },
                }}
            />
        </div>
    );
};

export default Reset;
