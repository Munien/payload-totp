import React from 'react';
type Args = {
    apiRoute: string;
    back?: string;
    length?: number;
    secret: string;
    serverURL: string;
};
export default function OTPForm({ apiRoute, back, length, secret, serverURL }: Args): React.JSX.Element;
export {};
