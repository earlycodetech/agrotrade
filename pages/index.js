import Head from "next/head";
import { Nunito } from 'next/font/google';

const nunitoBold = Nunito({
  subsets:['latin'],
  weight:'700'
});
const nunito = Nunito({
  subsets:['latin'],
  weight:'700'
});

export default function Index () {
  return (
    <>
      <Head>
        <title>Agro Trade</title>
      </Head>
      <main className="bg-home w-full h-screen flex flex-col justify-end">
        {/* bottom content */}
        <div className="flex flex-col justify-end gap-6 h-[40%] p-3 pb-12" style={{ background: 'linear-gradient(to bottom, rgba(0, 128, 0, 0), rgba(0, 128, 0, 1)' }}>
          <div className={styles.block}>
          <h1 className={`${nunitoBold.className} text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}>
            <span className="text-white">Agro</span>
            <span className="text-lime-300">Trade</span>
          </h1>

          <p className="text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white">Your easy and reliable online marketplace to trade farm produce</p>
          </div>

          <blockquote className={styles.block}>
            <button className={`${styles.btn} bg-lime-500`}>Login</button>
            <button className={`${styles.btn} bg-white`}>Register</button>
          </blockquote>
        </div>
      </main>
    </>
  )
}

const styles = {
  block:`flex flex-col items-center gap-3`,
  btn: 'w-full h-[48px] flex justify-center items-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold rounded-xl',
}