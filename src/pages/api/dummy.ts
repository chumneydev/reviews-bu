// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


import { NextApiHandler } from "next"


type CreateReviewProps = {
    subject: string
    name: string
    review: string
    rating: number
    dealership?: string
    dealershipId: string
}

const dummyAPI: NextApiHandler = async (req, res) => {

    try {

        const { subject, name, review, rating, dealershipId } = req.body as CreateReviewProps


        res.status(200).json(subject)

    }


    catch (error: any) {

        res.status(500).json({ error: error.message })


    }
    
}