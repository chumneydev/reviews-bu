import Aside from "@/components/Aside";
import Head from "next/head";

type AdminLayoutProps = {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className="bg-slate-900">
            <Head>
                <title>Leave Your Reviews</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <div className="grid grid-cols-admin">
                    <Aside />
                    <main className="bg-slate-900 p-8  px-8 h-screen text-slate-700/50">
                        {children}
                    </main>
                </div>
            </section>
        </div>
    )
}

export default AdminLayout