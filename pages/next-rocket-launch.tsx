import LaunchDetails from "@/src/components/LaunchDetails";
import Loading from "@/src/components/Loading";
import { useNextLaunch } from "@/src/hooks/useAPI";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function NextRocketLaunch() {
  const { data, isLoading, error } = useNextLaunch();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1 aria-label="title">Next Rocket Launch</h1>
      <LaunchDetails launchData={data} />
    </>
  );
}
