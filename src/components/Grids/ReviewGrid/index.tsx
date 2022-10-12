import ReviewCard from "@/components/Cards/ReviewCard";

type ReviewGridTypes = {
    data: any
}

const ReviewGrid = ({ data }: ReviewGridTypes) => {
    
    const totalReviews = data.length

    const columnLeft = data.slice(0, Math.ceil(totalReviews / 2))
    const columnRight = data.slice(Math.ceil(totalReviews / 2), totalReviews)

    if (totalReviews === 0) {
        return (
            <div className="tracking-wider text-center">
                <h1 className="text-4xl pb-4">No Reviews Yet</h1>
                <p className="text-2xl">Be the first to leave a review!</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-8">
                {columnLeft.map((review: any) => (
                    <li key={review.id}>
                        <ReviewCard
                            author={review.name}
                            date={review.date}
                            stars={review.rating}
                            review={review.review}
                        />
                    </li>
                ))}
            </ul>
            <ul className="space-y-8">
                {columnRight.map((review: any) => (
                    <li key={review.id}>
                        <ReviewCard
                            author={review.name}
                            date={review.date}
                            stars={review.rating}
                            review={review.review}
                        />
                    </li>
                ))}
            </ul>
        </div>

    )


}

export default ReviewGrid
