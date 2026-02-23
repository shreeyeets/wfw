import { ActiveChallengeCard } from "@/components/cards/ActiveChallengeCard"
import type { ChallengeTemplateCardProps } from "@/components/cards/ChallengeTemplateCard"

interface ActiveChallengesSectionProps {
    challenges: ChallengeTemplateCardProps[]
    onMarkDone?: (index: number) => void
}

export function ActiveChallengesSection({ challenges, onMarkDone }: ActiveChallengesSectionProps) {
    if (challenges.length === 0) return null

    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-xl font-bold tracking-tight text-[#111827]">Active Challenges</h2>
                <p className="text-sm text-[#6B7280] mt-0.5">
                    {challenges.length === 1
                        ? "Your current active challenge"
                        : `You have ${challenges.length} active challenges`}
                </p>
            </div>

            {/* Grid: 1 col mobile, 2 col sm+ (matches template card grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {challenges.map((challenge, i) => (
                    <ActiveChallengeCard
                        key={i}
                        {...challenge}
                        daysCompleted={1}
                        onMarkDone={() => onMarkDone?.(i)}
                    />
                ))}
            </div>
        </section>
    )
}
