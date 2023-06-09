import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import db from "../../polybase/config.jsx";
import Link from "next/link";
import { useState } from "react";
import { list } from "postcss";
import { useRouter } from "next/router";

export default function Home() {
  // Methods

  // getting the url query
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Head>
        <title>HomeChain - Broker Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen bg-primary">
        <div className="mb-5">
          <h1 className="text-white text-2xl font-extrabold mb-5">
            HomeChain Property {router.query.id}
          </h1>
        </div>

        <div className="flex flex-row">Property Details</div>
      </main>
    </div>
  );
}
