import React from "react";
import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout
      title="Welcome to the Clubhouse: A Place for Healing"
      content={
        <>
          <p className="">
            When we lose a beloved pet, the grief can be overwhelming, but often
            we lack the support and understanding that comes with losing a
            person. At the Clubhouse, we&apos;ve created a space where you can{" "}
            <span className="font-bold text-primary">
              share your experience with others who understand.
            </span>{" "}
            Whether you want to have a drink and cry, or simply relax,
            you&apos;ll be surrounded by people who speak the same
            &quot;language&quot; of loss. It&apos;s more than a bar —{" "}
            <span className="font-bold text-primary">
              It&apos;s a community
            </span>{" "}
            offering tools, resources, and a warm environment to help you heal.{" "}
            <span className="font-bold text-primary">Come check us out!</span>
          </p>
        </>
      }
    />
  );
}
