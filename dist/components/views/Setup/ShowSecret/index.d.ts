import type { I18nClient } from '@payloadcms/translations';
import type { CustomTranslationsKeys, CustomTranslationsObject } from '../../../../i18n/types.js';
type Args = {
    i18n: I18nClient<CustomTranslationsObject, CustomTranslationsKeys>;
    secret: string;
};
export default function ShowSecret({ i18n, secret }: Args): import("react").JSX.Element;
export {};
