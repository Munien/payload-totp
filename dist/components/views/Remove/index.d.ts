import type { I18nClient } from '@payloadcms/translations';
import type { Payload, User } from 'payload';
import type { CustomTranslationsKeys, CustomTranslationsObject } from '../../../i18n/types.js';
import type { PayloadTOTPConfig } from '../../../types.js';
type Args = {
    i18n: I18nClient<CustomTranslationsObject, CustomTranslationsKeys>;
    payload: Payload;
    pluginOptions: PayloadTOTPConfig;
    user: User;
};
export declare const Remove: React.FC<Args>;
export {};
