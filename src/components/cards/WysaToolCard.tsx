import { Card } from "@/components/ui/card"

export interface WysaToolCardProps {
    title: string
    subtitle: string
    duration: string
    imageSrc: string
}

export function WysaToolCard({ title, subtitle, duration, imageSrc }: WysaToolCardProps) {
    return (
        <Card className="group flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow aspect-square">
            {/* Upper part: Image */}
            <div className="relative flex-[1.6] w-full overflow-hidden bg-[#F3F4F6]">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover scale-110"
                />
                {/* Duration pill */}
                <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#111827] shadow-sm border border-black/10">
                        {duration}
                    </span>
                </div>
            </div>

            {/* Lower part: Dark text section */}
            <div className="bg-[#4B4C4E] p-4 flex flex-col justify-center gap-1 flex-1">
                <h3 className="text-base font-bold text-white leading-tight line-clamp-1">
                    {title}
                </h3>
                <p className="text-[13px] text-white/70 line-clamp-1">
                    {subtitle}
                </p>
            </div>
        </Card>
    )
}
