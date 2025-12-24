type Args = {
    disabled?: boolean;
    length?: number;
    name?: string;
    onFilled?: (value: string) => void;
};
export default function OTPInput({ name, disabled, length, onFilled }: Args): import("react").JSX.Element;
export {};
