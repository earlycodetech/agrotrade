import { useState } from "react";
import Head from "next/head";
import { TextField } from "@mui/material";
import { useFormik } from "formik";

export default function ContinueReg () {

    const {handleBlur,handleChange, handleSubmit,touched,errors} = useFormik({
        initialValues:{},
        onSubmit: () => {},
        validationSchema:null,
    });

    return (
        <>
        <Head>
            <title>Continue Registration | AgroTrade</title>
        </Head>
        <main className="h-screen flex justify-center items-center py-20 px-3 md:px-0">
            <div className="w-full md:w-[420px] flex flex-col gap-3 border border-gray-300 rounded-md p-3">
                <div className="flex flex-col gap-5 md:gap-3">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Provide more information</h2>
                        <p className="text-xs text-green-600">Your account registration will be complete after this step</p>
                    </div>

                    <form>
                        <div className="mb-2">
                            <TextField className="w-full" variant="outlined" label="first name"/>
                        </div>

                        <div className="mb-2">
                            <TextField className="w-full" variant="outlined" label="last name"/>
                        </div>

                        <div className="mb-2">
                            <TextField multiline={true} className="w-full" type="text" variant="outlined" label="address"/>
                        </div>

                        {/* {tab == 'farmer'
                        ? <div className="mb-2">
                            <TextField className="w-full" variant="outlined" label="company name"/>
                        </div> 
                        : null} */}

                        <button className="h-[48px] w-full flex justify-center items-center bg-green-700 text-white text-xl rounded-md">Continue</button>
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