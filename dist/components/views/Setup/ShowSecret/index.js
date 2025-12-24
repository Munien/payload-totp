/* eslint-disable no-restricted-exports */ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CopyToClipboard } from '@payloadcms/ui';
import ShowSecretClient from './index.client.js';
import styles from './index.module.css';
export default function ShowSecret({ i18n, secret }) {
    const button = {
        className: styles.link,
        text: i18n.t('totpPlugin:setup:addCodeManually')
    };
    const secretNode = /*#__PURE__*/ _jsxs("div", {
        className: styles.secret,
        children: [
            /*#__PURE__*/ _jsx("code", {
                children: [
                    ...chunks(secret.split(''), 4)
                ].map((chunk)=>chunk.join('')).join(' ')
            }),
            /*#__PURE__*/ _jsx(CopyToClipboard, {
                value: secret
            })
        ]
    });
    return /*#__PURE__*/ _jsx(ShowSecretClient, {
        button: button,
        secret: secretNode
    });
}
function* chunks(arr, n) {
    for(let i = 0; i < arr.length; i += n){
        yield arr.slice(i, i + n);
    }
}

//# sourceMappingURL=index.js.map