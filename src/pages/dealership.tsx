import { NextPage } from "next"

type DealershipProps = {
    props: any
}

import { useForm } from "react-hook-form"

import ReviewCard from "@/components/Reviews/ReviewCard"


const Dealership = ( {  }: DealershipProps ) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data: any) => {
        console.log(data)
    }


    return (
        <div className="bg-dev-green ">

            <header className="bg-red-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <h1>Logo</h1>
            </header>
            
            
            <main className="">


                <section id="welcome">
                    <div className="grid md:grid-cols-2 bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:py-24">
                        <div className=" flex flex-col justify-center p-8 bg-red-100">
                            <h1 className="text-4xl font-bold pb-4">ABC Motors</h1>
                            <p className="text-md">We're excited to know that you were pleased with your visit to Summerville Ford! If you could spare a few minutes, would you mind leaving a few details about your experience?</p>
                        </div>

                        <div className="flex flex-col p-8 items-center bg-red-500">
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


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col">
                                <div className="flex flex-col w-full p-4">
                                    <input type="text" className="p-2 rounded-md" placeholder="Subject" {...register("subject", { required: true })} />
                                    {errors.subject && <span>This field is required</span>}
                                </div>
                                <div className="flex flex-col w-full p-4">
                                    <input type="text" className="p-2 rounded-md" placeholder="Full Name" {...register("fullName", { required: true })} />
                                    {errors.fullName && <span>This field is required</span>}
                                </div>
                                <div className="flex flex-col w-full p-4">
                                    <input type="text" className="p-2 rounded-md" placeholder="Phone Number" {...register("phone", { required: true })} />
                                    {errors.phone && <span>This field is required</span>}
                                </div>
                                <div className="flex flex-col w-full p-4">
                                    <textarea className="p-2 rounded-md" placeholder="Message" rows={10} {...register("message", { required: true })}></textarea>
                                    {errors.message && <span>This field is required</span>}
                                </div>
                            </div>

                            <div className="flex flex-col w-full p-4">
                                <button type="submit" className="p-2 rounded-md bg-slate-700 text-white">Submit</button>
                            </div>

                        </form>
                    </div>
                </section>

                <section id="social">
                    <div className="flex flex-col md:flex-row gap-8 bg-slate-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        
                        <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8 ">
                            <div className="text-7xl pb-4 text-center">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    FaceBook
                                </a>
                            </div>
                            <div className="text-3xl tracking-wider text-center">Leave Us A Review</div>
                        </div>
                      
                        <div className="relative bg-green-300 flex flex-col flex-auto items-center p-8">
                            <div className="text-7xl pb-4 text-center">
                                <a href="#">
                                    <span className="absolute inset-0"></span>
                                    FaceBook
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

        </div>





    )

}

export default Dealership