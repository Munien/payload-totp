import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers.js';
import { getCookieExpiration } from 'payload';
export async function setCookie({ authConfig, cookiePrefix, secret, user }) {
    const token = jwt.sign({
        originalStrategy: user._strategy,
        userId: user.id
    }, secret, {
        expiresIn: authConfig.tokenExpiration || 7200
    });
    const sameSite = typeof authConfig.cookies.sameSite === 'string' ? authConfig.cookies.sameSite.toLocaleLowerCase() : authConfig.cookies.sameSite ? 'strict' : undefined;
    const cookieStore = await cookies();
    cookieStore.set(`${cookiePrefix}-totp`, token, {
        domain: authConfig.cookies.domain ?? undefined,
        expires: getCookieExpiration({
            seconds: authConfig.tokenExpiration || 7200
        }),
        httpOnly: true,
        path: '/',
        sameSite,
        secure: authConfig.cookies.secure
    });
}

//# sourceMappingURL=setCookie.js.map