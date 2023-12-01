//planner
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar'

export default function Planner(){
    return(
        <>
            <Head>
                <title>My Lists</title>
            </Head>
            <p className="text-lg text-red-500">Hello world</p>

            <Navbar/>
        </>
    )
}