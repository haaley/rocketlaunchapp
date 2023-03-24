import LaunchDetails from "@/src/components/LaunchDetails";
import Loading from "@/src/components/Loading";
import { useLatestLaunch } from "@/src/hooks/useAPI";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LatestRocketLaunch() {
  const { data, isLoading, error } = useLatestLaunch();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
    <h1 aria-label="title">Latest Rocket Launch</h1>
      <LaunchDetails launchData={data} />
    </>
  );
}
