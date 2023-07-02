import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismaDb from '../../../lib/prismaDb';













export async function POST(req: Request) {
    try {
        const { userId } = auth()
        // if no iuser
        if (!userId) {
            return new NextResponse(
                "you must be logged in to do that", { status: 401 }
            )
        }


        const body = await req.json()
        const { name } = body
        // if no name
        if (!name) {
            return new NextResponse(
                "you must provide a name", { status: 400 }
            )
        }

        const store = await prismaDb.store.create({
            data: {
                name,
                userId
            }
        })

        // return store

        return NextResponse.json({
            message: `store created name:${store}`,
            store

        })
            
        



    } catch (e) {
        console.log("from store post", e);
        return new NextResponse(
            "something went wrong", { status: 500 }
        )
    }

}