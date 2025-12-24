import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MinimalTemplate } from '@payloadcms/next/templates';
import { formatAdminURL } from '@payloadcms/ui/shared';
import { redirect } from 'next/navigation.js';
import Form from './Form.js';
import styles from './index.module.css';
export const TOTPVerify = (args)=>{
    const i18n = args.i18n;
    const { initPageResult: { req: { payload: { config: { routes: { admin: adminRoute, api: apiRoute }, serverURL } }, user: _user } }, pluginOptions, searchParams: { back } = {} } = args;
    const user = _user;
    if (!user) {
        const url = formatAdminURL({
            adminRoute,
            path: '/login',
            serverURL
        });
        redirect(url);
    }
    if (!user.hasTotp || user.hasTotp && user.strategy === 'totp') {
        const url = formatAdminURL({
            adminRoute,
            path: '/',
            serverURL
        });
        redirect(url);
    }
    return /*#__PURE__*/ _jsxs(MinimalTemplate, {
        className: styles.root,
        children: [
            /*#__PURE__*/ _jsx("h1", {
                children: i18n.t('totpPlugin:verify:title')
            }),
            /*#__PURE__*/ _jsx("p", {
                children: i18n.t('totpPlugin:setup:enterCode').replace('{digits}', (pluginOptions.totp?.digits || 6).toString())
            }),
            /*#__PURE__*/ _jsx(Form, {
                apiRoute: apiRoute,
                back: typeof back === 'string' && back || undefined,
                length: pluginOptions.totp?.digits,
                serverURL: serverURL
            })
        ]
    });
};

//# sourceMappingURL=index.js.map