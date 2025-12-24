import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MinimalTemplate } from '@payloadcms/next/templates';
import { formatAdminURL } from '@payloadcms/ui/shared';
import { redirect } from 'next/navigation.js';
import { Secret, TOTP } from 'otpauth';
import QRCode from '../../QRCode/index.js';
import Form from './Form.js';
import styles from './index.module.css';
import ShowSecret from './ShowSecret/index.js';
export const TOTPSetup = (args)=>{
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
    if (user.hasTotp) {
        const url = formatAdminURL({
            adminRoute,
            path: '/',
            serverURL
        });
        redirect(url);
    }
    const secret = new Secret({
        size: 32
    });
    const totp = new TOTP({
        algorithm: pluginOptions.totp?.algorithm || 'SHA1',
        digits: pluginOptions.totp?.digits || 6,
        issuer: pluginOptions.totp?.issuer || 'Payload',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        label: user.email || user.username,
        period: pluginOptions.totp?.period || 30,
        secret
    });
    return /*#__PURE__*/ _jsxs(MinimalTemplate, {
        className: styles.root,
        children: [
            /*#__PURE__*/ _jsx("h1", {
                children: i18n.t('totpPlugin:setup:title')
            }),
            /*#__PURE__*/ _jsx("p", {
                dangerouslySetInnerHTML: {
                    __html: i18n.t('totpPlugin:setup:description')
                }
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.qr,
                children: [
                    /*#__PURE__*/ _jsx(QRCode, {
                        forceWhiteBackgroundOnQrCode: pluginOptions.forceWhiteBackgroundOnQrCode,
                        totp: totp
                    }),
                    /*#__PURE__*/ _jsx(ShowSecret, {
                        i18n: i18n,
                        secret: secret.base32
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.code,
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        children: i18n.t('totpPlugin:setup:enterCode').replace('{digits}', (pluginOptions.totp?.digits || 6).toString())
                    }),
                    /*#__PURE__*/ _jsx(Form, {
                        apiRoute: apiRoute,
                        back: typeof back === 'string' && back || undefined,
                        length: pluginOptions.totp?.digits,
                        secret: secret.base32,
                        serverURL: serverURL
                    })
                ]
            })
        ]
    });
};

//# sourceMappingURL=index.js.map