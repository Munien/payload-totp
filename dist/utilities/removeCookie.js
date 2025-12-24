import { cookies } from 'next/headers.js';
export async function removeCookie(cookiePrefix) {
    const cookieStore = await cookies();
    cookieStore.delete(`${cookiePrefix}-totp`);
}

//# sourceMappingURL=removeCookie.js.map