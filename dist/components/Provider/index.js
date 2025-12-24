import { jsx as _jsx } from "react/jsx-runtime";
import { formatAdminURL } from '@payloadcms/ui/shared';
import { headers } from 'next/headers.js';
import { redirect } from 'next/navigation.js';
import TOTPProviderClient from './index.client.js';
export const TOTPProvider = async (args)=>{
    const { children, payload, pluginOptions, user: _user } = args;
    const user = _user;
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '/';
    const verifyUrl = formatAdminURL({
        adminRoute: payload.config.routes.admin,
        path: '/verify-totp'
    });
    const setupUrl = formatAdminURL({
        adminRoute: payload.config.routes.admin,
        path: '/setup-totp'
    });
    if (user && user.hasTotp && ![
        'api-key',
        'totp'
    ].includes(user._strategy) && pathname !== verifyUrl) {
        redirect(`${payload.config.serverURL}${verifyUrl}?back=${encodeURIComponent(pathname)}`);
    } else if (user && !user.hasTotp && pluginOptions.forceSetup && pathname !== setupUrl && user._strategy !== 'api-key') {
        redirect(`${payload.config.serverURL}${setupUrl}?back=${encodeURIComponent(pathname)}`);
    } else {
        return /*#__PURE__*/ _jsx(TOTPProviderClient, {
            forceSetup: pluginOptions.forceSetup,
            setupUrl: setupUrl,
            verifyUrl: verifyUrl,
            children: children
        });
    }
};

//# sourceMappingURL=index.js.map