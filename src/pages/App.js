import AboutMe from '../layouts/AboutMe'
import Content from '../layouts/Content'
import Landing from '../layouts/Landing'
import NavBar from '../components/navbar/NavBar';

import Skills from '../layouts/Skills'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../layouts/Footer'

const App = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" >
                    <div>hi</div>
                    {/* <Landing />
                    <NavBar />

                    <AboutMe />
                    <Skills />

                    <Content />
                    <section id="projects">
                        <h1>Section 3</h1>
                        <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
                    </section>
                    <section id="contact">
                        <h1>Section 5</h1>
                        <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
                    </section>
                    <Footer /> */}
                </Route>

            </Switch>

        </BrowserRouter>

    )


}



export default App