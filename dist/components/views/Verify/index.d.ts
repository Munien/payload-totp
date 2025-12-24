import type { AdminViewProps, ServerComponentProps } from 'payload';
import type { PayloadTOTPConfig } from '../../../types.js';
type Args = {
    pluginOptions: PayloadTOTPConfig;
} & AdminViewProps & ServerComponentProps;
export declare const TOTPVerify: React.FC<Args>;
export {};
