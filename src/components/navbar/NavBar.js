import { useEffect } from "react"
import './navbar.scss'
export default function NavBar() {
    const scrollTop = (e) => {
        e.preventDefault()

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleClick = (e) => {
        e.preventDefault()
        let top = document.getElementById(e.currentTarget.dataset.href).offsetTop - window.innerHeight / 15
        window.scrollTo({ top: top, behavior: 'smooth' })

    }
    useEffect(() => {
        let mainNavLinks = document.querySelectorAll("a.navbar");
        let nav = document.getElementById("nav");
        let canvas = document.getElementById("canvas2");

        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            if (
                canvas.offsetTop <= fromTop &&
                canvas.offsetTop + canvas.offsetHeight > fromTop
            ) {
                nav.classList.remove("show");
            }
            else {
                nav.classList.add("show");
            }
            mainNavLinks.forEach(link => {

                let section = document.querySelector(link.hash);
                if (
                    section.offsetTop - 100 <= fromTop &&
                    section.offsetTop + section.offsetHeight - 100 > fromTop
                ) {
                    link.classList.add("current");
                } else {
                    link.classList.remove("current");

                }
            });

        });

    }, [])
    return (
        <>

            <nav id="nav">
                <ul>
                    <li><button onClick={scrollTop}><a href="#top">Home</a></button></li>
                    <li><button onClick={handleClick} data-href="about-me"><a className="navbar" href="#about-me">About</a></button></li>
                    <li><button onClick={handleClick} data-href="projects"><a className="navbar" href="#projects">Projects</a></button></li>
                    <li><button onClick={handleClick} data-href="contact"><a className="navbar" href="#contact">Contact</a></button></li>
                </ul>
            </nav>
        </>
    )

}