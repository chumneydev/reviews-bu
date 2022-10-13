// NextJS defaults
import { GetStaticProps, GetStaticPaths, InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'

// React dependencies
import { useEffect, useState } from 'react'

// Yup dependencies
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// React Hook Form dependencies
import { useForm } from 'react-hook-form'

// React Simple Star Rating dependencies
import { Rating } from 'react-simple-star-rating'

// React Icons dependencies
// ? Are social icons needed to be imported in this view?

// Toast dependencies
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

// Components
import prisma from 'lib/prisma'
import Header from '@/layouts/Header'
import ReviewCard from '@/components/Cards/ReviewCard'
import SocialCard from '@/components/Cards/SocialCard'
import ReviewGrid from '@/components/Grids/ReviewGrid'
import ReviewStats from '@/components/Reviews/ReviewStats'
import SocialGrid from '@/components/Grids/SocialGrid'


// Custom types
type ReviewFormValues = {
    subject: string
    name: string
    phone: string
    review: string
    rating: number
    dealershipId: string
    boter: boolean
}

// Server side props
export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { url } = context.query

    const dealership = await prisma.dealership.findUnique({
        where: {
            url: url
        },
        include: {
            socialAccounts: true,
            reviews: true
        }
    })

    return {
        props: {
            dealership: JSON.parse(JSON.stringify(dealership))
        }
    }
}



const Dealer = ({ dealership }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    
    // Status Messages
    const successReviewMessage = () => toast.success("Review submitted successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    })

    const errorReviewMessage = () => toast.error("There was an error submitting your review. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    })

    // Star Rating
    const [rating, setRating] = useState(0);

    // useEffect(() => {
    //     console.log(rating)
    // }, [rating])


    const handleRating = (rate: number) => {
        setRating(rate);
    }



    // Yup schema
    const schema = yup.object().shape({
        subject: yup
            .string()
            .required("Subject is required"),
        name: yup
            .string()
            .required("Full name is required"),
        phone: yup
            .string()
            .required("Phone is required"),
        review: yup
            .string()
            .required("Review is required"),
    });

    // React Hook Form
    const { register, handleSubmit, watch, reset, formState: {errors} } = useForm<ReviewFormValues>({
        resolver: yupResolver(schema)
    });




    // Submit review
    const onSubmit = (data: any) => {
        
        // Add specific data to review
        // dealershipId => dealership.id
        // rating => rating
        const reviewData = {
            ...data,
            dealershipId: dealership.id,
            rating: rating

        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        };

        fetch('/api/reviews/create', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    errorReviewMessage()
                } else {
                    successReviewMessage()
                    reset()
                }
            }
        );


    }


    // Check if the form is being submitted by a bot
    // Watch for changes in the boter field
    // If the value is true, disable the submit button
    let disableSubmit = false;
    const botWatcher = watch('boter', false);
    
    if (botWatcher == true) {
        disableSubmit = true
    }




    // Social Card
    const socialRender = () => {
        if (dealership.socialAccounts.length == 0) {
            return (
                <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8">
                    <h1 className="text-2xl font-bold text-center text-gray-600">No social accounts!</h1>
                </div>
            )
        } else {
            return (
                <>
                    {dealership.socialAccounts.map((social: any) => (
                        <SocialCard key={social.id} icon={social.name} name={social.name} url={social.url} />
                    ))}
                </> 
            )
        }
    }
                        

 
    // Assign reviews to a variable
    // Tally up the total number of reviews
    // Get average rating for current dealer
    const reviews = dealership.reviews


    // const reviewColumnLeft = totalReviews % 2 == 0 ? totalReviews / 2 : (totalReviews + 1) / 2;
    // const reviewColumnRight = totalReviews % 2 == 0 ? totalReviews / 2 : (totalReviews - 1) / 2;
    
    // const reviewsLeft = reviews.slice(0, reviewColumnLeft)
    // const reviewsRight = reviews.slice(reviewColumnLeft, totalReviews)


    // Assign social accounts to a variable
    const socialAccounts = dealership.socialAccounts



    // Reviews Render
    const useReviews = (reviews: any) => {
        if (reviews.length == 0) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-2xl font-bold text-center text-gray-600">No reviews yet!</h1>
                    <p className="text-center text-gray-600">Be the first to leave a review.</p>
                </div>
            )
        } else {
            return (
                <>
                {reviews.map((review: any) => (
                    <ReviewCard stars={review.rating} author={review.name} date={review.createdAt} review={review.review} key={review.id} />
                ))}
                </>
            )
        }
    }

    return (
        <div>
            <Head>
                <title>{dealership.name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {/* Main */}
            <main>

                <section id="welcome">
                    <div className="grid md:grid-cols-2 bg-lime-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:py-24">
                        <div className=" flex flex-col justify-center p-8 bg-lime-400">
                            <h1 className="text-4xl font-bold pb-4">{dealership.name}</h1>
                            <p className="text-md">{dealership.message}</p>
                        </div>

                        <div className="flex flex-col p-8 items-center bg-teal-400">
                            <div className="bg-slate-700 bg-opacity-70 p-6 rounded-3xl w-80 h-60 relative flex flex-col place-content-center place-items-center">
                                <p className="text-6xl">Map</p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="comments">
                    <div className=" bg-clay-500 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

                        <h2 className="text-4xl text-center font-bold pb-6 l">Would you mind sharing your expierience with us?</h2>


                        <form onSubmit={handleSubmit(onSubmit)} className="">

                            <div className="flex flex-col">

                                <div className="w-full flex justify-center py-4">
                                    <Rating
                                        onClick={handleRating}
                                        size={80}
                                        transition
                                        allowFraction={false}
                                        className=""
                                        // className="flex justify-between w-full bg-yellow-50"
                                    />
                                </div>

                                <div className="flex flex-col w-full py-4">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        {...register("subject")}
                                    />
                                    {errors.subject && <span className="text-burnt-500 text-sm italic py-2">{errors.subject?.message}</span>}
                                </div>
                                <div className="flex flex-col w-full py-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        {...register("name")}
                                    />
                                    {errors.name && <span className="text-burnt-500 text-sm italic py-2">{errors.name?.message}</span>}
                                </div>
                                <div className="flex flex-col w-full py-4">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        {...register("phone")}
                                    />
                                    {errors.phone && <span className="text-burnt-500 text-sm italic py-2">{errors.phone?.message}</span>}
                                </div>
                                <div className="flex flex-col w-full py-4">
                                    <textarea
                                        placeholder="Review"
                                        rows={10}
                                        {...register("review")}
                                    ></textarea>
                                    {errors.review && <span className="text-burnt-500 text-sm italic py-2">{errors.review?.message}</span>}
                                </div>
                            </div>

                            <div className="">
                                    <input type="checkbox" {...register("boter")} />
                            </div>

                            <div className="flex flex-col w-full py-4">
                                <button
                                    type="submit"
                                    className={
                                        disableSubmit
                                        ? "p-4 bg-red-700 text-white"
                                        : "p-4 bg-slate-700 text-white transition-all duration-200 hover:bg-slate-900 pointer"
                                    }
                                    disabled={disableSubmit}>Submit</button>
                            </div>

                        </form>
                    </div>
                </section>



               <section id="social">

                    {/* @ts-ignore */}
                    <SocialGrid data={socialAccounts} />

                </section>

                 <section id="reviews" className="">
                    <div className=" bg-violet-500 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

                        {/* <h2 className="text-center font-bold text-5xl tracking-wide ">Here are what others are saying</h2> */}

                        {/* @ts-ignore */}
                        <ReviewStats data={reviews} />            

                        <ReviewGrid data={reviews} />

                    </div>
                </section>


            </main>
            {/* /Main */}



            {/* Toast container */}
            <ToastContainer />
        </div>
    )
}

export default Dealer