import React from "react"

interface RightPanelProps {
    children: React.ReactNode
}

export function RightPanel({ children }: RightPanelProps) {
    return (
        <div className="w-full lg:w-[380px] xl:w-[420px] space-y-6 md:space-y-8">
            {children}
        </div>
    )
}