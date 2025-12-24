import type { DefaultTranslationsObject, I18nOptions } from '@payloadcms/translations';
import type { CustomTranslationsObject } from './types.js';
export declare const i18n: (incomingI18n?: I18nOptions<{} | DefaultTranslationsObject>) => I18nOptions<CustomTranslationsObject | DefaultTranslationsObject>;
