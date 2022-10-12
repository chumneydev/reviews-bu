import SocialCard from '@/components/Cards/SocialCard'

type SocialGridTypes = {
    data: any
}

const SocialGrid = ({ data }: SocialGridTypes) => {

    const accounts = data
    const totalAccounts = accounts.length

    if (totalAccounts === 0) {
        return (
            <div className="tracking-wider text-center">
                <h1 className="text-4xl pb-4">We are sorry.</h1>
                <p className="text-2xl">This dealer does not have any social accounts set up.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col md:flex-row gap-8 bg-teal-500 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            {accounts.map((account: any) => (
                <SocialCard
                    key={account.id}
                    icon={account.icon}
                    name={account.name}
                    url={account.url}
                />
            ))}
        </div>
    )        


}

export default SocialGrid;