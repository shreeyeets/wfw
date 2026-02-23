import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GettingStartedCard() {
    return (
        <Card className="flex flex-col gap-2 p-4 shadow-sm bg-white border border-[#E5E7EB]">
            <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-50 p-2 shadow-sm">
                    <Trophy className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-1">
                    <h4 className="font-semibold leading-none tracking-tight text-[#111827]">Just getting started</h4>
                    <p className="text-xs text-[#6B7280]">Complete check-ins to climb the board.</p>
                    <Button variant="link" className="h-auto p-0 text-xs text-blue-600 underline-offset-4 font-normal">
                        View leaderboard →
                    </Button>
                </div>
            </div>
        </Card>
    )
}
