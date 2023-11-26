import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerAuthSession();

  if (!session || !session.user) redirect("/auth-callback?origin=dashboard");

  // const subscriptionPlan = await getUserSubscriptionPlan()

  return <h1>Helo World</h1>;
};

export default Page;
