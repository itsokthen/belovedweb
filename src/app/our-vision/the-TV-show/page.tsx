import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="The TV Show"
      content={
        <>
          <p>
            There is/was a Saturday morning TV show on CBS called, &quot;
            <span className="font-bold text-primary">Lucky Dog</span>&quot;. The
            host and star was a guy named{" "}
            <span className="font-bold text-primary">Brandon McMillan</span>. At
            the beginning of the show, he would{" "}
            <span className="font-bold text-primary">rescue</span> a dog from a
            local shelter. And then, we&apos;d meet the eventual recipient of
            that dog. Through the show, we see Brandon training the dog
            specially for that person. Each episode ends with Brandon presenting
            them with the dog.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            I want to do a similar show but kinda backwards. There are{" "}
            <span className="font-bold text-primary">ZERO tools </span>
            for teaching people how to{" "}
            <span className="font-bold text-primary">grieve</span> in a healthy
            way, not just for pets, but for the loss of a person, too. Nothing.
            When we experience that loss, most people are left at a{" "}
            <span className="font-bold text-primary">standstill</span>. Others
            around us might help, but actually going through the{" "}
            <span className="font-bold text-primary">grieving process </span>
            is a solo experience we are never prepared for and rarely have any
            tools.
          </p>
          <p>
            It&apos;s worse for kids. As adults, we have likely been to a{" "}
            <span className="font-bold text-primary">funeral</span>. We have had
            a family member pass and we learn from our surviving family members
            how to get through that. But when a pet dies, often even the adults
            have no answers about the{" "}
            <span className="font-bold text-primary">grieving process</span>. If
            the adults Don&apos;t know what to do, how will they teach their
            kids?
          </p>
          <p>
            This TV show gets the{" "}
            <span className="font-bold text-primary">sad ending</span> out of
            the way first. We see a few minutes of a person who has lost a pet
            and we get their story. The rest of the show is about what they did
            to <span className="font-bold text-primary">heal</span>. Each
            episode ends with them{" "}
            <span className="font-bold text-primary">rescuing</span> a new pet.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            So many people I&apos;ve talked to said they would never get another
            pet because they didn&apos;t want to{" "}
            <span className="font-bold text-primary">hurt</span> like this
            again. Meanwhile, there are countless pets in shelters who need a
            loving person to bring them home. It hurts so much because we have
            tremendous <span className="font-bold text-primary">love</span>. It
            hurts double when we withhold that love from another pet that needs
            us.
          </p>
          <p>
            What if this is{" "}
            <span className="font-bold text-primary">teachable</span>? Could we
            coordinate with therapists and those who work in{" "}
            <span className="font-bold text-primary">
              veterinary social work
            </span>{" "}
            to write a show that teaches &quot;
            <span className="font-bold text-primary">How To Grieve</span>&quot;?
            The show is about grieving the loss of a pet, but the lessons are
            easily transferrable to losing a person or other great losses people
            experience.
          </p>
          <p>
            The show could center around one of our locations and even film
            there. Each episode features a different way someone got through it.
          </p>
        </>
      }
    />
  );
}
