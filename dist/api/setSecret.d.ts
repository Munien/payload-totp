import type { PayloadHandler } from 'payload';
import type { PayloadTOTPConfig } from '../types.js';
export declare function setSecret(pluginOptions: PayloadTOTPConfig): PayloadHandler;
export interface IResponse {
    message?: string;
    ok: boolean;
}
