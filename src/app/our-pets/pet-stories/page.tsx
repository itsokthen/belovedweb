// import ComingSoon from "@/app/components/ComingSoon";
import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Pet Stories - Coming Soon"
      content={
        <>
          <p>
            Telling stories is one of the things that has given me so much
            relief. It&apos;s hard, when all I felt was the grief, to remember
            that my pet&apos;s death was only a very small part of the whole
            story. There was an entire life and countless stories about those
            lives. Here, we will feature those stories.
          </p>
          <p>
            {" "}
            You Don&apos;t have to be a great storyteller. I will help you with
            the writing if you need it.
          </p>
          <p>
            {" "}
            One of the events I want to have at the clubhouse is a Story Night.
            Combined with success stories from the Good Grief page, we should be
            able to make an evening of it.
          </p>
          <p>
            {" "}
            Another night each week, I&apos;d love to have a Poetry Slam. We
            could include that poetry here along with the stories.
          </p>
        </>
      }
    />
  );
}
