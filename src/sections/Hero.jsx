import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/parallaxBackground'
import { Astronaut } from '../components/Astronaut'
import { Float, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import Loader from '../components/Loader'


const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 835})
  return (
    <section 
        className='flex item-start justify-center md:items-start md:justify-start overflow-hidden min-h-screen c-space' id='home'>
        <HeroText />
        <ParallaxBackground />
        <figure className='top-20 absolute inset-0' style={{width:"100vw", height: "100vh"}}>
            <Canvas camera={{position: [0, 1, 3]}}>
                <Suspense fallback={<Loader />}><Float><Astronaut scale={isMobile && 0.20} position={isMobile && [0, -1.5, 0]}/></Float></Suspense>
                {/* <OrbitControls /> */}
                <Rig /> 
            </Canvas>
        </figure>
    </section>
  )
}

function Rig(){
    useFrame((state, delta)=>{
        easing.damp3(state.camera.position, [state.mouse.x / 10, 1+state.mouse.y/10, 3], 0.5, delta)
    })
    return null
}

export default Hero