import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  date: Date;
  title: string;
  href: string;
}
function Card({ date, title, href }: Props) {
  const displayDate = new Date(date).toLocaleString();

  return (
    <Link href={href} className={styles.card}>
      <h2 className={inter.className}>
        {title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{displayDate}</p>
    </Link>
  );
}

export default Card;
