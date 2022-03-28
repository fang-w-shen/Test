import Button from '@mui/material/Button';
import { useEffect } from 'react';
import MovingStars from '../utils/MovingStars'
import Constellation from '../utils/Constellation'
import ShiningStars from '../utils/ShiningStars'

export default function Landing() {
    const handleClick = () => {
        const profile = document.getElementById('profile')
        profile.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
        window.location = '/skills'
    }

    useEffect(() => {
        MovingStars()
        Constellation()
        ShiningStars()
    }, [])

    return (
        <div className="landing" id="landing">
            <div className="heading">
                <h1>FANG W. SHEN</h1>
                <h2>Software Developer - Technology Enthusiast - Biomedical Engineer</h2>
                <Button variant="outlined" onClick={handleClick}>See More</Button>
            </div>
            <canvas id="canvas2" style={{ zIndex: 1 }}></canvas>
            <canvas id="canvas3" ></canvas>
            <canvas id="canvas4" ></canvas>

        </div>

    )
}