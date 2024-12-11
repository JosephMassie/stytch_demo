'use client';

import { AdminPortalDefaults } from '@/components/pre_built_styles';
import { AdminPortalMemberManagement } from '@stytch/nextjs/b2b/adminPortal';

export default function Members() {
    return (
        <div className="w-full">
            <AdminPortalMemberManagement
                styles={AdminPortalDefaults}></AdminPortalMemberManagement>
        </div>
    );
}
