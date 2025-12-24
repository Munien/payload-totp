/* eslint-disable no-restricted-exports */

'use client'

import { Modal } from '@payloadcms/ui'
import { Remove as RemoveView } from '../views/Remove/index.js'
import type { PayloadTOTPConfig } from '../../types.js'

const modalSlug = 'remove-totp'

type Args = {
	pluginOptions: PayloadTOTPConfig
	apiRoute: string
	serverURL: string
}

export function RemoveModal({ pluginOptions, apiRoute, serverURL }: Args) {
	return (
		<Modal slug={modalSlug}>
			<RemoveView
				apiRoute={apiRoute}
				serverURL={serverURL}
				pluginOptions={pluginOptions}
			/>
		</Modal>
	)
}

export { modalSlug }
