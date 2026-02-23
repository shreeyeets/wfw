import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function TalkToWysaSection() {
    return (
        <div className="relative">
            <Input
                placeholder="Talk to Wysa"
                className="h-14 w-full rounded-full border-2 border-black bg-white pl-6 pr-14 text-base shadow-sm focus-visible:ring-0"
            />
            <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:bg-transparent"
            >
                <Send className="h-6 w-6" />
            </Button>
        </div>
    )
}
