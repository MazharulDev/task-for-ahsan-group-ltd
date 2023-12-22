import type { Metadata } from "next";
import Navbar from "@/components/Home/Navbar";

export const metadata: Metadata = {
  title: "Movie World",
  description: "New movie news will be seen",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
