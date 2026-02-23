import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { User, Target, Zap } from "lucide-react"
import type { ChallengeTemplateCardProps } from "./ChallengeTemplateCard"

interface ActiveChallengeCardProps extends ChallengeTemplateCardProps {
    daysCompleted?: number
    onMarkDone?: () => void
}

export function ActiveChallengeCard({
    title,
    description,
    duration,
    type,
    category,
    effort,
    daysCompleted = 1,
    onMarkDone,
}: ActiveChallengeCardProps) {
    const totalDays = Number(duration.split(" ")[0]) || 3
    const progressPercent = Math.round((daysCompleted / totalDays) * 100)

    return (
        // p-4 on the Card — identical to ChallengeTemplateCard
        <Card className="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm p-4">
            <div className="flex flex-col">
                {/* Image with inner stroke — padded inside card, rounded, same as ChallengeTemplateCard */}
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-[#F3F4F6]">
                    <img
                        src="/images/challenges/active_challenge.png"
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-inset ring-black" />
                    <div className="absolute top-2.5 right-2.5">
                        <span className="rounded-md bg-white/90 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-[#111827] shadow-sm border border-black/10">
                            {daysCompleted}/{totalDays}
                        </span>
                    </div>
                </div>

                {/* Content — same mt-3 px-1 as ChallengeTemplateCard */}
                <div className="mt-3 px-1 space-y-2">
                    {/* Progress */}
                    <div className="space-y-0.5">
                        <Progress value={progressPercent} className="h-1.5 bg-gray-100" />
                        <p className="text-[10px] font-medium text-gray-400">{daysCompleted}/{totalDays} days completed</p>
                    </div>

                    {/* Title + description */}
                    <div>
                        <h3 className="text-base font-bold text-[#111827] leading-tight mt-0.5">{title}</h3>
                        <p className="mt-1 text-xs text-[#6B7280] line-clamp-2 leading-relaxed">{description}</p>
                    </div>
                </div>

                {/* Footer — matches ChallengeTemplateCard footer */}
                <div className="mt-4 px-3 pb-2 border-t border-[#E5E7EB] pt-3 space-y-2">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                        <div className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" strokeWidth={1.5} />
                            <span>{type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Target className="h-3.5 w-3.5" strokeWidth={1.5} />
                            <span className="uppercase tracking-wide">{category}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Zap className="h-3.5 w-3.5" strokeWidth={1.5} />
                            <span>{effort} effort</span>
                        </div>
                    </div>
                    <Button
                        onClick={onMarkDone}
                        className="w-full bg-black text-white hover:bg-black/90 font-bold h-10 rounded-xl"
                    >
                        Mark as Done
                    </Button>
                </div>
            </div>
        </Card>
    )
}
