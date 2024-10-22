// import ComingSoon from "@/app/components/ComingSoon";
import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Good Grief - Coming Soon"
      content={
        <>
          <p>
            This page will highlight the inspiring success stories from our
            community members—stories of healing, transformation, and the joy of
            finding new companionship, often with a new pet. These testimonials
            will showcase what has worked for them on their journey and how
            their lives have changed for the better.
          </p>
          <p>
            {" "}
            In addition, this page will feature innovative products that have
            been tried and tested by pet owners around the world. These are not
            advertisements, but genuine recommendations from those who have
            found success with them.
          </p>{" "}
          <p>
            {" "}
            We hope that some of these remarkable stories will become a part of
            our cherished Story Night tradition, where we celebrate the bond
            between people and their pets.
          </p>
        </>
      }
    />
  );
}
