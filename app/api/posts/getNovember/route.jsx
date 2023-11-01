import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";









export const GET = async () =>{

    try {
        const posts = await prisma.progress.findMany({
            where:{
                date:{
                    gte: new Date(
                        '2023-10-31T01:00:00.459+00:00'
                    )
                }
            }
        })

        posts.map((x) =>{
            x.date = x.date.toDateString();
        })
        return NextResponse.json(posts)
    }
    catch(err){
        return NextResponse.json({
            message:"POST Error",
            err
        },
        {status:500})
    }
}