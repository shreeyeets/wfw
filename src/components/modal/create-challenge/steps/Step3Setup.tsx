import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { RefreshCw } from "lucide-react"
import type { StepProps } from "../createChallenge.types"

const DURATION_OPTIONS = [
    { val: 3, label: "3 Days", desc: "Quick micro-challenge to test a new habit", recommended: true },
    { val: 5, label: "5 Days", desc: "Short sprint to build momentum during the workweek" },
    { val: 7, label: "7 Days", desc: "Medium-length challenge for sustainable change" },
    { val: 10, label: "10 Days", desc: "Extended challenge to establish lasting routines" },
    { val: 0, label: "Custom", desc: "" }
]

export function Step3Setup({
    state,
    setField,
    handleContinue,
    handleRefreshName
}: Pick<StepProps, "state" | "setField" | "handleContinue" | "handleRefreshName">) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
                {/* Left: Duration */}
                <div className="flex-1 space-y-3">
                    <div>
                        <h3 className="text-sm font-bold">Number of Days</h3>
                        <p className="text-xs text-gray-400 mt-0.5">Choose your ideal duration. You can select more than one option to see what works best for your Challenge.</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {DURATION_OPTIONS.map(item => (
                            <div
                                key={item.label}
                                onClick={() => { setField("totalDays", item.val); setField("durationLabel", item.label) }}
                                className="py-3 flex items-center justify-between cursor-pointer group"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={cn("text-sm font-semibold", state.durationLabel === item.label ? "text-black" : "text-gray-700 group-hover:text-black transition-colors")}>
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
                                    state.durationLabel === item.label ? "border-black" : "border-gray-200"
                                )}>
                                    {state.durationLabel === item.label && <div className="h-2 w-2 rounded-full bg-black" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Challenge name + description */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-sm font-bold">Name of the Challenge</h3>
                        <p className="text-xs text-gray-400 mt-0.5">Give your challenge a name that resonates with your Challenge.</p>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <Label className="text-xs text-gray-500 mb-1 block">Challenge Name</Label>
                            <div className="relative">
                                <Input
                                    value={state.challengeName}
                                    onChange={e => setField("challengeName", e.target.value)}
                                    placeholder="e.g., 3 Day Mindfulness"
                                    className="pr-10 rounded-xl text-sm"
                                />
                                <button
                                    onClick={handleRefreshName}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                                    title="Suggest a name"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1 block">Description</Label>
                            <textarea
                                value={state.description}
                                onChange={(e) => setField("description", e.target.value)}
                                placeholder="Add more context about this challenge..."
                                className="w-full h-24 p-3 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-black/20 resize-none"
                            />
                        </div>
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
