import RangeSlider from "@/components/RangeSlider"
import Tabs from "@/components/Tabs"
import { ClassValue } from "clsx"
import { useState } from "react"


type TabsProps = {
    className?: ClassValue,
    tabsArray: string[],
    activeTab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const TabsArray = [
    "Box Count",
    "Box Color",
]

export const ArtControls = ({ boxCount, setBoxCount }: {
    boxCount: number, setBoxCount: React.Dispatch<React.SetStateAction<number>>
}) => {

    const [activeTab, setActiveTab] = useState<string>("Box Count")


    return (
        <>
            <div className="rounded-base w-full">
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabsArray={TabsArray}
                />
                <div className="max-w-full h-full rounded-b-base border-2 border-border dark:border-darkBorder bg-white dark:bg-darkBg p-5 font-base">
                    {activeTab === 'Box Count' && (
                        <div className="flex flex-col items-center gap-5">
                            <RangeSlider rangeValue={boxCount} setRangeValue={setBoxCount} min={1} max={30} />
                            {boxCount}
                        </div>
                    )}
                    {activeTab === 'Box Color' && (
                        <div>
                            <h3>Box Color - coming soon!</h3>

                            <p className="mt-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    )}

                </div>
            </div>


        </>
    )

}