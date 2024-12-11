'use client';

import {
    AdminPortalOrgSettings,
    AdminPortalB2BProducts,
} from '@stytch/nextjs/b2b/adminPortal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AdminPortalDefaults } from '@/components/pre_built_styles';

type Role = {
    role_id: string;
    description: string;
};

const config = {
    allowedAuthMethods: [
        AdminPortalB2BProducts.emailMagicLinks,
        AdminPortalB2BProducts.password,
        AdminPortalB2BProducts.sso,
        AdminPortalB2BProducts.oauthGoogle,
    ],
    getRoleDescription: (role: Role) => {
        if (role.role_id == 'stytch_admin') {
            return 'Able to manage settings and members';
        } else if (role.role_id == 'stytch_member') {
            return 'Able to view settings and members, but cannot edit';
        } else {
            return role.description;
        }
    },
    getRoleDisplayName: (role: Role) => {
        if (role.role_id == 'stytch_admin') {
            return 'Admin';
        } else if (role.role_id == 'stytch_member') {
            return 'Member';
        } else {
            return role.role_id;
        }
    },
};

export default function Settings() {
    return (
        <div className="w-full">
            <AdminPortalOrgSettings
                config={config}
                styles={AdminPortalDefaults}></AdminPortalOrgSettings>
        </div>
    );
}
