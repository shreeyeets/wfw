import { Button } from "@/components/ui/button"
import { Flame } from "lucide-react"
import type { StepProps } from "../createChallenge.types"
import type { CreateChallengeState } from "../createChallenge.types"

interface Step8CompleteProps extends Pick<StepProps, "handleSubmit"> {
    challengeName?: CreateChallengeState["challengeName"]
}

export function Step8Complete({ handleSubmit, challengeName }: Step8CompleteProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-6 text-center">
            {/* Fire icon in a circle — matches Figma */}
            <div className="h-24 w-24 rounded-full border-[3px] border-black flex items-center justify-center">
                <Flame className="h-10 w-10 text-black" strokeWidth={1.5} />
            </div>

            <div className="space-y-2">
                <p className="text-sm text-gray-500 font-medium">Congratulations!</p>
                <h2 className="text-xl font-bold leading-snug">
                    You created a<br />{challengeName || "Mindfulness Week"} Challenge
                </h2>
            </div>

            <p className="text-sm text-gray-500 max-w-xs">
                Your first activity begins tomorrow at 9:00 AM. See you there!
            </p>

            <Button
                onClick={handleSubmit}
                className="w-full bg-[#1F2937] text-white hover:bg-[#111827] h-12 font-bold rounded-2xl text-base"
            >
                Got it!
            </Button>
        </div>
    )
}
