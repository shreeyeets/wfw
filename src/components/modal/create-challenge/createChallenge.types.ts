import { Target, Heart, Smile, Users2, Sparkles, Plus } from "lucide-react"
import type { ChallengeTemplateCardProps } from "@/components/cards/ChallengeTemplateCard"

export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface CreateChallengeState {
    step: Step
    audience: string
    goal: string
    totalDays: number
    durationLabel: string
    daysPerWeek: number
    selectedWeekdays: string[]
    challengeName: string
    description: string
    effort: string
    loadingProgress: number
    remindersEnabled: boolean
}

export const CHALLENGE_NAMES = [
    "3 Day Mindfulness",
    "Focus Foundations",
    "Stress Reset Sprint",
    "Wellness Weekly",
    "Team Energy Boost",
    "Zen Work Protocol",
    "Productivity Peak",
    "Emotional Harmony"
]

export const GOALS = [
    { title: "Productivity & Focus", desc: "Improve focus, energy, and daily effectiveness", icon: Target },
    { title: "Work-Life Balance", desc: "Build healthier boundaries and sustainable routines", icon: Heart },
    { title: "Stress & Emotional Well-being", desc: "Support calm, resilience, and mental health", icon: Smile },
    { title: "Challenge Connection & Culture", desc: "Strengthen trust, belonging, and collaboration", icon: Users2 },
    { title: "Fun & Challenge Activities", desc: "Run light, engaging challenges like games or hackathons", icon: Sparkles },
    { title: "Other", desc: "Something else on your mind", icon: Plus },
]

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]

export interface StepProps {
    state: CreateChallengeState
    nextStep: () => void
    prevStep: () => void
    setField: <K extends keyof CreateChallengeState>(field: K, value: CreateChallengeState[K]) => void
    handleContinue: () => void
    handleRefreshName: (e: React.MouseEvent) => void
    toggleWeekday: (day: string) => void
    handleSubmit: () => void
    onCreate: (data: ChallengeTemplateCardProps) => void
}
