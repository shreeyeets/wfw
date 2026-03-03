import { useState } from "react"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { LeftPanel } from "@/components/layout/LeftPanel"
import { RightPanel } from "@/components/layout/RightPanel"
import { GreetingSection } from "@/components/sections/GreetingSection"
import { CreateChallengeSection } from "@/components/sections/CreateChallengeSection"
import { ActiveChallengesSection } from "@/components/sections/ActiveChallengesSection"
import { WysaToolsSection } from "@/components/sections/WysaToolsSection"
import { PlanYourDayCard } from "@/components/cards/PlanYourDayCard"
import { StreakCard } from "@/components/cards/StreakCard"
import { ChallengeTemplateCard } from "@/components/cards/ChallengeTemplateCard"
import type { ChallengeTemplateCardProps } from "@/components/cards/ChallengeTemplateCard"

const DEFAULT_CHALLENGES: ChallengeTemplateCardProps[] = [
    {
        title: "Stress Reset",
        description: "Feel calmer and more in control",
        duration: "7 days",
        imageSrc: "/images/challenges/stress_reset.png",
        type: "Individual",
        category: "STRESS",
        effort: "Low",
        reward: true,
    },
    {
        title: "Better Sleep",
        description: "Wind down faster and wake up fresher",
        duration: "10 days",
        imageSrc: "/images/challenges/better_sleep.png",
        type: "Group",
        category: "WELLNESS",
        effort: "Medium",
        reward: true,
    },
    {
        title: "Mindfulness week",
        description: "Get more done with less overwhelm",
        duration: "4 days",
        imageSrc: "/images/challenges/mindfulness_week.png",
        type: "Individual",
        category: "FOCUS",
        effort: "Medium",
        reward: false,
    },
    {
        title: "Move More",
        description: "Increase energy with small daily steps",
        duration: "6 days",
        imageSrc: "/images/challenges/move_more.png",
        type: "Individual",
        category: "HEALTH",
        effort: "Low",
        reward: false,
    },
    {
        title: "Challenge Connect",
        description: "Strengthen workplace relationships",
        duration: "3 days",
        imageSrc: "/images/challenges/team_connect.png",
        type: "Group",
        category: "NETWORKING",
        effort: "Low",
        reward: true,
    }
]

export function DashboardPage() {
    const [templates] = useState<ChallengeTemplateCardProps[]>(DEFAULT_CHALLENGES)
    const [createdChallenges, setCreatedChallenges] = useState<ChallengeTemplateCardProps[]>([])

    const handleCreateChallenge = (data: ChallengeTemplateCardProps) => {
        setCreatedChallenges(prev => [...prev, data])
    }

    return (
        <DashboardLayout>
            <LeftPanel>
                <div className="space-y-10">
                    <div className="space-y-6">
                        <GreetingSection />
                    </div>

                    {/* Active Challenges — shown only when challenges exist */}
                    <ActiveChallengesSection challenges={createdChallenges} />

                    {/* Create a Challenge — compact when challenges exist, full-size when not */}
                    <section className="space-y-3">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-[#111827]">Create a Challenge</h2>
                            <p className="text-sm text-[#6B7280] mt-0.5">Curated activities designed to guide your wellness journey.</p>
                        </div>
                        {createdChallenges.length > 0 ? (
                            /* Compact grid — sits in same 2-col grid as Active Challenges cards */
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <CreateChallengeSection onCreate={handleCreateChallenge} compact />
                            </div>
                        ) : (
                            <CreateChallengeSection onCreate={handleCreateChallenge} />
                        )}
                    </section>

                    {/* Wysa-curated templates */}
                    <section className="space-y-4">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-[#111827]">Start a Challenge with Wysa</h2>
                            <p className="text-sm text-[#6B7280] mt-0.5">Curated activities designed to guide your wellness journey.</p>
                        </div>
                        <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
                            {templates.slice(0, 3).map((challenge) => (
                                <div key={challenge.title} className="min-w-[240px] sm:min-w-0">
                                    <ChallengeTemplateCard {...challenge} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges by others */}
                    <section className="space-y-4">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-[#111827]">Challenges Started by Others</h2>
                            <p className="text-sm text-[#6B7280] mt-0.5">Collaborate and grow with challenges led by fellow employees.</p>
                        </div>
                        <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible">
                            {templates.slice(3).map((challenge) => (
                                <div key={challenge.title} className="min-w-[240px] sm:min-w-0">
                                    <ChallengeTemplateCard {...challenge} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </LeftPanel>

            <RightPanel>
                <div className="space-y-6">
                    <PlanYourDayCard />
                    <StreakCard />
                    <WysaToolsSection />
                </div>
            </RightPanel>
        </DashboardLayout>
    )
}
