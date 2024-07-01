
import { createRoot } from "react-dom/client";
import { Box3HelperProps, Canvas, MeshProps, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from 'react'
import { Color, Mesh } from "three";


export const Box = (props: MeshProps) => {
    const meshRef = useRef<Mesh>(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            (meshRef.current.rotation.x += delta)
        }
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>

    )
}

type ArtParamsState = {
    boxColor: Color


}

// Art controls number of boxes

const ArtControls = ({ boxColor }) => {



    return (
        <div>



        </div>
    )

}


export const ArtInterpreter = () => {
    // takes in art parameters
    // renders image

    const [boxCount, setBoxCount] = useState<number>(6)




    return (
        <Canvas>

            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

            {Array.from({ length: boxCount }).map((_, idx) => {
                let boxX = 0;
                if (idx % 2 == 0) {
                    boxX = -idx - 0.5;

                }
                else {
                    boxX = idx + 0.5;
                }
                return (<Box position={[boxX, 0, 0]} />)

            })}

            {/* <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} /> */}
        </Canvas>

    )




}