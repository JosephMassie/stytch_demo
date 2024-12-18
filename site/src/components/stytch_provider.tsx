'use client';
import { StytchB2BProvider as ProviderActual } from '@stytch/nextjs/b2b';
import { createStytchB2BUIClient } from '@stytch/nextjs/b2b/ui';
import { ReactNode } from 'react';

// We initialize the Stytch client using our project's public token which can be found in the Stytch dashboard
const stytch = createStytchB2BUIClient(
    process.env.NEXT_PUBLIC_STYTCH_TOKEN || ''
);

const StytchProvider = ({ children }: { children: ReactNode }) => {
    return <ProviderActual stytch={stytch}>{children}</ProviderActual>;
};

export default StytchProvider;
