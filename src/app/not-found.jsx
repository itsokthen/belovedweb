import React from "react";
import PageLayout from "./components/PageLayout";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      {" "}
      <PageLayout
        title="Oops nothing here!"
        content={
          <>
            <Link href="/">
              <p className="text-primary">Click Here to Return Home</p>
            </Link>
          </>
        }
      />
    </>
  );
};

export default NotFound;
