import type { PayloadTOTPConfig } from '../../types.js';
declare const modalSlug = "remove-totp";
type Args = {
    pluginOptions: PayloadTOTPConfig;
    apiRoute: string;
    serverURL: string;
};
export declare function RemoveModal({ pluginOptions, apiRoute, serverURL }: Args): import("react").JSX.Element;
export { modalSlug };
