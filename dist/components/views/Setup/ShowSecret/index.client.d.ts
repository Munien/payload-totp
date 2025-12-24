type Args = {
    button: {
        className: string;
        text: string;
    };
    secret: React.ReactNode;
};
export default function ShowSecretClient({ button, secret }: Args): string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
export {};
