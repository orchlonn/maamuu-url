import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="./app-ads.txt">
        <a>Home</a>
      </Link>
    </div>
  );
}
