// React Icons dependencies
import { FaStar, FaFacebook, FaTwitter, FaGoogle, FaYelp } from 'react-icons/fa'

type SocialCardTypes = {
    icon: JSX.Element
    name: string
    url: string
}


const SocialCard = ({ icon, name, url }: SocialCardTypes) => {
    

    const socialIcon = () => {
        switch (name) {
            case 'Facebook':
                return <FaFacebook />
            case 'Twitter':
                return <FaTwitter />
            case 'Google':
                return <FaGoogle />
            case 'Yelp':
                return <FaYelp />
            default:
                return <FaStar />
        }
    }




    return (
           
        <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8">
            <div className="text-8xl pb-4 text-center">
                <a href={url}>
                    <span className="absolute inset-0"></span>
                    {socialIcon()}
                </a>
            </div>
            <div className="text-3xl tracking-wider text-center">Leave Us A Review</div>
        </div>

    )
}

export default SocialCard