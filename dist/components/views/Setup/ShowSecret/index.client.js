/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export default function ShowSecretClient({ button, secret }) {
    const [show, setShow] = useState(false);
    const onClick = ()=>setShow(true);
    if (show) {
        return secret;
    } else {
        return /*#__PURE__*/ _jsx("button", {
            className: button.className,
            onClick: onClick,
            type: "button",
            children: button.text
        });
    }
}

//# sourceMappingURL=index.client.js.map