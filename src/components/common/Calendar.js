import React from "react";
import styles from "@/styles/order.module.css";
import Image from "next/image";

function Calendar() {
  return (
    <div>
      <div className={styles["status"]}>
        <Image src="/greencalendar.png" alt="z" width={18} height={19} />
        <select>
          <option>Today</option>
          <option>Today1</option>
        </select>
      </div>
    </div>
  );
}

export default Calendar;
