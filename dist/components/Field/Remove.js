/* eslint-disable no-restricted-exports */ import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RemoveModal, modalSlug } from './RemoveModal.js';
import RemoveButton from './RemoveButton.js';
export default function Remove({ i18n, payload, pluginOptions, user }) {
    const { config: { routes: { api: apiRoute }, serverURL } } = payload;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(RemoveButton, {
                modalSlug: modalSlug,
                children: i18n.t('general:remove')
            }),
            /*#__PURE__*/ _jsx(RemoveModal, {
                apiRoute: apiRoute,
                serverURL: serverURL,
                pluginOptions: pluginOptions
            })
        ]
    });
}

//# sourceMappingURL=Remove.js.map