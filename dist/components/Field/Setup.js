/* eslint-disable no-restricted-exports */ import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@payloadcms/ui';
import { formatAdminURL } from 'payload/shared';
export default function Setup({ backUrl, i18n, payload }) {
    let url = formatAdminURL({
        adminRoute: payload.config.routes.admin,
        path: '/setup-totp',
        serverURL: payload.config.serverURL
    });
    if (backUrl) {
        url += `?back=${encodeURIComponent(backUrl)}`;
    }
    return /*#__PURE__*/ _jsx(Button, {
        buttonStyle: "secondary",
        el: "anchor",
        size: "small",
        url: url,
        children: i18n.t('totpPlugin:setup:button')
    });
}

//# sourceMappingURL=Setup.js.map