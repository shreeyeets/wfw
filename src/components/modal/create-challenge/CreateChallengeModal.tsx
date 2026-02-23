import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ChallengeTemplateCardProps } from "@/components/cards/ChallengeTemplateCard"

import { useCreateChallengeState } from "./useCreateChallengeState"

// Step Components
import { Step1Audience } from "./steps/Step1Audience"
import { Step2Goal } from "./steps/Step2Goal"
import { Step3Setup } from "./steps/Step3Setup"
import { Step4Effort } from "./steps/Step4Effort"
import { Step5Loading } from "./steps/Step5Loading"
import { Step6Overview } from "./steps/Step6Overview"
import { Step7Invite } from "./steps/Step7Invite"
import { Step8Complete } from "./steps/Step8Complete"

interface CreateChallengeModalProps {
    children: React.ReactNode
    onCreate: (data: ChallengeTemplateCardProps) => void
}

// Titles per step (steps 5 and 8 have no title in Figma — they're full-screen states)
const STEP_TITLES: Record<number, string> = {
    1: "Who's this challenge for?",
    2: "What's the goal of your challenge?",
    3: "Setup your Challenge",
    4: "Set Participant Effort",
    6: "Challenge Overview",
    7: "Invite participants"
}

// Steps that show a back button
const STEPS_WITH_BACK = new Set([2, 3, 4, 6, 7])

export function CreateChallengeModal({ children, onCreate }: CreateChallengeModalProps) {
    const [open, setOpen] = useState(false)
    const {
        state,
        setField,
        nextStep,
        prevStep,
        handleRefreshName,
        toggleWeekday,
        resetModal
    } = useCreateChallengeState(open)

    const handleSubmit = () => {
        const effortMap: Record<string, "Low" | "Medium" | "High"> = {
            "2-5 minutes": "Low",
            "5-10 minutes": "Medium",
            "10-15 minutes": "High",
            "Custom": "Medium"
        }
        onCreate({
            title: state.challengeName,
            description: state.description || "Build steady, positive routines",
            duration: state.durationLabel,
            imageSrc: "/images/challenges/mindfulness_week.png",
            type: state.audience === "team" ? "Group" : "Individual",
            category: state.goal.split(' ')[0].toUpperCase(),
            effort: effortMap[state.effort] || "Medium",
            reward: true,
        })
        setOpen(false)
        resetModal()
    }

    const currentStep = state.step
    const stepTitle = STEP_TITLES[currentStep]
    const showBack = STEPS_WITH_BACK.has(currentStep)

    // Progress bar: steps 1-4 map to 4 segments
    const progressStep = Math.min(currentStep, 4)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent
                className="w-full max-w-2xl mx-auto p-0 overflow-hidden border-none shadow-2xl rounded-2xl sm:rounded-3xl"
                onPointerDownOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
            >
                {/* ───── Header (progress bar + title + close) ───── */}
                <div className="px-5 pt-4 pb-0">
                    {/* Progress bar — 4 steps, hidden on step 5 (loading) and 8 (congratulations) */}
                    {currentStep !== 5 && currentStep !== 8 && (
                        <div className="flex gap-1.5 h-[3px] mb-4">
                            {[1, 2, 3, 4].map(idx => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "flex-1 rounded-full transition-colors duration-300",
                                        progressStep >= idx ? "bg-black" : "bg-gray-200"
                                    )}
                                />
                            ))}
                        </div>
                    )}

                    {/* Title row */}
                    <div className="flex items-center justify-between min-h-[36px]">
                        {showBack ? (
                            <button
                                onClick={prevStep}
                                className="p-1 -ml-1 text-gray-400 hover:text-black transition-colors rounded-lg"
                                aria-label="Go back"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                        ) : (
                            <div className="w-7" />
                        )}

                        {stepTitle ? (
                            <h2 className="text-sm sm:text-base font-bold text-center">{stepTitle}</h2>
                        ) : (
                            <div />
                        )}

                        <button
                            onClick={() => setOpen(false)}
                            className="p-1 -mr-1 text-gray-400 hover:text-black transition-colors rounded-lg"
                            aria-label="Close"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* ───── Content: scrollable, fully responsive height ───── */}
                <div className="px-5 pb-5 pt-4 overflow-y-auto max-h-[calc(85svh-4rem)] sm:max-h-[calc(80svh-4rem)] min-h-[420px] sm:min-h-[480px]">
                    {currentStep === 1 && <Step1Audience state={state} setField={setField} handleContinue={nextStep} />}
                    {currentStep === 2 && <Step2Goal state={state} setField={setField} handleContinue={nextStep} />}
                    {currentStep === 3 && <Step3Setup state={state} setField={setField} handleContinue={nextStep} handleRefreshName={handleRefreshName} />}
                    {currentStep === 4 && <Step4Effort state={state} setField={setField} handleContinue={nextStep} toggleWeekday={toggleWeekday} />}
                    {currentStep === 5 && <Step5Loading state={state} />}
                    {currentStep === 6 && <Step6Overview state={state} handleContinue={nextStep} />}
                    {currentStep === 7 && <Step7Invite handleContinue={nextStep} />}
                    {currentStep === 8 && <Step8Complete handleSubmit={handleSubmit} challengeName={state.challengeName} />}
                </div>
            </DialogContent>
        </Dialog>
    )
}
