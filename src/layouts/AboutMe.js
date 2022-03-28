import { Grid } from '@mui/material'
import Pic from '../../assets/profile.svg'
export default function AboutMe() {

    return (
        <>

            <section id="about-me">
                <h1>About Me</h1>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <button className='profile' id="profile">
                        <Pic />
                    </button>
                </Grid>
            </section>


        </>


    )
}