import { redirect } from "next/navigation";
import getLoggedUser from "../_actions/getLoggedUser";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await getLoggedUser();
  if (user) redirect("/");
  // console.log({ "Logged-user": user });

  return (
    <>
      <div className="h-screen grid place-items-center">{children}</div>
    </>
  );
}
