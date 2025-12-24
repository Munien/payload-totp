/* eslint-disable no-restricted-exports */ 'use client';
import { useAuth } from '@payloadcms/ui';
import { usePathname, useRouter } from 'next/navigation.js';
import { useEffect } from 'react';
export default function TOTPProviderClient(args) {
    const { children, forceSetup, setupUrl, verifyUrl } = args;
    const { user } = useAuth();
    const strategy = user?._strategy;
    const router = useRouter();
    const pathname = usePathname();
    useEffect(()=>{
        if (user && user.hasTotp && strategy && ![
            'api-key',
            'totp'
        ].includes(strategy) && pathname !== verifyUrl) {
            router.push(`${verifyUrl}?back=${encodeURIComponent(pathname)}`);
        } else if (user && !user.hasTotp && forceSetup && pathname !== setupUrl && strategy !== 'api-key') {
            router.push(`${setupUrl}?back=${encodeURIComponent(pathname)}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        user
    ]);
    return children;
}

//# sourceMappingURL=index.client.js.map