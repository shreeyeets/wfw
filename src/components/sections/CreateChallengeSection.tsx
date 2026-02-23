import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CreateChallengeModal } from "@/components/modal/create-challenge/CreateChallengeModal"
import type { ChallengeTemplateCardProps } from "@/components/cards/ChallengeTemplateCard"

interface CreateChallengeSectionProps {
    onCreate: (data: ChallengeTemplateCardProps) => void
    /** When true, renders a compact card matching ActiveChallengeCard proportions */
    compact?: boolean
}

export function CreateChallengeSection({ onCreate, compact }: CreateChallengeSectionProps) {
    if (compact) {
        // Compact mode — same size/structure as ChallengeTemplateCard / ActiveChallengeCard
        return (
            <Card className="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm p-4">
                <div className="flex flex-col">
                    {/* Image inside card padding — rounded-xl with ring, matches ChallengeTemplateCard */}
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-[#F3F4F6]">
                        <img
                            src="/images/create_challenge.png"
                            alt="Create A Wellness Challenge"
                            className="h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-inset ring-black" />
                    </div>

                    {/* Content — matches ChallengeTemplateCard */}
                    <div className="mt-3 px-1 space-y-1">
                        <h3 className="text-base font-bold text-[#111827] leading-tight">Create A Wellness Challenge</h3>
                        <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
                            Short, goal-based challenges for yourself or your team to build healthier habits at work.
                        </p>
                    </div>

                    <div className="mt-4 px-3 pb-2 border-t border-[#E5E7EB] pt-3">
                        <CreateChallengeModal onCreate={onCreate}>
                            <Button className="w-full bg-black text-white hover:bg-black/90 rounded-xl font-bold h-10">
                                Create your Challenge
                            </Button>
                        </CreateChallengeModal>
                    </div>
                </div>
            </Card>
        )
    }

    // Default (full-size) mode — shown when no active challenges
    return (
        <Card className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm p-4">
            <div className="flex flex-col gap-4">
                {/* Hero Image */}
                <div className="relative w-full overflow-hidden rounded-xl bg-[#F3F4F6]" style={{ aspectRatio: "3/1" }}>
                    <div className="absolute inset-0 bg-gray-100 mix-blend-multiply z-10 pointer-events-none" />
                    <img
                        src="/images/create_challenge.png"
                        alt="Create A Wellness Challenge"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-inset ring-black" />
                </div>

                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111827]">
                        Create A Wellness Challenge
                    </h2>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                        Short, goal-based challenges for yourself or your team to build healthier habits at work.
                    </p>
                </div>

                <CreateChallengeModal onCreate={onCreate}>
                    <Button className="w-full bg-black text-white hover:bg-black/90 rounded-xl font-bold py-6">
                        Create your Challenge
                    </Button>
                </CreateChallengeModal>
            </div>
        </Card>
    )
}
