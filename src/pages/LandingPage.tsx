import { Button } from "@/components/ui/button"

interface LandingPageProps {
    onStart: () => void
}

export function LandingPage({ onStart }: LandingPageProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <Button
                onClick={onStart}
                className="text-lg font-medium underline px-0 py-0 h-auto bg-transparent text-black hover:bg-transparent hover:text-black/70"
            >
                click here to go to home
            </Button>
        </div>
    )
}
