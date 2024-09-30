import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ButtonLoading() {
  return (
    <Button disabled className="min-w-[150px] justify-between">
      <span>Please wait</span>
      <Loader2 className="h-4 w-4 animate-spin" />
    </Button>
  )
}