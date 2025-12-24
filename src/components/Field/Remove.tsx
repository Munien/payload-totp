/* eslint-disable no-restricted-exports */

import type { I18nClient } from '@payloadcms/translations'
import type { Payload, User } from 'payload'

import type { CustomTranslationsKeys, CustomTranslationsObject } from '../../i18n/types.js'
import type { PayloadTOTPConfig } from '../../types.js'

import { RemoveModal, modalSlug } from './RemoveModal.js'
import RemoveButton from './RemoveButton.js'

type Args = {
	i18n: I18nClient<CustomTranslationsObject, CustomTranslationsKeys>
	payload: Payload
	pluginOptions: PayloadTOTPConfig
	user: User
}

export default function Remove({ i18n, payload, pluginOptions, user }: Args) {
	const {
		config: {
			routes: { api: apiRoute },
			serverURL,
		},
	} = payload

	return (
		<>
			<RemoveButton modalSlug={modalSlug}>{i18n.t('general:remove')}</RemoveButton>
			<RemoveModal
				apiRoute={apiRoute}
				serverURL={serverURL}
				pluginOptions={pluginOptions}
			/>
		</>
	)
}
