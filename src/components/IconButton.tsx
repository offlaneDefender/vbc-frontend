import { IconType } from 'react-icons'
import { FC } from "react";

interface IconButtonProps {
    icon: IconType;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
    icon,
    onClick
}) => {
    const Icon = icon;
    return (
        <Icon onClick={onClick} className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer" />
    )
}

export default IconButton