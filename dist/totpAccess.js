export const totpAccess = (innerAccess)=>{
    return async (args)=>{
        const { req: { payload: { config: { custom: { totp: { pluginOptions } } } }, user } } = args;
        if (!user) {
            return false;
        }
        if (pluginOptions.disableAccessWrapper) {
            return innerAccess ? innerAccess(args) : true;
        }
        if (pluginOptions.forceSetup && user._strategy === 'totp' || user._strategy === 'api-key') {
            return innerAccess ? innerAccess(args) : true;
        } else {
            if (user.hasTotp) {
                if (user._strategy === 'totp') {
                    return innerAccess ? innerAccess(args) : true;
                } else {
                    return false;
                }
            } else {
                return innerAccess ? innerAccess(args) : true;
            }
        }
    };
};

//# sourceMappingURL=totpAccess.js.map