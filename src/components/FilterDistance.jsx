import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,
} from "@/components/ui/drawer"
export default function FilterDistance({setOpen,setDistance,distance}) {
  const [goal, setGoal] = React.useState(distance)
  const buttonRef = React.useRef();
  React.useEffect(() => {
    // Auto-click the button on initial render
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  },[setOpen,setDistance]);
  function onClick(adjustment) {
    setGoal(prev=> prev+adjustment)
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button ref={buttonRef} variant="outline" className="hidden">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Set Distance</DrawerTitle>
            <DrawerDescription>Set the radius from you location.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-5)}
                disabled={goal <= 5}
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Distane in Kilometers
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(5)}
                disabled={goal >= 100}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={()=>{
                setDistance(goal);
                buttonRef.current.click()
                setOpen(false);
            }}>Submit</Button>
            <DrawerClose asChild>
              <Button onClick={()=>{
                buttonRef.current.click()
                setOpen(false);
              }} variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
