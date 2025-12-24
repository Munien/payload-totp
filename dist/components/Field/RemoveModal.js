/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from '@payloadcms/ui';
import { Remove as RemoveView } from '../views/Remove/index.js';
const modalSlug = 'remove-totp';
export function RemoveModal({ pluginOptions, apiRoute, serverURL }) {
    return /*#__PURE__*/ _jsx(Modal, {
        slug: modalSlug,
        children: /*#__PURE__*/ _jsx(RemoveView, {
            apiRoute: apiRoute,
            serverURL: serverURL,
            pluginOptions: pluginOptions
        })
    });
}
export { modalSlug };

//# sourceMappingURL=RemoveModal.js.map