import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { StepProps } from "../createChallenge.types"

const SAMPLE_PARTICIPANTS = [
    { email: "ayesha.singh@company.com", invited: true },
    { email: "rohan.mehta@company.com", invited: false },
    { email: "neha.kapoor@company.com", invited: true },
    { email: "daniel.chen@company.com", invited: false },
    { email: "sara.khan@company.com", invited: false }
]

export function Step7Invite({ handleContinue }: Pick<StepProps, "handleContinue">) {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-sm text-gray-400 text-center">Add participants for support and accountability.</p>

            {/* Email input row */}
            <div className="flex h-11">
                <Input
                    placeholder="Enter email address to add participant..."
                    className="rounded-l-xl rounded-r-none border-r-0 h-full focus-visible:ring-0 text-sm"
                />
                <Button className="bg-black text-white hover:bg-black/90 font-bold px-6 h-full rounded-r-xl rounded-l-none shrink-0">
                    ADD
                </Button>
            </div>

            {/* Participants list */}
            <div className="flex-1 space-y-2">
                {SAMPLE_PARTICIPANTS.map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-medium text-gray-700">{p.email}</span>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={p.invited}
                            className={cn(
                                "h-8 rounded-lg text-xs font-semibold px-4",
                                p.invited ? "bg-gray-100 text-gray-400 border-gray-100 cursor-default" : "border-gray-200"
                            )}
                        >
                            {p.invited ? "Invited" : "Send invite"}
                        </Button>
                    </div>
                ))}
            </div>

            <p className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                {SAMPLE_PARTICIPANTS.filter(p => p.invited).length} of {SAMPLE_PARTICIPANTS.length} participants invited
            </p>

            {/* Single CTA */}
            <Button
                onClick={handleContinue}
                className="w-full font-semibold h-12 rounded-2xl bg-black text-white hover:bg-black/90"
            >
                Done
            </Button>
        </div>
    )
}
