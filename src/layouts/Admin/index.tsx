import Aside from "@/components/Aside";

type AdminLayoutProps = {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className="">
            
            <section>
                <div className="grid grid-cols-admin">
                    <Aside />
                    <main className="bg-clay p-8  px-8 h-screen">
                        {children}
                    </main>
                </div>
            </section>
        </div>
    )
}

export default AdminLayout