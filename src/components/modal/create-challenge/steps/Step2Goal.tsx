import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GOALS } from "../createChallenge.types"
import type { StepProps } from "../createChallenge.types"

export function Step2Goal({ state, setField, handleContinue }: Pick<StepProps, "state" | "setField" | "handleContinue">) {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-center text-gray-500 text-sm">
                Choose a focus area. You can select more than one. We'll suggest activities, structure, and ideas based on this.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
                {GOALS.map((g) => (
                    <div
                        key={g.title}
                        onClick={() => setField("goal", g.title)}
                        className={cn(
                            "flex flex-col gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all",
                            state.goal === g.title ? "border-black bg-gray-50" : "border-gray-100 hover:border-gray-300"
                        )}
                    >
                        <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center">
                            <g.icon className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-bold text-sm leading-tight">{g.title}</h4>
                        <p className="text-[11px] text-gray-400 leading-relaxed">{g.desc}</p>
                    </div>
                ))}
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
