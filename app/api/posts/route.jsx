
import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) =>{
    try{
        const body = await request.json()
        const {protein,fat,sugar,weight,totalCalories,CaloriesBurned} = body;

        const newPost = await prisma.progress.create({
            data:{
                protein,
                fat,
                sugar,
                weight,
                totalCalories,
                CaloriesBurned
            }

        })

        return NextResponse.json(newPost)
    }
    catch(err){
        return NextResponse.json({
            message:"POST Error",
            err
        },
        {status:500})
    }
}


export const GET = async () =>{

    try {
        const posts = await prisma.progress.findMany({
            orderBy:{
                date:'desc'
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