import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface PlanYourDayModalProps {
    children: React.ReactNode
}

export function PlanYourDayModal({ children }: PlanYourDayModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-lg rounded-2xl p-8">
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold">Plan Your Day</h2>
                    <p className="text-gray-400 text-sm">Your daily planner is coming soon.</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
