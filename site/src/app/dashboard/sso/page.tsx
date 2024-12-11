'use client';

import { AdminPortalDefaults } from '@/components/pre_built_styles';
import { AdminPortalSSO } from '@stytch/nextjs/b2b/adminPortal';

export default function Members() {
    return (
        <div className="w-full">
            <AdminPortalSSO styles={AdminPortalDefaults}></AdminPortalSSO>
        </div>
    );
}
