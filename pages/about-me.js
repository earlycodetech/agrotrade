import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Nunito } from 'next/font/google';
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram,FaHtml5,FaCss3Alt,FaReact } from "react-icons/fa";
import { SiTailwindcss,SiFirebase } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const nunitoBold = Nunito({
  subsets:['latin'],
  weight:'900'
});
const nunito = Nunito({
  subsets:['latin'],
  weight:'200'
});

export default function AboutMe () {
    return (
        <>
        <Head>
            <link rel="alternate" href="http://agrotrade.com" hrefLang="en-us" />
            <link rel="icon" href="/AGROTRADE.png" />
            <meta name="description" content="I am part of a development team of AgroTrade, a farmers' web application" />
            <meta name="keywords" content="about me" />
            <title>About Me | Agro Trade</title>
        </Head>
        <main className="flex flex-col gap-12 px-6 sm:px-20 bg-black py-12 sm:py-16">
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                    <p className={`${nunito.className} text-2xl text-emerald-500`}>Hello, it's me</p>
                    <h1 className={`${nunitoBold.className} text-4xl sm:text-5xl md:text-5xl text-white`}>
                        Joseph Ogbu<span className={`${nunitoBold.className} text-6xl sm:text-8xl text-emerald-500`}>.</span>
                    </h1>
                    <p className={`${nunito.className} text-white`}>I am a software developer, with a special focus on the design and development of web applications. I have experiences that cut across Android and iOS mobile app development. I have a strong interest in the design and implementation of algorithms and have been implementing their practices on the multiple projects that I have contributed to. Among the projects that I have built and contributed to is the popular Agro Trade, a web application for trade agriculture produce in bulk quantities.</p>

                    <blockquote className="flex flex-row gap-3 sm:gap-4">
                        <Link 
                        href="mailto:joseph.ogbu@earlycode.net"
                        className={`${nunito.className} flex flex-row gap-4 items-center text-white border border-emerald-300 px-4 py-2`}>
                            <MdOutlineMail className="text-emerald-300"/> <span> Contact me</span>
                        </Link>
                        <Link 
                        href="https://www.instagram.com/ogbu.jo/"
                        className={`${nunito.className} flex flex-row gap-4 items-center text-white border border-emerald-300 px-4 py-2`}>
                            <FaInstagram className="text-emerald-300"/> <span> Connect with me</span>
                        </Link>
                    </blockquote>
                </div>

                <div>
                    <Image 
                    width={400} 
                    height={400} 
                    src="/team/joseph_ogbu.jpg" 
                    alt="Joseph Ogbu"
                    className="rounded-md"/>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className={`${nunito.className} text-white text-3xl`}>My skills and expertise</h3>
                <ul className="flex flex-row flex-wrap gap-6">
                    <li className={`${nunito.className} flex flex-row gap-4 items-center text-2xl text-white border border-gray-700 p-4 rounded-md`}>
                        <FaHtml5/> <span>HTML</span>
                    </li>
                    <li className={`${nunito.className} flex flex-row gap-4 items-center text-2xl text-white border border-gray-700 p-4 rounded-md`}>
                        <FaCss3Alt/> <span>CSS</span>
                    </li>
                    <li className={`${nunito.className} flex flex-row gap-4 items-center text-2xl text-white border border-gray-700 p-4 rounded-md`}>
                        <SiTailwindcss/> <span>Tailwind CSS</span>
                    </li>
                    <li className={`${nunito.className} flex flex-row gap-4 items-center text-2xl text-white border border-gray-700 p-4 rounded-md`}>
                        <TbBrandJavascript/> <span>JavScript</span>
                    </li>
                    <li className={`${nunito.className} flex flex-row gap-4 items-center text-2xl text-white border border-gray-700 p-4 rounded-md`}>
                        <FaReact/> <span>React</span>
                    </li>
                    <li className={`${nunito.className} flex flex-row gap-4 items-center text-2xl text-white border border-gray-700 p-4 rounded-md`}>
                        <SiFirebase/> <span>Google Firebase</span>
                    </li>
                </ul>
            </div>
        </main>
        </>
    )
}