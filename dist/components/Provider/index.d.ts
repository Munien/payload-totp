import type { ServerComponentProps } from 'payload';
import type { PayloadTOTPConfig } from '../../types.js';
type Args = {
    children: React.ReactNode;
    pluginOptions: PayloadTOTPConfig;
} & ServerComponentProps;
export declare const TOTPProvider: (args: Args) => Promise<import("react").JSX.Element>;
export {};
