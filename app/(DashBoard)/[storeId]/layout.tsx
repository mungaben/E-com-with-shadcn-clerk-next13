import prismaDb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";




import { redirect } from "next/navigation";



export default async function DashBoardLayout({children,params}:{children:React.ReactNode,params:{storeId:string}}) {


    const{userId}=auth()
    if(!userId){
        redirect("/sign-in")
    }
    const store =await prismaDb.store.findFirst({
        where:{
            id:params.storeId,
            userId:userId
        }
    })
    if(!store){
        redirect("/")
    }



    return (
        <div>
            {children}
        </div>
    )
}