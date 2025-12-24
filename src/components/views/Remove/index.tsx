'use client'

import { useTranslation } from '@payloadcms/ui'
import { MinimalTemplate } from '@payloadcms/next/templates'

import type { PayloadTOTPConfig } from '../../../types.js'

import Form from './Form.js'
import styles from './index.module.css'

type Args = {
	apiRoute: string
	serverURL: string
	pluginOptions: PayloadTOTPConfig
}

export const Remove: React.FC<Args> = ({ apiRoute, serverURL, pluginOptions }) => {
	const { t } = useTranslation()

	return (
		<MinimalTemplate className={styles.root}>
			<h1>{(t as any)('totpPlugin:verify:title')}</h1>
			<p>
				{(t as any)('totpPlugin:setup:enterCode').replace('{digits}', (pluginOptions.totp?.digits || 6).toString())}
			</p>
			<Form apiRoute={apiRoute} length={pluginOptions.totp?.digits} serverURL={serverURL} />
		</MinimalTemplate>
	)
}
