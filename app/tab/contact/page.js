import Header from '/app/components/header.js';

export default function About() {
    return (
        <main>
            <Header text="Contact"/>
            <div className="z-10 max-w-5xl w-full h-screen items-center justify-between text-sm lg:flex pt-36">
                <h1 
                    className="text-3xl text-center"
                    style={{ fontFamily: 'Pacifico' }}>
                        This is the contact page.
                </h1>
            </div>
        </main>
    );
}