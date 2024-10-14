import Nav from "./components/Nav";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <section>
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            src={"/catBeloved.jpg"}
            alt="Banner Image of Cat"
            fill
            objectFit="cover"
            style={{ objectPosition: "center bottom" }}
          />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Home
          </h1>
        </div>
      </section>
      <section className="flex-grow">
        <div className="mx-10 my-10">
          <h1 className="text-6xl font-bold text-altSec mb-10">
            Welcome to the Clubhouse: A Place for Healing
          </h1>
          <p className="text-3xl">
            When we lose a beloved pet, the grief can be overwhelming, but often
            we lack the support and understanding that comes with losing a
            person. At the Clubhouse, we've created a space where you can{" "}
            <span className="font-bold text-primary">
              share your experience with others who understand.
            </span>{" "}
            Whether you want to have a drink and cry, or simply relax, you'll be
            surrounded by people who speak the same "language" of loss. It's
            more than a bar —{" "}
            <span className="font-bold text-primary">it's a community</span>{" "}
            offering tools, resources, and a warm environment to help you heal.{" "}
            <span className="font-bold text-primary">Come check us out!</span>
          </p>
          {/* <p>
            When I lost Sadie in 2015, and Cali in 2017, I was devastated.
            Crippled. I couldn’t work. I had days that I couldn’t even get out
            of bed. I lost a business after 25 years. I lost the apartment I had
            lived in for 20 years. I was homeless for about 2 years (with a
            little couch-surfing when someone would take me in).
          </p>
          <p>
            When we lose a person, we know what to do. We know how to help each
            other.
          </p>
          <p>
            We have funerals. We have rituals and ceremonies. We know what to
            say to each other. IT’S LIKE A LANGUAGE that helps us grieve, heal
            and get through the grief. Not just words. But a social connection
            and understanding of the devastating emotions a person is
            experiencing.
          </p>
          <p>
            We do not have such a language for each other when we lose a pet,
            even though for some, like me, the experience is equally
            devastating.
          </p>{" "}
          <p>
            The silver lining to my journey was that I met hundreds, if not
            thousands, of people who have also lost pets. They felt what I felt.
            They spoke my language. More than anything, that connection was
            healing.
          </p>
          <p> WE NEED A PLACE TO CREATE THIS LANGUAGE.</p>
          <p>
            {" "}
            I call it a clubhouse, but it looks like a bar and works like a bar.
            We’ll serve drinks and beers and some REALLY GOOD food. If you want
            to come have a beer and cry about your pet, you can do that, and
            you'll be surrounded by people who understand. If you want to come
            have a beer and NOT cry about your pet, you can do that too, and you
            will still be surrounded by people who understand.
          </p>
          <p>
            {" "}
            But this “bar”, will be much, much more than that. It’s a place to
            develop the tools and resources to heal in a friendly, pleasant
            environment. Come check out the clubhouse!! (link)
          </p> */}
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
