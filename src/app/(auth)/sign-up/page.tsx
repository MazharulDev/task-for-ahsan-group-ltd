import { Metadata } from "next";
import SignUp from "@/components/auth/SignUp";

export const metadata: Metadata = {
  title: "Movie-world|signup",
};

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
