import { ChallengeTemplateCard, type ChallengeTemplateCardProps } from "@/components/cards/ChallengeTemplateCard"

interface JoinChallengesSectionProps {
    challenges: ChallengeTemplateCardProps[]
}

export function JoinChallengesSection({ challenges }: JoinChallengesSectionProps) {
    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold tracking-tight">Join Challenges</h2>
                <p className="text-sm text-[#6B7280]">Goal-based programs to build habits</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {challenges.map((challenge, index) => (
                    <ChallengeTemplateCard key={index} {...challenge} />
                ))}
            </div>
        </div>
    )
}
