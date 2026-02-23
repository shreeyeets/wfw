import React from "react"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 md:px-10 lg:px-14 lg:py-12">
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-12">
                    {children}
                </div>
            </main>
        </div>
    )
}