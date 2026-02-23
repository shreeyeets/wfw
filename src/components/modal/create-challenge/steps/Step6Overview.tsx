import { Button } from "@/components/ui/button"
import { Users, Target, Zap, Heart, Edit2 } from "lucide-react"
import type { StepProps } from "../createChallenge.types"

const DAY_LABELS = ["Start Challenge", "Be Present", "Cultivate Awareness"]
const DAY_ACTIVITIES = [
    { title: "Deep breathing exercise", desc: "Start with a simple 3-minute breathing practice" },
    { title: "Set Your Intention for the Week", desc: "Take a moment to reflect and set a mindful intention for the week ahead." },
    { title: "Mindful Walking", desc: "Take a walk outside and pay attention to every step and the environment around you." }
]

export function Step6Overview({ state, handleContinue }: Pick<StepProps, "state" | "handleContinue">) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-6 text-left flex-1">
                {/* Left: Summary */}
                <div className="w-[200px] shrink-0 flex flex-col gap-4">
                    <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                        <img src="/images/calendar_icon.png" className="w-14 opacity-30" alt="" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{state.challengeName} Challenge</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Users className="h-3 w-3" />
                            <span>{state.audience === "team" ? "Group" : "Individual"}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Target className="h-3 w-3" />
                            <span>{state.goal.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <span>{state.totalDays} days</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Zap className="h-3 w-3" />
                            <span>{state.effort} effort</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">At The End Of Challenge, Participants Can Expect:</p>
                        {[
                            { t: "Better Focus", d: "Short, low-effort actions reduce cognitive overload." },
                            { t: "Improved Mood", d: "Small positive moments increase emotional well-being." },
                            { t: "Consistency Over Intensity", d: "Short challenges are easier to stick to and complete." }
                        ].map(item => (
                            <div key={item.t}>
                                <p className="text-xs font-bold text-gray-800">{item.t}</p>
                                <p className="text-[11px] text-gray-400 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Daily Breakdown */}
                <div className="flex-1 space-y-3 overflow-y-auto">
                    {Array.from({ length: state.totalDays }).map((_, di) => {
                        const activity = DAY_ACTIVITIES[di % DAY_ACTIVITIES.length]
                        const dayLabel = DAY_LABELS[di % DAY_LABELS.length]
                        const isWysaTool = di < 2
                        return (
                            <div key={di} className="rounded-2xl border border-gray-100 bg-white p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-sm">Day {di + 1}: {dayLabel}</h4>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-100 rounded-lg text-gray-400 text-xs">
                                        <Heart className="h-3 w-3" />
                                        <span className="font-semibold">{isWysaTool ? "Wysa Tool" : "Task"}</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                                    <div className="flex-1 space-y-0.5">
                                        <p className="text-xs font-bold text-gray-800">{activity.title}</p>
                                        <p className="text-[11px] text-gray-400 leading-relaxed">{activity.desc}</p>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="bg-gray-700 hover:bg-gray-800 text-white rounded-xl px-3 h-8 text-xs gap-1.5 shrink-0"
                                    >
                                        Customize this step
                                        <Edit2 className="h-3 w-3" />
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Single CTA */}
            <Button
                onClick={handleContinue}
                className="w-full font-bold h-12 rounded-2xl bg-black text-white hover:bg-black/90"
            >
                Commit to my goal
            </Button>
        </div>
    )
}
