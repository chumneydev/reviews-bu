// NextJS defaults
import { GetStaticProps, GetStaticPaths, InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'

// React dependencies
import { useState } from 'react'

// Yup dependencies
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// React Hook Form dependencies
import { useForm } from 'react-hook-form'

// React Simple Star Rating dependencies
import { Rating } from 'react-simple-star-rating'

// React Icons dependencies
// TODO: Add icons based on social account type
import { FaStar, FaFacebook, FaTwitter } from 'react-icons/fa'

// Toast dependencies
import { ToastContainer, toast } from 'react-toastify'

// Components
import Header from '@/layouts/Header'
import ReviewCard from '@/components/Cards/ReviewCard'
import prisma from 'lib/prisma'
import SocialCard from '@/components/Cards/SocialCard'

// Custom types
type ReviewFormValues = {
    subject: string
    name: string
    phone: string
    review: string
    rating: number
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
        
        // Add rating to data
        const dataWithRating = {
            ...data,
            rating: rating
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataWithRating)
        };

        fetch('/api/reviews/create', requestOptions)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(() => reset())
            .then(() => successReviewMessage())
            .catch(err => console.log(err))
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
                        

    // Reviews Render
    const reviewsRender = () => {
        if (dealership.reviews.length == 0) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-2xl font-bold text-center text-gray-600">No reviews yet!</h1>
                    <p className="text-center text-gray-600">Be the first to leave a review.</p>
                </div>
            )
        } else {
            return (
                <>
                {dealership.reviews.map((review: any) => (
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
                    <div className="grid md:grid-cols-2 bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:py-24">
                        <div className=" flex flex-col justify-center p-8">
                            <h1 className="text-4xl font-bold pb-4">{dealership.name}</h1>
                            <p className="text-md">{dealership.message}</p>
                        </div>

                        <div className="flex flex-col p-8 items-center">
                            <div className="bg-slate-700 bg-opacity-70 p-6 rounded-3xl w-80 h-60 relative flex flex-col place-content-center place-items-center">
                                <p className="text-6xl">Map</p>
                            </div>
                        </div>

                    </div>
                </section>

                


               <section id="social">
                    <div className="flex flex-col md:flex-row gap-8 bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        {socialRender()}
                    </div>
                </section>

                 <section id="reviews" className="md:py-20">
                    <div className="bg-slate-400 max-w-7xl mx-auto flex flex-col py-4 px-4 sm:px-6 lg:px-8">

                        <h2 className="text-center font-bold text-5xl tracking-wide md:py-10">Here are what others are saying</h2>

                        <div id="review__body" className="grid md:grid-cols-2 gap-16 mt-8  md:pb-20">

                            {/* Reviews */}
                            {reviewsRender()}

                            {/* {dealership.reviews.map((review: any) => (
                                <ReviewCard stars={review.rating} author={review.name} date={review.createdAt} review={review.review} />
                            ))} */}
                            
                        </div>

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