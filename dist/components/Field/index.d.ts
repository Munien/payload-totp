import type { TextFieldServerProps } from 'payload';
import type { PayloadTOTPConfig } from '../../types.js';
type Args = {
    pluginOptions: PayloadTOTPConfig;
} & TextFieldServerProps;
export declare const TOTPField: (args: Args) => import("react").JSX.Element | null;
export {};
