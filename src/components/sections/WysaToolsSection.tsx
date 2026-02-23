import { WysaToolCard } from "@/components/cards/WysaToolCard"

const WYSA_TOOLS = [
    {
        title: "Resolve Conflict",
        subtitle: "Difficult Conversation Planner",
        duration: "5 mins",
        imageSrc: "/images/wysa_tools/resolve_conflict.png",
    },
    {
        title: "Workplace Stress",
        subtitle: "Finding Balance at Work",
        duration: "6 mins",
        imageSrc: "/images/wysa_tools/workplace_stress.png",
    },
    {
        title: "Breathe Deeply",
        subtitle: "Focused breathing for calm",
        duration: "6 mins",
        imageSrc: "/images/wysa_tools/breathe_deeply.png",
    },
    {
        title: "Stretch Out",
        subtitle: "Quick workout Exercises",
        duration: "5 mins",
        imageSrc: "/images/wysa_tools/stretch_out.png",
    }
]

export function WysaToolsSection() {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-[#111827]">
                    Wysa Tools
                </h2>
            </div>
            <p className="text-sm text-[#6B7280]">
                Curated activities designed to guide your wellness journey.
            </p>

            <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible mt-4">
                {WYSA_TOOLS.map((tool) => (
                    <div key={tool.title} className="min-w-[180px] sm:min-w-0">
                        <WysaToolCard {...tool} />
                    </div>
                ))}
            </div>
        </section>
    )
}
