import { NextPage } from "next"

type DealershipProps = {
    props: any
}


const Dealership = ( {  } ) => {
    return (
        <div className="bg-dev-green ">

            <header className="bg-red-400 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <h1>Dealership</h1>
            </header>
            
            <main className="bg-slate-400 max-w-7xl mx-auto my-8 ">


                <section className="grid grid-cols-2 md:tracking-wide items-center py-14">

                    <div className="text-center p-8">
                        <h1 className="text-2xl font-bold pb-4">We Value and Appreciate Your Feedback!</h1>
                        <p>We're excited to know that you were pleased with your visit to Summerville Ford! If you could spare a few minutes, would you mind leaving a few details about your experience. You can click either of the profiles below to leave a review. Feedback lets us and future customers know what we're doing right. Feel free to tell us who helped you while you were here and what they did to make you feel like you were our number-one priority. We'll make sure the appropriate team members get the recognition they deserve! Thanks again for choosing Summerville Ford, and we look forward to reading your review.</p>
                    </div>

                    <div className="flex flex-col p-8 items-center">
                        <div className="bg-slate-700 bg-opacity-70 p-6 rounded-3xl w-80 h-60 relative flex flex-col place-content-center place-items-center">
                            <p className="text-6xl">Map</p>

                            <div className="bg-yellow-400 w-4/5 p-4 absolute -bottom-5 -left-32 flex flex-row justify-center"><p>Thumbsup</p></div>
                            <div className="bg-yellow-400 w-4/5 p-4 absolute -top-3 -right-32 flex flex-row justify-center"><p>Star Star Star Star Star</p></div>
                        </div>
                    </div>

                </section>

           

                <section className="bg-slate-700">
                    <form className="bg-red-300 flex flex-col">
                        <input type={"text"} placeholder={"Name"} className="py-4 px-4 my-4"/>
                        <input type={"text"} placeholder={"Name"} className="py-4 px-4 my-4"/>
                        <input type={"text"} placeholder={"Name"} className="py-4 px-4 my-4"/>
                        <input type={"text"} placeholder={"Name"} className="py-4 px-4 my-4"/>

                        <button className="bg-slate-700 text-white py-4 px-4 my-4">Submit</button>
                    </form>
                </section>

                <section className="bg-slate-700">
                    <p>Social</p>
                </section>

                <section className="bg-slate-700">
                    <p>Reviews</p>
                </section>



            </main>
            
            
            <footer className="bg-red-400 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p>&copy; 2022 Leave Your Reviews | A Chumney &amp; Associates Product</p>
            </footer>

        </div>





    )

}

export default Dealership