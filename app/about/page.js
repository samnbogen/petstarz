import Navbar from '/app/navbar.js';
import Footer from '/app/footer.js';

export default function About() {
    return (
        <main>
            <Navbar />
            <div className="z-10 max-w-5xl w-full h-screen items-center justify-between text-sm lg:flex pt-36">
                <h1 
                    className="text-3xl text-center"
                    style={{ fontFamily: 'Pacifico' }}>
                        This is the about page.
                </h1>
            </div>
            <Footer />
        </main>
    );
}