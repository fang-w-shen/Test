export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-bottom">
            <div className="container items-center mx-auto ">
                <div className="bg-gray-800 text-center text-white wow zoomIn">
                    <p>Copyright &copy; {currentYear}</p>
                    <div className="footer_copyright">
                        Designed by <a href="https://github.com/fang-w-shen/">FWS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}