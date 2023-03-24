import React from "react";
import { Launch } from "../types";
import styles from "@/styles/LaunchDetails.module.css";

interface Props {
  launchData: Launch;
}
const LaunchDetails = ({ launchData }: Props) => {
  return (
    <>
      <h1 className={styles.header}>{launchData.name}</h1>
      <div className={styles.container}>
        <div className={styles.video}>
          <iframe
            width="860"
            height="640"
            src={`https://www.youtube.com/embed/${launchData.links.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Fairings</th>
              <td>{launchData.fairings ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Links</th>
              <td>
                <a href={launchData.links.webcast}>Webcast</a>
              </td>
            </tr>
            <tr>
              <th>Crew</th>
              <td>
                <ul>
                  {launchData.crew.map((member) => (
                    <li
                      key={member.crew}
                    >{`${member.role}: ${member.crew}`}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Ships</th>
              <td>
                {launchData.ships.length > 0
                  ? launchData.ships.join(", ")
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <th>Capsules</th>
              <td>
                {launchData.capsules.length > 0
                  ? launchData.capsules.join(", ")
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <th>Payloads</th>
              <td>
                {launchData.payloads.length > 0
                  ? launchData.payloads.join(", ")
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{new Date(launchData.date_utc).toLocaleString()}</td>
            </tr>
            <tr>
              <th>Flight Number</th>
              <td>{launchData.flight_number}</td>
            </tr>
            {launchData.success && (
              <tr>
                <th>Success</th>
                <td>{"Yes"}</td>
              </tr>
            )}
            {launchData.success === false && (
              <tr>
                <th>Success</th>
                <td>{"No"}</td>
              </tr>
            )}
            {!launchData.success && (
              <tr>
                <th>Success</th>
                <td>{"N/A"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LaunchDetails;
