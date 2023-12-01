//planner
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import DateNavbar from '@/components/dateNavbar'
import PlannerGroup from '@/components/plannerGroups'

export default function Planner(){
    return(
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                    rel="stylesheet"
                ></link>
                <title className="font-dm">Daily Planner</title>
            </Head>
            <div className="mt-4 ml-6 font-dm text-[30px] font-bold flex items-center">
                <p className="">Daily Planner</p>
                <DateNavbar/>
            </div>
            <div className="mt-4 pb-16">
                <PlannerGroup time="5 AM"> </PlannerGroup>
                <PlannerGroup time="6 AM"> </PlannerGroup>
                <PlannerGroup time="7 AM"> </PlannerGroup>
                <PlannerGroup time="8 AM"> </PlannerGroup>
                <PlannerGroup time="9 AM"> </PlannerGroup>
                <PlannerGroup time="10 AM"> </PlannerGroup>
                <PlannerGroup time="11 AM"> </PlannerGroup>
                <PlannerGroup time="12 PM"> </PlannerGroup>
                <PlannerGroup time="1 PM"> </PlannerGroup>
                <PlannerGroup time="2 PM"> </PlannerGroup>
                <PlannerGroup time="3 PM"> </PlannerGroup>
                <PlannerGroup time="4 PM"> </PlannerGroup>
                <PlannerGroup time="5 PM"> </PlannerGroup>
                <PlannerGroup time="6 PM"> </PlannerGroup>
                <PlannerGroup time="7 PM"> </PlannerGroup>
                <PlannerGroup time="8 PM"> </PlannerGroup>
                <PlannerGroup time="9 PM"> </PlannerGroup>
                <PlannerGroup time="10 PM"> </PlannerGroup>
                <PlannerGroup time="11 PM"> </PlannerGroup>
                <PlannerGroup time="12 AM"> </PlannerGroup>
                <PlannerGroup time="1 AM"> </PlannerGroup>
                <PlannerGroup time="2 AM"> </PlannerGroup>
                <PlannerGroup time="3 AM"> </PlannerGroup>
                <PlannerGroup time="4 AM"> </PlannerGroup>
            </div>

            <Navbar/>
        </>
    )
}