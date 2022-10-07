import Link from "next/link"

const Aside = ( {  } ) => {

    const dealershipMenu = [
        { title: "Create Dealership", link: "/admin/create-dealer" },
        { title: "Create Social Account", link: "/admin/create-social" },
    ]








    return (
        <aside className="relative bg-slate-700/50 h-full max-h-screen py-8 px-4 text-slate-200">
            <section className="mb-4">
                <h6 className="mb-4 uppercase text-md w-full tracking-wider font-bold">Management</h6>
                <ul className="text-sm">
                    {dealershipMenu.map((item, index) => (
                        <li key={index} className="mt-4 w-full tracking-wider flex flex-row"><Link href={item.link}><a>{item.title}</a></Link></li>
                    ))}
                </ul>
            </section> 

            <section className="bg-slate-900 rounded-md p-8 mt-32 mb-4 text-center tracking-wider border-t-2 border-slate-500">
                <p>Under Construction</p>
            </section>


        </aside>

    )
}

export default Aside