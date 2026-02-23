import { Card } from "@/components/ui/card"
import { Flame, Trophy, ChevronRight } from "lucide-react"

export function StreakCard() {
    return (
        <Card className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm p-4">
            <div className="flex divide-x divide-black/10">
                {/* Streak */}
                <div className="flex-1 p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                            <Flame className="h-5 w-5 text-black" strokeWidth={1.5} />
                            <span className="text-3xl font-bold text-[#111827]">1</span>
                        </div>
                        <span className="text-sm font-semibold text-[#111827]">Streak</span>
                        <p className="text-[11px] text-[#6B7280]">Log today to start</p>
                    </div>
                </div>

                {/* Rank */}
                <div className="flex-1 p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                            <Trophy className="h-5 w-5 text-black" strokeWidth={1.5} />
                            <span className="text-3xl font-bold text-[#111827]">0</span>
                        </div>
                        <span className="text-sm font-semibold text-[#111827]">Rank</span>
                        <p className="text-[11px] text-[#6B7280]">Complete check-ins to climb.</p>
                    </div>
                </div>

                {/* Leaderboard */}
                <div className="flex items-end justify-end p-4">
                    <button className="flex items-center gap-1 text-xs font-semibold text-[#111827] hover:underline whitespace-nowrap">
                        Leaderboard <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </Card>
    )
}
