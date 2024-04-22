import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex bg-bg-start min-h-screen flex-col items-center p-[1rem]">
      <Header/>
      <h1>
        привет!
      </h1>
    </main>
  );
}
