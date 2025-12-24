import type { I18nClient } from '@payloadcms/translations';
import type { BasePayload } from 'payload';
import type { CustomTranslationsKeys, CustomTranslationsObject } from '../../i18n/types.js';
type Args = {
    backUrl?: string;
    i18n: I18nClient<CustomTranslationsObject, CustomTranslationsKeys>;
    payload: BasePayload;
};
export default function Setup({ backUrl, i18n, payload }: Args): import("react").JSX.Element;
export {};
