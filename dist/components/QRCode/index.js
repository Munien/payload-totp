/* eslint-disable no-restricted-exports */ import { jsx as _jsx } from "react/jsx-runtime";
import { toDataURL } from 'qrcode';
import { cn } from '../../utilities/cn.js';
import styles from './index.module.css';
export default async function QRCode({ forceWhiteBackgroundOnQrCode, totp }) {
    const src = await toDataURL(totp.toString(), {
        color: {
            dark: '#fff',
            light: '#000'
        },
        margin: 0
    });
    return /*#__PURE__*/ _jsx("img", {
        alt: "2FA QR Code",
        className: cn(styles.root, forceWhiteBackgroundOnQrCode && styles.forceWhiteBackground),
        height: 228,
        src: src,
        width: 228
    });
}

//# sourceMappingURL=index.js.map