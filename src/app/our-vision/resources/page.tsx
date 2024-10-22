// import ComingSoon from "@/app/components/ComingSoon";
import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Resources - Coming Soon"
      content={
        <>
          <p>
            On this page, we can list resources, products, tools and ideas that
            might be helpful. Similar to our Good Grief page, but this is paid
            advertising by outside vendors. The Good Grief page is written by
            pet owners, not business owners.
          </p>
          <p>
            {" "}
            Of course, we will highlight the pet memorials that WE make. Ours
            are unique and specifically designed for the person and their home.
            They are interactive in some way, with clocks, lamps, and always, a
            music box. They include pictures and parts of the pet&apos;s life
            such as their collar, tags, toys, blankets, or anything else that
            needs to be remembered.
          </p>
        </>
      }
    />
  );
}
