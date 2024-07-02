export const ArtControls = ({ boxCount, setBoxCount }: {
    boxCount: number, setBoxCount: React.Dispatch<React.SetStateAction<number>>
}) => {


    return (
        <div>
            <button className="border border-black rounded p-2" onClick={() => setBoxCount(boxCount + 1)}> Add a box. Boxes: {boxCount} </button>

        </div>
    )

}