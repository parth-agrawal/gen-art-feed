
import { createRoot } from "react-dom/client";
import { Box3HelperProps, Canvas, MeshProps, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from 'react'
import { Mesh } from "three";


type ArtParams = {
    // art parameters

    backgroundColor: string;


}

export const Box = (props: any) => {
    const meshRef = useRef<Mesh>()
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

export const ArtInterpreter = () => {
    // takes in art parameters
    // renders image




}