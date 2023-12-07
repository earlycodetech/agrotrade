import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SellerDasboard() {
    return (
        <>
        <Head>
            <link rel="icon" href="/AGROTRADE.png" />
            <title>Seller Dashboard | AgroTrade</title>
        </Head>
        <main className="h-screen lg:h-auto flex justify-center items-center py-20 px-3 md:px-0">
            <h1>Seller Dashboard</h1>
        </main>
        </>
    )
}

export async function getServerSideProps (context) {
    const session = await getServerSession(context.req,context.res,authOptions);
    if (session) {
        if (session.user_data?.accountType != 'seller') {
            return {redirect:{destination:'/',permanent:false}}
        } 
    } else {
        return {redirect:{destination:'/auth/signup',permanent:false}}
    }
    
    return {
        props:{
            session
        }
    }
}