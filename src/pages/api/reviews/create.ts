import prisma from "lib/prisma";
import { NextApiHandler } from "next";

type CreateReviewProps = {
    subject: string
    name: string
    review: string
    rating: number
    dealership?: string
    dealershipId: string
}


const createReview: NextApiHandler = async (req, res) => {

    try {
        const { subject, name, review, rating, dealershipId } = req.body as CreateReviewProps

        const newReview = await prisma.review.create({
            data: {
                subject,
                name,
                review,
                rating,
                dealershipId: 'cl949zf1p0000aspzz4r2ln6p'
            }
        })

    res.status(200).json(newReview)

    // res.json(result)

    }

    catch (error: any) {
        res.status(500).json({ error: error.message });
    }

    finally {
        await prisma.$disconnect();
    }




}


export default createReview;