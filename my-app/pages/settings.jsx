import Navbar from "@/components/navbar";
import Head from "next/head";
export default function Settings(){
    return(
    <>
        <Head>
            <title>My Lists</title>
        </Head>
        <p className="text-lg text-red-500">Settings</p>

        <Navbar/>
        </>
    );
}