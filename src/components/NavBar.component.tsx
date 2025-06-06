import { getAuth } from "firebase/auth";

export default function NavBarComponent() {

    const auth = getAuth();


    const signOut = async () => {
        await auth.signOut();
        localStorage.setItem("userAuthState", "false");
        window.location.reload();
    }
    return (
        <nav className="navbar bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
                    Speech Reader
                </a>
                <div className="flex gap-4">
                    <button className="btn btn-ghost text-white">About</button>
                    <button onClick={signOut} className="btn btn-ghost text-white">Sign Out</button>
                </div>
            </div>
        </nav>
    )
}
