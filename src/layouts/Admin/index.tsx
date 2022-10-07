import Aside from "@/components/Aside";

type AdminLayoutProps = {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className="bg-slate-900">
            
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