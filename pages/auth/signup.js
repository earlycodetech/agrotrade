import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { TextField } from "@mui/material";

export default function Signup () {
    const [tab,setTab] = useState('buyer');

    return (
        <>
        <Head>
            <title>Signup | AgroTrade</title>
        </Head>
        <main className="h-screen flex justify-center items-center py-20 px-3 md:px-0">
            <div className="w-full md:w-[420px] flex flex-col gap-3 border border-gray-300 rounded-md p-3">
                <Image 
                width={400} 
                height={120} 
                className="rounded-t-md"
                src='/farm-trade.jpg' alt="farm trade"/>

                <div className="flex flex-col gap-5 md:gap-3">
                    <ul className="grid grid-cols-2">
                        <li 
                        className={`text-center font-bold pb-3 cursor-pointer ${tab == 'farmer' ? styles.tabColor : null}`}
                        onClick={() => setTab('farmer')}>Farmer</li>
                        <li 
                        className={`text-center font-bold pb-3 cursor-pointer ${tab == 'buyer' ? styles.tabColor : null}`}
                        onClick={() => setTab('buyer')}>Buyer</li>
                    </ul>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">{`Register a ${tab} account`}</h2>
                        <p className="text-xs text-green-600">{`Fill the form below to create a ${tab}'s account`}</p>
                    </div>

                    <form>
                        <div className="mb-2">
                            <TextField className="w-full" variant="outlined" label="first name"/>
                        </div>

                        <div className="mb-2">
                            <TextField className="w-full" variant="outlined" label="last name"/>
                        </div>

                        <div className="mb-2">
                            <TextField className="w-full" type="email" variant="outlined" label="email"/>
                        </div>

                        {tab == 'farmer'
                        ? <div className="mb-2">
                            <TextField className="w-full" variant="outlined" label="company name"/>
                        </div> 
                        : null}

                        <button className="h-[48px] w-full flex justify-center items-center bg-green-700 text-white text-xl rounded-md">Register</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

const styles = {
    tabColor:'border-b-4 border-green-600'
}