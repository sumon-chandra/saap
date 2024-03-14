"use client"

import { Button, Tooltip } from "@nextui-org/react"
import { FC } from "react"
import { IconType } from "react-icons"

interface HeaderIconProps {
    Icon: IconType
    iconSize?: number
    onClick?: () => void
    tooltipContent: string
}

const HeaderIcon: FC<HeaderIconProps> = ({ Icon, iconSize, onClick, tooltipContent }) => {
    return (
        <Tooltip content={tooltipContent}>
            <Button
                isIconOnly
                radius="full"
                className="bg-saap-bg-primary-light text-saap-primary hover:bg-saap-bg-primary-light hover:text-saap-secondary dark:bg-saap-bg-dark-primary"
                onClick={onClick}
            >
                <Icon size={iconSize} />
            </Button>
        </Tooltip>
    )
}

export default HeaderIcon
