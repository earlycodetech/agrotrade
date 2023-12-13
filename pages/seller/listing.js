import { useState,useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { SellerSideTabs } from "@/components/sellerSideTabs";
import { db } from "@/config/firebase.config";
import { getDocs,collection,orderBy,query } from "firebase/firestore";
import ActivityIndicator from "@/utilities/activityIndicator";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Listing() {
    const [showActivityIndicator,setShowActivityIndicator] = useState(false);
    const [products,setProducts] = useState([]);

    const getDBProducts = async () => {
        setShowActivityIndicator(true);

        const docsRef = query(collection(db,'products'),orderBy('timeCreated','desc'));
        const onSnap = await getDocs(docsRef);
        setProducts(onSnap.docs.map(doc => {
            return {
                id:doc.id,
                data:{
                    ...doc.data()
                }
            }
        }));

        setShowActivityIndicator(false);
    }

    useEffect(() => {
        //calling the function within a useEffect prevents it from repeated executions
        getDBProducts();
    },[]);

    return (
        <>
        <Head>
            <link rel="icon" href="/AGROTRADE.png" />
            <title>My Listing | AgroTrade</title>
        </Head>
        <main className="h-auto lg:h-screen py-12 px-3 md:px-16">
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <article className="col-span-3 flex flex-col gap-4 border border-gray-300 rounded-md p-3">
                    { showActivityIndicator ? <ActivityIndicator/> : null }
                    <h3 className="text-2xl text-green-800">My harvest listing</h3>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product name</TableCell>
                                    <TableCell>Price/KG</TableCell>
                                    <TableCell>Availability</TableCell>
                                    <TableCell>Listing date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {products.map((doc) => (
                                <TableRow key={doc.id}>
                                    <TableCell>
                                        <blockquote className="flex flex-row gap-2 items-center">
                                            <Image width={52} height={52} src={doc.data.imageUrl} alt="product"/>
                                            <span>{doc.data.title}</span>
                                        </blockquote>
                                    </TableCell>
                                    <TableCell>NGN{doc.data.price}</TableCell>
                                    <TableCell>{doc.data.availability}</TableCell>
                                    <TableCell>{new Date(doc.data.timeCreated).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </article>

                <SellerSideTabs/>
            </section>
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