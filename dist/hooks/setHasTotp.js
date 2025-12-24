import { getTotpSecret } from '../utilities/getTotpSecret.js';
export const setHasTotp = (pluginOptions)=>async ({ collection, data, req: { payload } })=>{
        const totpSecret = await getTotpSecret({
            collection: collection?.slug || pluginOptions.collection,
            payload,
            user: data
        });
        return Boolean(totpSecret);
    };

//# sourceMappingURL=setHasTotp.js.map