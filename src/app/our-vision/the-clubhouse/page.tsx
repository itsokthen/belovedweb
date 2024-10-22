import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="The Clubhouse"
      content={
        <>
          <p>
            If you&apos;ve ever been to an animal shelter, you have seen first
            hand what a horrible place it is...
          </p>
          <p>Instead of a shelter, let&apos;s build a village.</p>
          <p>
            Yes, I know. This is a dream and would take so much to build it...
          </p>
        </>
      }
    />
  );
}
