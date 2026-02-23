import { PlanYourDayModal } from "@/components/modal/PlanYourDayModal"

export function PlanYourDayCard() {
    return (
        <div className="relative w-full overflow-hidden rounded-2xl cursor-default group transition-all">
            <img
                src="/images/plan_your_day.png"
                alt="Plan Your Day"
                className="w-full h-auto object-cover"
            />
            {/* Overlay trigger just for the button area */}
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[85%]">
                <PlanYourDayModal>
                    <button className="w-full h-12 rounded-xl opacity-0 cursor-pointer" aria-label="Start Planning" />
                </PlanYourDayModal>
            </div>
        </div>
    )
}
