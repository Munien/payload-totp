import { cookies } from 'next/headers.js';
export const deleteCookieAfterLogout = async ({ req: { payload } })=>{
    const cookiesList = await cookies();
    cookiesList.delete(`${payload.config.cookiePrefix}-totp`);
};

//# sourceMappingURL=deleteCookieAfterLogout.js.map