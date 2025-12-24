/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Modal } from '@payloadcms/ui';
import { Remove as RemoveView } from '../views/Remove/index.js';
import RemoveButton from './RemoveButton.js';
const modalSlug = 'remove-totp';
export default function Remove({ i18n, payload, pluginOptions, user }) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(RemoveButton, {
                modalSlug: modalSlug,
                children: i18n.t('general:remove')
            }),
            /*#__PURE__*/ _jsx(Modal, {
                slug: modalSlug,
                children: /*#__PURE__*/ _jsx(RemoveView, {
                    i18n: i18n,
                    payload: payload,
                    pluginOptions: pluginOptions,
                    user: user
                })
            })
        ]
    });
}

//# sourceMappingURL=Remove.js.map