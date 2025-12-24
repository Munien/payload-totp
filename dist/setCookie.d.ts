import { type IncomingAuthType, type User } from 'payload';
type Args = {
    authConfig: Omit<IncomingAuthType, 'cookies'> & Required<Pick<IncomingAuthType, 'cookies'>>;
    cookiePrefix: string;
    secret: string;
    user: User;
};
export declare function setCookie({ authConfig, cookiePrefix, secret, user }: Args): Promise<void>;
export {};
