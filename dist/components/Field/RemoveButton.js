/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, useModal } from '@payloadcms/ui';
export default function RemoveButton({ children, modalSlug }) {
    const { openModal } = useModal();
    return /*#__PURE__*/ _jsx(Button, {
        buttonStyle: "secondary",
        onClick: ()=>{
            openModal(modalSlug);
        },
        size: "small",
        children: children
    });
}

//# sourceMappingURL=RemoveButton.js.map