import { Card } from "@/components/ui/card"
import { User, Zap, Award, Target } from "lucide-react"

export interface ChallengeTemplateCardProps {
    title: string
    description: string
    duration: string
    imageSrc: string
    type: "Individual" | "Group"
    category: string
    effort: "Low" | "Medium" | "High"
    reward: boolean
}

export function ChallengeTemplateCard({
    title,
    description,
    duration,
    imageSrc,
    type,
    category,
    effort,
    reward,
}: ChallengeTemplateCardProps) {
    return (
        <Card className="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm p-4">
            <div className="flex flex-col">
                {/* Image with inner stroke */}
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-[#F3F4F6]">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-inset ring-black" />
                </div>

                {/* Content */}
                <div className="mt-3 px-1">
                    <span className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider">{duration}</span>
                    <h3 className="mt-0.5 text-base font-bold text-[#111827]">{title}</h3>
                    <p className="mt-1 text-xs text-[#6B7280] line-clamp-2 leading-relaxed">{description}</p>
                </div>

                {/* Footer */}
                <div className="mt-4 px-3 pb-4 border-t border-[#E5E7EB] pt-3">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                        <div className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" strokeWidth={1.5} />
                            <span>{type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Target className="h-3.5 w-3.5" strokeWidth={1.5} />
                            <span className="uppercase tracking-wide">{category}</span>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-xs text-[#6B7280]">
                        <div className="flex items-center gap-1.5">
                            <Zap className="h-3.5 w-3.5" strokeWidth={1.5} />
                            <span>{effort} effort</span>
                        </div>
                        {reward && (
                            <div className="flex items-center gap-1.5">
                                <Award className="h-3.5 w-3.5" strokeWidth={1.5} />
                                <span>Reward</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    )
}
