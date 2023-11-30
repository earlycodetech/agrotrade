import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Nunito } from 'next/font/google';
import { FaInstagram,FaGithub } from "react-icons/fa";

const nunitoBold = Nunito({
  subsets:['latin'],
  weight:'900'
});
const nunito = Nunito({
  subsets:['latin'],
  weight:'200'
});

export default function AboutUs () {
    return (
        <>
        <Head>
            <link rel="alternate" href="http://agrotrade.com" hrefLang="en-us" />
            <link rel="icon" href="/AGROTRADE.png" />
            <meta name="description" content="I am part of a development team of AgroTrade, a farmers' web application" />
            <meta name="keywords" content="about me" />
            <title>Development Team | Agro Trade</title>
        </Head>
        <main className="flex flex-col gap-12 px-6 sm:px-20 bg-black py-12 sm:py-16">
            <h1 className={`${nunito.className} text-4xl text-white text-center`}>About us</h1>
            <p className={`${nunito.className} text-lg text-white text-center`}>We are a team of React and NextJS developers. On this web application, we implemented an existing UI mock-up. The mock-up was designed by <Link href="https://twitter.com/earlycodetech" className="text-lime-500">early code</Link>, lead by Paul Adeka. We creatively designed the rest of the UI/UX and implemented them accordingly. The Agro Trade web application uses form validation, authentication and authorizations. The app is connected to a database on Google Cloud. All the practices used in the development of this web application are from modern and up-to-date tools and versions; some of the the tools and practices include the use of pre-rendered pages, Auth authentication, password-less login, NoSQL database, etc.</p>
            <p className={`${nunito.className} text-lg text-white text-center`}>Feel free to checkout our codes for this app on our <Link href="https://github.com/earlycodetech/agrotrade" className="text-lime-500">GitHub repository</Link></p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <li className="flex flex-col gap-2 items-center">
                    <Image width={200} height={200} src="/team/placeholder.jpg" className="rounded-full"/>
                    <p className={`${nunito.className} text-2xl text-white text-center`}>Developer Developer</p>
                    <blockquote className="flex flex-row items-center gap-3">
                        <Link href="#"><FaInstagram className="text-2xl text-yellow-500"/></Link>
                        <Link href="#" className="flex flex-row gap-1  items-center text-sky-500">
                        <FaGithub className=" text-sky-500"/>GitHub profile</Link>
                    </blockquote>
                </li>

                <li className="flex flex-col gap-2 items-center">
                    <Image width={200} height={200} src="/team/joseph_ogbu.jpg" className="rounded-full"/>
                    <p className={`${nunito.className} text-2xl text-white text-center`}>Joseph Ogbu</p>
                    <blockquote className="flex flex-row items-center gap-3">
                        <Link href="https://www.instagram.com/ogbu.jo"><FaInstagram className="text-2xl text-yellow-500"/></Link>
                        <Link href="https://github.com/fallyfox" className="flex flex-row gap-1  items-center text-sky-500">
                        <FaGithub className=" text-sky-500"/>GitHub profile</Link>
                    </blockquote>
                </li>
            </ul>
        </main>
        </>
    )
}