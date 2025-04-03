import React from "react";
import PageTitle from "@/components/common/PageTitle";
<<<<<<< HEAD
import CustomerTable from "./CustomerTable";
import styles from "@/styles/order.module.css";
import CustomerFilter from "./CustomerFilter";
=======
>>>>>>> 522634ea754e13c9075cea3decce01946c4054c8

export default function CustomersList() {
  return (
<<<<<<< HEAD
    <>
      <div className={styles["orderDiv"]}>
        <PageTitle
          title="General Customer"
          subtitle="Here is your general customers list data"
        />
        <div className={styles["calendar"]}>
          <CustomerFilter />
        </div>
      </div>
      <div className={"tableData"}>
        <CustomerTable />
      </div>
      {/* <PageTitle
        title="General Customer"
        subtitle="Here is your general customers list data"
      />
      <CustomerTable /> */}
    </>
  );
}
=======
    <div>
      <PageTitle
        title="General Customer"
        subtitle="Here is your general customers list data"
      />
      <h1>hello</h1>
    </div>
  );
}

export default CustomersList;
>>>>>>> 522634ea754e13c9075cea3decce01946c4054c8
