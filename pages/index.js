import Head from "next/head";

export default function Index () {
  return (
    <>
      <Head>
        <title>Agro Trade</title>
      </Head>
      <main className="bg-home w-full">
        {/* bottom content */}
        <div>
          <div>
            <h1>
              <span>Agro</span>
              <span>Trade</span>
            </h1>
            <p>Your easy and reliable online marketplace to trade farm produce</p>
          </div>

          <blockquote>
            <button>Login</button>
            <button>Register</button>
          </blockquote>
        </div>
      </main>
    </>
  )
}