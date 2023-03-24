import Card from "@/src/components/Card";
import Loading from "@/src/components/Loading";
import { useLatestLaunch, useNextLaunch } from "@/src/hooks/useAPI";
import styles from "@/styles/Home.module.css";
import Head from "next/head";


export default function Home() {
  const {
    data: nextLaunchData,
    error: nextLaunchError,
    isLoading: nextLaunchLoading,
  } = useNextLaunch();

  const {
    data: latestLaunchData,
    error: latestLaunchError,
    isLoading: latestLaunchLoading,
  } = useLatestLaunch();

  return (
    <>
      <Head>
        <title>Rocket Launch App</title>
        <meta
          name="description"
          content="Displays information about SpaceX rocket launches"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          {!nextLaunchLoading || !latestLaunchLoading ? (
            !nextLaunchError || !latestLaunchError ? (
              <div className={styles.grid}>
                <Card
                  title="Latest launch"
                  date={nextLaunchData?.date_local}
                  href="/latest-rocket-launch"
                />
                <Card
                  title="Next launch"
                  date={nextLaunchData?.date_local}
                  href="/next-rocket-launch"
                />
              </div>
            ) : (
              <div>
                <h1>{"Something went wrong ;("}</h1>
              </div>
            )
          ) : (
            <Loading />
          )}
        </div>
      </main>
    </>
  );
}
