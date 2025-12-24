import type { Config } from 'payload';
import type { PayloadTOTPConfig } from './types.js';
import { totpAccess } from './totpAccess.js';
declare const payloadTotp: (pluginOptions: PayloadTOTPConfig) => (config: Config) => Config;
export { payloadTotp, totpAccess };
