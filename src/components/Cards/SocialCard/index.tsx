// React Icons dependencies
import { FaStar, FaFacebook, FaTwitter } from 'react-icons/fa'

type SocialCardTypes = {
    icon: JSX.Element
    title: string
    url: string
}


const SocialCard = ({ icon, title, url }: SocialCardTypes) => {
    
   const icons = {
        facebook: <FaFacebook />,
        twitter: <FaTwitter />,
        star: <FaStar />
    }



    return (

        <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8 ">
            <div className="text-8xl pb-4 text-center">
                <a href={url}>
                    <span className="absolute inset-0"></span>
                    {icons[icon]}
                </a>
            </div>
            <div className="text-3xl tracking-wider text-center">
                {title}
            </div>
        </div>
    

    )
}

export default SocialCard