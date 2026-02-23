import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Users, Users2 } from "lucide-react"
import type { StepProps } from "../createChallenge.types"

const items = [
    {
        key: "myself",
        icon: <Users className="h-8 w-8 text-gray-400" strokeWidth={1.5} />,
        title: "For myself",
        desc: "A personal challenge to build a small habit or routine. Track progress daily and stay consistent over time.",
        btnLabel: "Personal Challenge"
    },
    {
        key: "team",
        icon: <Users2 className="h-8 w-8 text-gray-400" strokeWidth={1.5} />,
        title: "For my Colleagues",
        desc: "A shared challenge to support well-being at work. Invite others, participate together, and build momentum.",
        btnLabel: "Challenge Challenge"
    }
]

export function Step1Audience({ state, setField, handleContinue }: Pick<StepProps, "state" | "setField" | "handleContinue">) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map(item => (
                <div
                    key={item.key}
                    onClick={() => setField("audience", item.key)}
                    className={cn(
                        "flex flex-col p-5 rounded-2xl border-2 cursor-pointer transition-all",
                        state.audience === item.key ? "border-black bg-gray-50" : "border-gray-100 hover:border-gray-300"
                    )}
                >
                    {/* Icon placeholder */}
                    <div className="w-full aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 leading-snug flex-1">{item.desc}</p>
                    {/* Single CTA per card — no duplicate footer button */}
                    <Button
                        onClick={(e) => { e.stopPropagation(); setField("audience", item.key); handleContinue() }}
                        className="w-full bg-black text-white hover:bg-black/90 rounded-xl font-semibold"
                    >
                        {item.btnLabel}
                    </Button>
                </div>
            ))}
        </div>
    )
}
