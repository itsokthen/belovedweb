// import ComingSoon from "@/app/components/ComingSoon";
import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Good Grief - Coming Soon"
      content={
        <>
          <p>
            This page will boast our success stories from customers. Stories
            about what has worked for them and helped them heal. And hopefully,
            what their life is like now (hopefully with a new pet).
          </p>
          <p>
            {" "}
            This page will also feature products that people all over the world
            have created that pet owners have tried with success. Not a page for
            vendors to advertise.
          </p>{" "}
          <p>
            {" "}
            With any luck, some of these success stories become part of the
            Story Night.
          </p>
        </>
      }
    />
  );
}
