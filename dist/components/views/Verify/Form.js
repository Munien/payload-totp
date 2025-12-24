/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { toast } from '@payloadcms/ui';
import React, { useCallback, useRef, useState } from 'react';
import OTPInput from '../../OTPInput/index.js';
export default function OTPForm({ apiRoute, back, length, serverURL }) {
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
        const res = await fetch(`${serverURL}${apiRoute}/verify-totp`, {
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
        serverURL,
        apiRoute
    ]);
    const handleSubmit = useCallback((event)=>{
        asyncOperation(event).then((ok)=>{
            if (ok) {
                if (back) {
                    // Use location, auth strategy must run again
                    location.replace(back);
                } else {
                    window.history.back();
                }
            }
            setIsPending(false);
        }).catch((err)=>{
            // eslint-disable-next-line no-console
            console.error(err);
            toast.error('Something went wrong');
            setIsPending(false);
        });
    }, [
        back,
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