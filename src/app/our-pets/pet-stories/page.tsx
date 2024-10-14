import ComingSoon from "@/app/components/ComingSoon";

export default function Page() {
  return (
    <div className="mx-10 my-10">
      <ComingSoon />
      <h1 className="text-6xl font-bold text-altSec mb-10">Pet Stories</h1>
      <p>
        Telling stories is one of the things that has given me so much relief.
        It's hard, when all I felt was the grief, to remember that my pet's
        death was only a very small part of the whole story. There was an entire
        life and countless stories about those lives. Here, we will feature
        those stories.
      </p>
      <p>
        {" "}
        You don't have to be a great storyteller. I will help you with the
        writing if you need it.
      </p>
      <p>
        {" "}
        One of the events I want to have at the clubhouse is a Story Night.
        Combined with success stories from the Good Grief page, we should be
        able to make an evening of it.
      </p>
      <p>
        {" "}
        Another night each week, I'd love to have a Poetry Slam. We could
        include that poetry here along with the stories.
      </p>
    </div>
  );
}
