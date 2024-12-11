import type { Metadata } from 'next';
import { loadEnvConfig } from '@next/env';
import localFont from 'next/font/local';
import Image from 'next/image';

import './globals.css';
import StytchProvider from '../components/stytch_provider';

const notoSans = localFont({
    src: '../../public/NotoSans-Regular.ttf',
    variable: '--font-noto-sans',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Datadog - Stytch Login Demo',
    description: 'A demo of a possible Datadog login flow powered by Stytch',
};

loadEnvConfig(process.cwd());

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StytchProvider>
            <html lang="en">
                <body className={`${notoSans.variable} antialiased`}>
                    <div className="bg-black -z-10 w-full h-full fixed left-0 top-0">
                        <div className="absolute overflow-hidden inset-0">
                            <Image
                                className="block absolute -inset-6 max-w-none min-w-[105%]"
                                src="/datadog_bg.png"
                                alt="background"
                                width={1776}
                                height={1014}
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                        {children}
                    </div>
                </body>
            </html>
        </StytchProvider>
    );
}
