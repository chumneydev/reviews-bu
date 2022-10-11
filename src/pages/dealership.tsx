import { NextPage } from "next"

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

import { FaFacebook, FaTwitter, FaMap, FaMapMarkerAlt } from 'react-icons/fa'

import { Rating } from 'react-simple-star-rating'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


type DealershipProps = {
    props: any
}


type ReviewFormValues = {
    subject: string
    name: string
    phone: string
    review: string
    rating: number
}


import { useForm } from "react-hook-form"

import ReviewCard from "@/components/Cards/ReviewCard"
import { useState } from "react";


const Dealership = ( {  }: DealershipProps ) => {

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
        // rating: yup
        //     .number()
        //     .required("Rating is required"),

    })


    const successReviewMessage = () => toast.success("Review submitted successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    })


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<ReviewFormValues>({
        resolver: yupResolver(schema)
    });


    // ? Handle star rating
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);

        console.log('Rating', rate);
    }



    

    const onSubmit = (data: any) => {
        const botTrack = document.getElementById("bot__track")

        // if (botTrack.checked === true) {
        //     return console.log("bot detected")
        // }
        const dataWithRating = {
            ...data,
            rating: rating
        }
        const requestOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataWithRating)
        }

        // ! Uncomment this to send data to the server
        // fetch("/api/reviews/create", requestOption)
        // // fetch("/api/dummy", requestOption)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .then(() => reset())
        //     .then(() => successReviewMessage())
        //     .catch(err => console.log(err))






        // console.log(data)
    }




    return (
        <div className="bg-dev-green ">

            <header className="bg-red-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <h1>Logo</h1>
            </header>
            
            
            <section id="icon">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-green-100">
                    <div className="relative bg-teal-300 inline-block">
                        <FaMapMarkerAlt className="text-8xl text-red-300 absolute z-10 left-7 bottom-20" />
                        <FaMap className=" text-9xl text-green-700" />
                    </div>
                </div>
            </section>




            <main className="">


                <section id="welcome">
                    <div className="grid md:grid-cols-2 bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:py-24">
                        <div className=" flex flex-col justify-center p-8">
                            <h1 className="text-4xl font-bold pb-4">ABC Motors</h1>
                            <p className="text-md">Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        </div>

                        <div className="flex flex-col p-8 items-center">
                            <div className="bg-slate-700 bg-opacity-70 p-6 rounded-3xl w-80 h-60 relative flex flex-col place-content-center place-items-center">
                                <p className="text-6xl">Map</p>
                                {/* Absolute positioned elements */}
                                {/* <div className="bg-yellow-400 w-4/5 p-4 absolute -bottom-5 md:-left-32 flex flex-row justify-center"><p>Thumbsup</p></div>
                                <div className="bg-yellow-400 w-4/5 p-4 absolute -top-3 md:-right-32 flex flex-row justify-center"><p>Star Star Star Star Star</p></div> */}
                            </div>
                        </div>

                    </div>
                </section>

             

                <section id="comments">
                    <div className="bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

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
                                <input type="checkbox" id="bot__track" name="bot__track" />
                                <label htmlFor="bot__track">I agree to the terms and conditions</label>
                            </div>

                            <div className="flex flex-col w-full py-4">
                                <button type="submit" className="p-4 bg-slate-700 text-white">Submit</button>
                            </div>

                        </form>
                    </div>
                </section>

                <section id="social">
                    <div className="flex flex-col md:flex-row gap-8 bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        
                        <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8 ">
                            <div className="text-8xl pb-4 text-center">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    <FaFacebook />
                                </a>
                            </div>
                            <div className="text-3xl tracking-wider text-center">Leave Us A Review</div>
                        </div>
                      
                        <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8">
                            <div className="text-8xl pb-4 text-center">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className="text-3xl tracking-wider text-center">Leave Us A Review</div>
                        </div>
                      

                    </div>
                </section>

                <section id="reviews" className="md:py-20">
                    <div className="bg-slate-400 max-w-7xl mx-auto flex flex-col py-4 px-4 sm:px-6 lg:px-8">

                        <h2 className="text-center font-bold text-5xl tracking-wide md:py-10">Here are what others are saying</h2>

                        <div id="review__body" className="grid md:grid-cols-2 gap-16 mt-8  md:pb-20">

                                <ReviewCard stars={5} author={"Ullamcorper Elit"} date={"2022-09-29T16:12:24.085Z"} review={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."} />
                                <ReviewCard stars={2} author={"Ullamcorper Elit"} date={"2022-09-29T16:12:24.085Z"}  review={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."} />
                                <ReviewCard stars={1} author={"Ullamcorper Elit"} date={"2022-09-29T16:12:24.085Z"}  review={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."} />
                                <ReviewCard stars={4} author={"Ullamcorper Elit"} date={"2022-09-29T16:12:24.085Z"}  review={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."} />

                        </div>

                    </div>
                </section>






            </main>
            
            
            <footer className="bg-red-400 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p>&copy; 2022 Leave Your Reviews | A Chumney &amp; Associates Product</p>
            </footer>
            
            
            
            {/* Adds toast container to app */}
            <ToastContainer />

        </div>





    )

}

export default Dealership