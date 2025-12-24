import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MinimalTemplate } from '@payloadcms/next/templates';
import Form from './Form.js';
import styles from './index.module.css';
export const Remove = (args)=>{
    const { i18n, payload: { config: { routes: { api: apiRoute }, serverURL } }, pluginOptions } = args;
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
                length: pluginOptions.totp?.digits,
                serverURL: serverURL
            })
        ]
    });
};

//# sourceMappingURL=index.js.map