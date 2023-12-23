import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";

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
      {children}
      <Footer />
    </>
  );
}
