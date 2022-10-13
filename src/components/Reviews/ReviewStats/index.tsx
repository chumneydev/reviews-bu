
type StatTypes = {
    data: any
}

const ReviewStats = ({ data }: StatTypes) => {
    const totalReviews = data.length
    const totalStars = data.reduce((acc: any, review: any) => acc + review.rating, 0)

    const averageRating = totalStars / totalReviews

    return (
        <div className="flex flex-row justify-around p-4  max-w-4xl mx-auto bg-white rounded-lg my-8">

            <div className="flex flex-col justify-center items-center p-4 bg-slate-200 rounded-lg">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <p className="text-5xl font-bold ml-2">{totalReviews}</p>
            </div>

            <div className="flex flex-col justify-center items-center p-4 bg-slate-200 rounded-lg">
                <h2 className="text-2xl font-bold">Average Rating</h2>
                <p className="text-5xl font-bold ml-2">{averageRating.toFixed(1)}</p>


            </div>



        </div>
    )

}

export default ReviewStats
