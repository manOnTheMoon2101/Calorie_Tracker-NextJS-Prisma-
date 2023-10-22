import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";


export const GET = async (requests, {params}) =>{
 
    try {
        const {id} = params;

        const post = await prisma.progress.findUnique({
            where:{
                id:id
            }
        })

        if (!post){
            return NextResponse.json({
                message:"Post not Found",
                err
            },
            {status:404})
        }

        return NextResponse.json(post)
        
    }
    catch(err){
        return NextResponse.json({
            message:"POST Error",
            err
        },
        {status:500})
    }
}

export const PATCH = async (request,{params}) =>{
    try{
        const body = await request.json()
        const {protein,fat,sugar,weight,totalCalories,CaloriesBurned} = body;

        const {id} = params;
        const updatePost = await prisma.progress.update({
             where:{
                id:id
             },
            data:{
                protein,
                fat,
                sugar,
                weight,
                totalCalories,
                CaloriesBurned
            }

        })
        if (!updatePost){
            return NextResponse.json({
                message:"Update not Found",
                err
            },
            {status:404})
        }

        return NextResponse.json(updatePost)
    }
    catch(err){
        return NextResponse.json({
            message:"POST Error",
            err
        },
        {status:500})
    }
}



export const DELETE = async (requests, {params}) =>{
 
    try {
        const {id} = params;

        await prisma.progress.delete({
            where:{
                id:id
            }
        })

     

        return NextResponse.json("Post Deleted")
        
    }
    catch(err){
        return NextResponse.json({
            message:"DELETE Error",
            err
        },
        {status:500})
    }
}