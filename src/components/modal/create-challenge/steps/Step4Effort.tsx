import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { StepProps } from "../createChallenge.types"

// All 7 days as shown in Figma
const ALL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const EFFORT_OPTIONS = [
    { label: "2-5 minutes", desc: "Quick, lightweight actions" },
    { label: "5-10 minutes", desc: "Balanced and sustainable", recommended: true },
    { label: "10-15 minutes", desc: "More intentional time" },
    { label: "Custom", desc: "" }
]

function computeWeeks(totalDays: number, daysPerWeek: number): number {
    if (daysPerWeek <= 0) return 0
    return Math.ceil(totalDays / daysPerWeek)
}

export function Step4Effort({
    state,
    setField,
    handleContinue,
    toggleWeekday
}: Pick<StepProps, "state" | "setField" | "handleContinue" | "toggleWeekday">) {
    const numWeeks = computeWeeks(state.totalDays, state.daysPerWeek)

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 flex-1 items-start">
                {/* Left: Daily Time Commitment */}
                <div className="flex-1 space-y-3">
                    <h3 className="text-sm font-bold">Daily Time Commitment</h3>
                    <div className="divide-y divide-gray-100">
                        {EFFORT_OPTIONS.map(item => (
                            <div
                                key={item.label}
                                onClick={() => setField("effort", item.label)}
                                className="py-3 flex items-center justify-between cursor-pointer group"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={cn("text-sm font-semibold", state.effort === item.label ? "text-black" : "text-gray-700 group-hover:text-black transition-colors")}>
                                            {item.label}
                                        </span>
                                        {item.recommended && (
                                            <span className="text-[9px] bg-black text-white px-1.5 py-0.5 rounded uppercase font-bold tracking-wide">Recommended</span>
                                        )}
                                    </div>
                                    {item.desc && <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>}
                                </div>
                                <div className={cn(
                                    "h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                                    state.effort === item.label ? "border-black" : "border-gray-200"
                                )}>
                                    {state.effort === item.label && <div className="h-2 w-2 rounded-full bg-black" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Schedule */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-sm font-bold">How often will you use this?</h3>
                    </div>

                    {/* Reminders toggle */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Enable reminders</span>
                        <button
                            onClick={() => setField("remindersEnabled", !state.remindersEnabled)}
                            className={cn(
                                "relative h-7 w-12 rounded-full transition-colors duration-200",
                                state.remindersEnabled ? "bg-black" : "bg-gray-300"
                            )}
                            role="switch"
                            aria-checked={state.remindersEnabled}
                        >
                            <div className={cn(
                                "absolute top-1 h-5 w-5 bg-white rounded-full shadow transition-transform duration-200",
                                state.remindersEnabled ? "translate-x-6" : "translate-x-1"
                            )} />
                        </button>
                    </div>

                    {/* Weekly schedule — all 7 days as per Figma */}
                    <div className="space-y-3">
                        {Array.from({ length: numWeeks }, (_, wi) => {
                            const daysUsedBefore = wi * state.daysPerWeek
                            const daysThisWeek = Math.min(state.daysPerWeek, state.totalDays - daysUsedBefore)
                            const sortedSelected = ALL_DAYS.filter(d => state.selectedWeekdays.includes(d))
                            const activeDaysThisWeek = sortedSelected.slice(0, daysThisWeek)
                            return (
                                <div key={wi} className="space-y-1.5">
                                    <p className="text-xs font-semibold text-gray-400">Week {wi + 1}</p>
                                    <div className="flex gap-1.5">
                                        {ALL_DAYS.map(day => {
                                            const isActive = activeDaysThisWeek.includes(day)
                                            const isSelectable = wi === 0
                                            return (
                                                <button
                                                    key={day}
                                                    onClick={() => isSelectable && toggleWeekday(day)}
                                                    disabled={!isSelectable}
                                                    className={cn(
                                                        "h-8 w-8 rounded-full text-[10px] font-bold flex items-center justify-center transition-all",
                                                        isActive
                                                            ? "bg-black text-white"
                                                            : isSelectable
                                                                ? "border border-gray-200 text-gray-300 hover:border-gray-400"
                                                                : "border border-gray-100 text-gray-200"
                                                    )}
                                                >
                                                    {day.slice(0, 3)}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Single CTA */}
            <Button
                onClick={handleContinue}
                className="w-full font-semibold h-12 rounded-2xl bg-black text-white hover:bg-black/90"
            >
                Continue
            </Button>
        </div>
    )
}
