import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

export const NavButton: FC<{ icon?: IconType, path: string }> = ({ icon, path }) => {
    const pathName = path.split('/')[1];

    // make first letter of tabName uppercase ( for display purposes )
    const tabNameCapitalized = pathName.charAt(0).toUpperCase() + pathName.slice(1);

    if (!icon) {
        return (
            <Link href={path} className="
                transition duration-300 ease-in-out
                text-pink-500 hover:text-pink-600
                rounded-lg
                px-2 py-2
                hover:bg-gray-200 hover:shadow-lg
            ">
                {tabNameCapitalized}
            </Link>
        )
    }
    const Icon = icon;
    return (
        <Link href={path} className="
                transition duration-300 ease-in-out
                text-pink-500 hover:text-pink-600
                rounded-lg
                px-2 py-2
                hover:bg-gray-200 hover:shadow-lg
            ">
            <Icon />
        </Link>
    );
};