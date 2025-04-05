import React from "react";
import styles from "@/styles/order.module.css";
import Image from "next/image";

function Status() {
  return (
    <div>
      <div className={styles["status"]}>
        <Image src="/allstatus.png" width={24} height={24} alt="z" />
        <select>
          <option>All Status</option>
          <option>All Status1</option>
        </select>
      </div>
    </div>
  );
}

export default Status;
