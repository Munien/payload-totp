export async function getTotpSecret({ collection, payload, user }) {
    if (!user) {
        return undefined;
    }
    let totpSecret;
    try {
        const result = await payload.findByID({
            id: user.id,
            collection,
            overrideAccess: true,
            select: {
                totpSecret: true
            },
            showHiddenFields: true
        })// TODO: Report this to Payload
        ;
        totpSecret = result.totpSecret === null ? undefined : result.totpSecret;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty
    } catch (err) {}
    return totpSecret;
}

//# sourceMappingURL=getTotpSecret.js.map