import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="About Us"
      content={
        <>
          <p className="">
            When I lost Sadie in 2015, and Cali in 2017, I was devastated.
            Crippled. I couldn’t work. I had days that I couldn’t even get out
            of bed. I lost a business after 25 years. I lost the apartment I had
            lived in for 20 years. I was homeless for about 2 years (with a
            little couch-surfing when someone would take me in).
          </p>
          <p className="">
            When we lose a person, we know what to do. We know how to{" "}
            <span className="font-bold text-primary">help each other.</span>
          </p>
          <p className="">
            We have funerals. We have rituals and ceremonies. We know what to
            say to each other. It&apos;s LIKE A LANGUAGE that helps us grieve,
            heal and get through the grief. Not just words. But a social{" "}
            <span className="font-bold text-primary">connection</span> and{" "}
            <span className="font-bold text-primary">understanding</span> of the
            devastating emotions a person is experiencing.
          </p>
          <p className="">
            We do not have such a language for each other when we lose a pet,
            even though for some, like me, the experience is equally
            devastating.
          </p>{" "}
          <p className="">
            The silver lining to my journey was that I met hundreds, if not
            thousands, of people who have also lost pets. They felt what I felt.
            They spoke my language. More than anything, that connection was{" "}
            <span className="font-bold text-primary">healing.</span>
          </p>
          <p className="font-bold"> WE NEED A PLACE TO CREATE THIS LANGUAGE.</p>
          <p className="">
            {" "}
            I call it a clubhouse, but it looks like a bar and works like a bar.
            We’ll serve drinks and beers and some REALLY GOOD food. If you want
            to come have a beer and cry about your pet, you can do that, and
            you&apos;ll be surrounded by people who understand. If you want to
            come have a beer and NOT cry about your pet, you can do that too,
            and you will still be surrounded by people who{" "}
            <span className="font-bold text-primary">understand.</span>
          </p>
          <p className="">
            {" "}
            But this “bar”, will be much, much more than that. It&apos;s a place
            to develop the <span className="font-bold text-primary">
              tools
            </span>{" "}
            and <span className="font-bold text-primary">resources</span> to
            heal in a friendly, pleasant environment.{" "}
            <span className="font-bold text-primary">
              Come check out the clubhouse!!
            </span>{" "}
            (link)
          </p>
        </>
      }
    />
  );
}
