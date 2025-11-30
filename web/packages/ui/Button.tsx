import { HTMLAttributes } from "react";

export default function AppButton(props: HTMLAttributes<HTMLButtonElement>) {
    return <button   className="!text-gray-500" {...props} />;
}