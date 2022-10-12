import { FaStar } from 'react-icons/fa';


type ReviewCardProps = {
    stars: number;
    author: string;
    review: string;
    date?: string | undefined;
}



const ReviewCard = ({ stars, author, review, date }: ReviewCardProps) => {

    // ? Disabling the following type check for now as it is not crucial to the example
    // @ts-ignore
    const starRating = ( {stars }) => {
        
        const starArray = [];
        for (let i = 0; i < stars; i++) {
            starArray.push(<div className="px-2" key={i}>
                <FaStar className="text-white" />
            </div>);
        }
        return starArray;
    
    
    }


    // TODO: Add date to the review card
    const currentMYSQLDate = "2022-09-29T16:12:24.085Z";
    const currentDate = new Date(currentMYSQLDate);
    
    // ? Uncomment the following line to see the date in the console
    // console.log(currentDate);

    const convertDate = ( date: string | undefined ) => {
        //@ts-ignore
        const newDate = new Date(date);
        return newDate.toLocaleDateString();
    }






    return (
        // <div className="review-card">
        //     <div className="review-card__stars">
        //         {starRating({stars})}
        //     </div>
        //     <div className="review-card__author">
        //         {author}
        //     </div>
        //     <div className="review-card__review">
        //         {review}
        //     </div>
        // </div>

        <figure className="relative flex flex-col-reverse bg-white rounded-lg p-6">
            <blockquote className="mt-6">
                {review}
            </blockquote>
            <figcaption className="flex items-center space-x-4">
                <div className="flex-auto">
                    <p className="font-bold">{author}</p>
                </div>
                <div className="flex justify-between bg-yellow-500 rounded-md p-2">
                    {starRating({stars})}
                </div>
            </figcaption>

        </figure>





    // <div className="bg-white rounded-md p-4 hover:shadow-md transition-shadow duration-300 ease-in-out">
    //         <div className="flex flex-row justify-between items-center pb-4">
    //             <div className="flex flex-col tracking-wide">
    //                 <p className="font-bold">{author}</p>
    //                 <p className="text-xs italic pt-2">{convertDate(date)}</p>
                
    //                 <span className="text-3"></span>
    //             </div>
    //             <div className="bg-slate-300 p-2 rounded-md flex justify-between">{starRating({stars})}</div>
    //         </div>
    //         <div className="flex flex-col tracking-wide pt-4">{review}</div>
    //     </div>





        // <div className="bg-white rounded-md p-4 hover:shadow-md">
        //     <div className="bg-green-300 flex flex-row justify-between">
        //         <div className="flex flex-col tracking-wide">{author}</div>
        //         <div className="bg-blue-300 flex flex-col">{starRating(stars)}</div>
        //     </div>
        //     <div className="flex flex-col tracking-wide pt-4">{review}</div>
        // </div>    

    )
}


export default ReviewCard