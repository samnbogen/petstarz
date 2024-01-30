import Navbar from '/app/navbar.js';

export default function About() {
    return (
        <main>
            <Navbar />
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex pt-36">
                <h1 
                    className="text-3xl text-center text-white hover:text-light-gray"
                    style={{ fontFamily: 'Pacifico' }}>
                        This is the about page.
                </h1>
            </div>
        </main>
    );
}