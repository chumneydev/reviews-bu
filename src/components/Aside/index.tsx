import Link from "next/link"

const Aside = ( {  } ) => {

    const dealershipMenu = [
        { title: "Create Dealership", link: "/admin/create-dealer" },
        { title: "Create Social Account", link: "/admin/create-social" },
    ]








    return (
        <aside className="relative bg-clay-400 h-full max-h-screen py-8 px-4">
            <section className="mb-4">
                <h6 className="mb-4 uppercase w-full leading-tight text-sm font-bold">Management</h6>
                <ul className="text-sm">
                    {dealershipMenu.map((item, index) => (
                        <li key={index} className="mt-4 w-full leading-tight flex flex-row"><Link href={item.link}><a>{item.title}</a></Link></li>
                    ))}
                </ul>
            </section>  
        </aside>

    )
}

export default Aside