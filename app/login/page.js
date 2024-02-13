import AuthProvider from "../auth-provider";
import LogIn from "../login/login";
import Navbar from '/app/components/navbar.js';
import Footer from '/app/components/footer.js';
import Header from '/app/components/header.js';

export default function Page() {
    return (
        <AuthProvider>
            <Navbar />
            <LogIn />
            <Footer />
        </AuthProvider>
    );
}

