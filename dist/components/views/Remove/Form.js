/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { toast } from '@payloadcms/ui';
import React, { useCallback, useRef, useState } from 'react';
import OTPInput from '../../OTPInput/index.js';
export default function OTPForm({ apiRoute, length, serverURL }) {
    const [isPending, setIsPending] = useState(false);
    const form = useRef(null);
    const onFilled = ()=>{
        if (form.current) {
            form.current.requestSubmit();
        }
    };
    const asyncOperation = useCallback(async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        setIsPending(true);
        const formData = new FormData(event.target);
        const res = await fetch(`${serverURL}${apiRoute}/remove-totp`, {
            body: JSON.stringify(Object.fromEntries(formData)),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        });
        const data = await res.json();
        if (!data.ok && data.message) {
            toast.error(data.message);
            return false;
        }
        return true;
    }, [
        apiRoute,
        serverURL
    ]);
    const handleSubmit = useCallback((event)=>{
        asyncOperation(event).then((ok)=>{
            if (ok) {
                location.reload();
            }
            setIsPending(false);
        }).catch((err)=>{
            // eslint-disable-next-line no-console
            console.error(err);
            toast.error('Something went wrong');
            setIsPending(false);
        });
    }, [
        asyncOperation
    ]);
    return /*#__PURE__*/ _jsx("form", {
        onSubmit: handleSubmit,
        ref: form,
        children: /*#__PURE__*/ _jsx(OTPInput, {
            disabled: isPending,
            length: length,
            name: "token",
            onFilled: onFilled
        })
    });
}

//# sourceMappingURL=Form.js.map