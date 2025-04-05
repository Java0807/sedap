import React from "react";
import styles from "@/styles/order.module.css";
import Image from "next/image";

function CustomerFilter() {
  return (
    <div>
      <div className={styles["status"]}>
        <Image src="/allstatus.png" width={24} height={24} alt="z" />
        <select>
          <option>Filter</option>
          <option>Name</option>
          <option>ID</option>
        </select>
      </div>
    </div>
  );
}

export default CustomerFilter;
