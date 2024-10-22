import PageLayout from "@/app/components/PageLayout";
import Image from "next/image";

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
          <p className="mt-5">
            <a
              href="/Clubhouse.pdf"
              download
              className="text-blue-500 hover:underline"
            >
              Download the Clubhouse PDF
            </a>
          </p>
          <div className="max-h-[600px] w-full overflow-hidden">
            <Image
              src={"/Clubhouse.jpg"}
              alt="Clubhouse Design"
              height={600}
              width={300}
              layout="responsive"
              className="h-auto max-h-[600px] w-auto max-w-[700px]"
            />
          </div>
          <p>
            The Bar will feature the full menu of beer, wine, and drinks, along
            with some really good food. At this point, I am leaning towards
            wood-fired pizza and subs.
          </p>
          <p>
            Weekly activities will include Story Night, a Poetry Slam, Pizza
            Night, Pet Life Potluck, Picture Show & Tell, and if possible, an
            OUTDOOR bonfire to say goodbye to what we need to let go of.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            Weather permitting, sit on the front porch in an old style rocking
            chair and enjoy a beer or some food.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            The Stage won&apos;t have a band, except for special events. In our
            weekly events, we&apos;ll use the mic for stories and poetry slams.
            The MAIN use of this mic is for those who have written a book. Come
            take the mic, tell about your book, tell us what you&apos;ve learned
            and your own healing journey, sign a few copies and we&apos;ll put
            those in our library (as well as sell copies).
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            A library with books about grief and recovery. If a therapist or
            someone has written a book, we&apos;ll invite them to come take the
            mic and tell us about their book, tell us what they&apos;ve learned
            and what works for them, sign a few copies and they&apos;ll add it
            to our library. You can relax and read a book while you have a beer
            or enjoy some food.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            We&apos;ll offer our own master-crafted memorials in a showroom.
          </p>
          <p>
            Along with those, we can offer products that others have created and
            introduced. To purchase, of course. But hopefully, to give you ideas
            for crafting your own healing items.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            For the more masterful creations, we will have our own woodshop with
            professionals to handle cutting wood and creation of pieces that
            require more technical skills.
          </p>
          <p>
            In time, I&apos;d like to explore the possibility of making our own
            headstones and grave markers instead of ordering them from a vendor.
          </p>
          <p>
            Art therapy, D.I.Y. pet memorials, photos, painting, crafting with a
            professional instructor that can guide you in your project.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            We&apos;ll offer offices for therapists to rent by the hour, day, or
            month - they can even poach clients in the bar.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            Need a funeral or religious service? This clubhouse will have a
            sanctuary for that with a local funeral director and the spiritual
            advisor of your choice. *A minister, a rabbi, and a funeral director
            walk into a bar. There had to be a joke in there someplace. Maybe
            even burial services. If you want to bury your pet at your home, say
            the word and we&apos;ll bring the shovels. We can also produce
            headstones and grave markers.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            The Sanctuary will have a separate entrance and foyer, as well as a
            staging room that can be used for private viewings and goodbyes.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            I&apos;d also like to offer an ash storage / visitation service.
            Standing there in the vet&apos;s office having to make FINANCIAL
            decisions about what to do with the ashes as I grappled with saying
            goodbye was overwhelming. The ash service can take some of the
            pressure off and let people make decisions when they&apos;re ready.
          </p>
          <p>
            We&apos;ll coordinate with the vet to collect the ashes from the
            crematory. We&apos;ll store them until you are ready for a memorial
            of some kind. Whether that&apos;s a service or a crafted piece, you
            get to catch your breath before you begin.
          </p>
          <hr className="border-t-2 border-gray-300 my-8 w-full" />
          <p>
            Another service that we can provide is a visitation service. Some
            people don&apos;t want to keep an urn or memorial piece because
            their grief is too intense when they see it. However, the idea of
            simply discarding the ashes is also too much. In these rooms, the
            BEloved can visit their pets in a prepared room. Rooms can be
            designed to resemble a living room, for example. Come in and watch a
            movie with your pet nearby. After, we return the ashes to storage
            for later.
          </p>
        </>
      }
    />
  );
}
