import AuthProvider from "../auth-provider";
import LogIn from "../login/login";

export default function Page() {
    return (
        <AuthProvider>
            <LogIn />
        </AuthProvider>
    );
}