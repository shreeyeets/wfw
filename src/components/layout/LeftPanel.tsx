import React from "react"

interface LeftPanelProps {
    children: React.ReactNode
}

export function LeftPanel({ children }: LeftPanelProps) {
    return (
        <div className="w-full lg:flex-1 lg:max-w-[820px] space-y-6 md:space-y-8">
            {children}
        </div>
    )
}