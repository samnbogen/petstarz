import Navbar from '/app/components/navbar.js';
import Footer from '/app/components/footer.js';
import Header from '/app/components/header.js';

export default function About() {
    return (
        <main>
            <Navbar />
            <Header text="Login"/>
            <div className="z-10 max-w-5xl w-full h-screen items-center justify-between text-sm lg:flex pt-36">
                <h1 
                    className="text-3xl text-center"
                    style={{ fontFamily: 'Pacifico' }}>
                        This is the login page.
                </h1>
            </div>
            <Footer />
        </main>
    );
}