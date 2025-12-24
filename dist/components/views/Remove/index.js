'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from '@payloadcms/ui';
import { MinimalTemplate } from '@payloadcms/next/templates';
import Form from './Form.js';
import styles from './index.module.css';
export const Remove = ({ apiRoute, serverURL, pluginOptions })=>{
    const { t } = useTranslation();
    return /*#__PURE__*/ _jsxs(MinimalTemplate, {
        className: styles.root,
        children: [
            /*#__PURE__*/ _jsx("h1", {
                children: t('totpPlugin:verify:title')
            }),
            /*#__PURE__*/ _jsx("p", {
                children: t('totpPlugin:setup:enterCode').replace('{digits}', (pluginOptions.totp?.digits || 6).toString())
            }),
            /*#__PURE__*/ _jsx(Form, {
                apiRoute: apiRoute,
                length: pluginOptions.totp?.digits,
                serverURL: serverURL
            })
        ]
    });
};

//# sourceMappingURL=index.js.map