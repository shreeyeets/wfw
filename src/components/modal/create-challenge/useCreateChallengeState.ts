import { useState, useEffect } from "react"
import type { Step, CreateChallengeState } from "./createChallenge.types"
import { CHALLENGE_NAMES, WEEKDAYS } from "./createChallenge.types"

const DEFAULT_STATE: CreateChallengeState = {
    step: 1,
    audience: "myself",
    goal: "Productivity & Focus",
    totalDays: 3,
    durationLabel: "3 Days",
    daysPerWeek: 3,
    selectedWeekdays: WEEKDAYS.slice(0, 3),
    challengeName: CHALLENGE_NAMES[0],
    description: "",
    effort: "5-10 minutes",
    loadingProgress: 0,
    remindersEnabled: true,
}

export function useCreateChallengeState(open: boolean) {
    const [state, setState] = useState<CreateChallengeState>(DEFAULT_STATE)

    const setField = <K extends keyof CreateChallengeState>(field: K, value: CreateChallengeState[K]) => {
        setState(prev => ({ ...prev, [field]: value }))
    }

    const resetModal = () => {
        setState(DEFAULT_STATE)
    }

    // Reset state when modal closes
    useEffect(() => {
        if (!open) {
            resetModal()
        }
    }, [open])

    const nextStep = () => {
        if (state.step < 4) {
            setField("step", (state.step + 1) as Step)
        } else if (state.step === 4) {
            setField("step", 5)
            const interval = setInterval(() => {
                setState(prev => {
                    if (prev.loadingProgress >= 100) {
                        clearInterval(interval)
                        setTimeout(() => setState(s => ({ ...s, step: 6 })), 500)
                        return { ...prev, loadingProgress: 100 }
                    }
                    return { ...prev, loadingProgress: prev.loadingProgress + 2 }
                })
            }, 30)
        } else if (state.step === 6) {
            setField("step", state.audience === "team" ? 7 : 8)
        } else if (state.step === 7) {
            setField("step", 8)
        }
    }

    const prevStep = () => {
        if (state.step === 6) setField("step", 4)
        else if (state.step === 7) setField("step", 6)
        else if (state.step > 1) setField("step", (state.step - 1) as Step)
    }

    const handleRefreshName = (e: React.MouseEvent) => {
        e.stopPropagation()
        const currentIdx = CHALLENGE_NAMES.indexOf(state.challengeName)
        let nextIdx = Math.floor(Math.random() * CHALLENGE_NAMES.length)
        while (nextIdx === currentIdx) {
            nextIdx = Math.floor(Math.random() * CHALLENGE_NAMES.length)
        }
        setField("challengeName", CHALLENGE_NAMES[nextIdx])
    }

    const toggleWeekday = (day: string) => {
        if (state.selectedWeekdays.includes(day)) {
            if (state.selectedWeekdays.length > 1) {
                const next = state.selectedWeekdays.filter(d => d !== day)
                setState(prev => ({
                    ...prev,
                    selectedWeekdays: next,
                    daysPerWeek: next.length
                }))
            }
        } else {
            if (state.totalDays < 5 && state.selectedWeekdays.length >= state.totalDays) {
                return
            }
            const next = [...state.selectedWeekdays, day]
            setState(prev => ({
                ...prev,
                selectedWeekdays: next,
                daysPerWeek: next.length
            }))
        }
    }

    return {
        state,
        setField,
        resetModal,
        nextStep,
        prevStep,
        handleRefreshName,
        toggleWeekday
    }
}
