import { StytchB2B } from '@stytch/nextjs/b2b';
import {
    B2BProducts,
    AuthFlowType,
    StytchB2BUIConfig,
    B2BOAuthProviders,
} from '@stytch/vanilla-js/b2b';

import { Baseline } from '@/components/pre_built_styles';

const stytch_config: StytchB2BUIConfig = {
    authFlowType: AuthFlowType.Discovery,
    products: [
        B2BProducts.emailMagicLinks,
        B2BProducts.oauth,
        B2BProducts.passwords,
    ],
    sessionOptions: {
        sessionDurationMinutes: 60,
    },
    oauthOptions: {
        providers: [{ type: B2BOAuthProviders.Google }],
        loginRedirectURL: 'http://localhost:3000/authenticate',
        signupRedirectURL: 'http://localhost:3000/authenticate',
    },
};

export default function Discover() {
    return <StytchB2B config={stytch_config} styles={Baseline}></StytchB2B>;
}
