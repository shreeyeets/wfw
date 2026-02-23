import { Progress } from "@/components/ui/progress"
import type { StepProps } from "../createChallenge.types"

export function Step5Loading({ state }: Pick<StepProps, "state">) {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-6">
            <img src="/images/loading.png" className="w-48 sm:w-64 object-contain" alt="Loading..." />
            <div className="space-y-3 w-full max-w-xs">
                <h3 className="text-lg font-bold">Wysa is creating a challenge for you...</h3>
                <p className="text-gray-400 text-sm">Analyzing your goals and preferences</p>
                <div className="space-y-1">
                    <Progress value={state.loadingProgress} className="h-1.5" />
                    <div className="flex justify-between text-[10px] uppercase font-bold text-gray-300 tracking-widest">
                        <span>Personalizing</span>
                        <span>{state.loadingProgress}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
