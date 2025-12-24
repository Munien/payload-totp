import type { TOTP } from 'otpauth';
type Args = {
    forceWhiteBackgroundOnQrCode?: boolean;
    totp: TOTP;
};
export default function QRCode({ forceWhiteBackgroundOnQrCode, totp }: Args): Promise<import("react").JSX.Element>;
export {};
