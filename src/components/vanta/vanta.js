import React, { useState, useEffect, useRef } from 'react'
import DOTS from "vanta/dist/vanta.fog.min";
import * as THREE from 'three'

const Vanta = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(DOTS({
                el: myRef.current,
                THREE: THREE
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);
    return <div ref={myRef} className="vanta">
        Foreground content goes here
    </div>
};

export default Vanta