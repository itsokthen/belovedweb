import ComingSoon from "@/app/components/ComingSoon";

export default function Page() {
  return (
    <div className="mx-10 my-10">
      <ComingSoon />
      <h1 className="text-6xl font-bold text-altSec mb-10">Good Grief</h1>
      <p>
        This page will boast our success stories from customers. Stories about
        what has worked for them and helped them heal. And hopefully, what their
        life is like now (hopefully with a new pet).
      </p>
      <p>
        {" "}
        This page will also feature products that people all over the world have
        created that pet owners have tried with success. Not a page for vendors
        to advertise.
      </p>{" "}
      <p>
        {" "}
        With any luck, some of these success stories become part of the Story
        Night.
      </p>
    </div>
  );
}
