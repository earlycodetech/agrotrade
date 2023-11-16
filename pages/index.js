import Head from "next/head";
import { JobOpening } from "@/components/JobOpening";
import { InfoBox } from "@/components/InfoBox";
import { TallyCounter } from "@/components/Hooks";

export default function Index () {
  return (
    <>
      <Head>
        <title>Agro Trade</title>
      </Head>
      <main>
        <TallyCounter/>

        <InfoBox>
          <ul>
            <li>watermelon</li>
            <li>orange</li>
            <li>gauva</li>
          </ul>
        </InfoBox>

        <JobOpening 
        title='Next JS Hybrid Work' 
        location='Nairobi'/>

        <JobOpening 
        title='React Developer' 
        location='Enugu'/>
      </main>
    </>
  )
}