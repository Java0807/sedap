import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import CustomerFilter from "@/components/pages/customers/CustomerFilter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Dashboard() {
  const router = useRouter();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: router.asPath === "/" ? "block" : "none" }}>
        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Dashboard</h1>
            <p style={{ color: "gray", marginTop: "11px" }}>
              Hi, Samantha. Welcome back to Sedap Admin!
            </p>
          </div>
          <div>
            <CustomerFilter />
          </div>
        </div>
        <div>
          <Image
            style={{ margin: "20px" }}
            src="/card_total_order.svg"
            width={337}
            height={172}
            alt="z"
          />
          <Image
            style={{ margin: "20px" }}
            src="/card_total_order.svg"
            width={337}
            height={172}
            alt="z"
          />
          <Image
            style={{ margin: "20px" }}
            src="/card_total_order.svg"
            width={337}
            height={172}
            alt="z"
          />
          <Image
            style={{ margin: "20px" }}
            src="/card_total_order.svg"
            width={337}
            height={172}
            alt="z"
          />
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image src="/pieChart.svg" width={718} height={327} alt="z" />
          <Image src="/card_chart_order.svg" width={714} height={327} alt="z" />
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/card_total_revenue.svg"
            width={972}
            height={430}
            alt="z"
          />
          <Image
            src="/card_customer_map.svg"
            width={456}
            height={430}
            alt="z"
          />
        </div>
      </div>
    </>
  );
}

Dashboard.getLayout = (pageProps) => (
  <MainLayout>
    <Dashboard {...pageProps} />
  </MainLayout>
);
