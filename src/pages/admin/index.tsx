import { NextPageWithLayout } from "../_app"

import AdminLayout from "@/layouts/Admin"

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";



const AdminHome: NextPageWithLayout = () => {
    return (
        <>
        <section>
            <div className="flex justify-center gap-32  align-center">
                
                <div className="bg-white flex flex-col items-center justify-center font-bold w-1/4 py-4">
                    <p className="text-8xl">44</p>
                    <p className="text-3xl">Accounts</p>
                </div>

                <div className="bg-white flex flex-col items-center font-bold w-1/4 py-4 px-8">
                    <p className="bg-slate-400 text-white py-2 px-8 text-1xl tracking-wider rounded-md">Recently Added</p>
                    <ul className="mt-4 tracking-wider text-1xl ">
                        <li>ABC Motors</li>
                        <li>Date</li>
                    </ul>
                </div>


            </div>
        </section>

        <section className="mt-16">
                <div className="bg-white flex flex-col py-8 px-4"></div>

        </section>
   
        </>

    )
}

AdminHome.getLayout = (page) => (
    <AdminLayout>
        {page}
    </AdminLayout>
)

export default AdminHome
