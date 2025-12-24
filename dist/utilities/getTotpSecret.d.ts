import type { Payload, User } from 'payload';
type Args = {
    collection: string;
    payload: Payload;
    user: User;
};
export declare function getTotpSecret({ collection, payload, user, }: Args): Promise<string | undefined>;
export {};
