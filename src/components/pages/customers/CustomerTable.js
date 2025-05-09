import React from "react";
import styles from "@/styles/customers.module.css";
import CustomerData from "./CustomerData";
import Image from "next/image";
export default function CustomerTable() {
  return (
    <>
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["tr"]}>
            <th className={styles["th"]}>
              <div>
                <p>Customer ID</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <Image src="/Vector1.png" width={10} height={5} alt="z" />
                  <Image src="/Vector2.png" width={10} height={5} alt="z" />
                </div>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Join Date</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <Image src="/Vector1.png" width={10} height={5} alt="z" />
                  <Image src="/Vector2.png" width={10} height={5} alt="z" />
                </div>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Customer Name</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <Image src="/Vector1.png" width={10} height={5} alt="z" />
                  <Image src="/Vector2.png" width={10} height={5} alt="z" />
                </div>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Location</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <Image src="/Vector1.png" width={10} height={5} alt="z" />
                  <Image src="/Vector2.png" width={10} height={5} alt="z" />
                </div>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Total Spent</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <Image src="/Vector1.png" width={10} height={5} alt="z" />
                  <Image src="/Vector2.png" width={10} height={5} alt="z" />
                </div>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Last Order</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <Image src="/Vector1.png" width={10} height={5} alt="z" />
                  <Image src="/Vector2.png" width={10} height={5} alt="z" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableMap />
        </tbody>
      </table>
    </>
  );
}

function TableMap() {
  return (
    <>
      {CustomerData.map((item) => (
        <tr key={item.userId} className={styles["tr2"]}>
          <td className={styles["td"]}>#C-{item.userId}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td1"]}>${item.amount}</td>
          <td className={styles["td12"]}>${item.lastAmount}</td>
        </tr>
      ))}
    </>
  );
}
