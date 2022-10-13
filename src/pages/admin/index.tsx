// Import NextAuth dependencies
import { signIn, signOut, useSession } from "next-auth/react"


import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"



const AdminHome = () => {
    
    const { data: session } = useSession()

    if(!session) {
        return (
            <div className="bg-red-400 flex flex-col">
                <h1>Admin</h1>
                <p>You need to be signed in to view this page.</p>
                <a
                    href="/api/auth/signin"
                    onClick={(e) => {
                        e.preventDefault()
                        signIn()
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    You must be signed in to view this page
                </a>
            </div>
        )
    }

    return (
        <>
        <Header />
        <div className="bg-green-400">
            <h1>Welcome!</h1>
            {/* <p>You are signed in as {session.user.email} and can now access all of our site's content.</p> */}
        </div>
        <Footer />
        </>
    )
}



export default AdminHome
