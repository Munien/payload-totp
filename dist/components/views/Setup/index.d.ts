import type { AdminViewProps, ServerComponentProps } from 'payload';
import type { PayloadTOTPConfig } from '../../../types.js';
type Args = {
    pluginOptions: PayloadTOTPConfig;
} & AdminViewProps & ServerComponentProps;
export declare const TOTPSetup: React.FC<Args>;
export {};
