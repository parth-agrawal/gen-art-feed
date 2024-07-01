export const ArtControls = ({ boxCount, setBoxCount }: {
    boxCount: number, setBoxCount: React.Dispatch<React.SetStateAction<number>>
}) => {


    return (
        <div>
            <button onClick={() => setBoxCount(boxCount + 1)}> boxCount: {boxCount} </button>

        </div>
    )

}