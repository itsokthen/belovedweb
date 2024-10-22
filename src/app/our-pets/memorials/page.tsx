// import ComingSoon from "@/app/components/ComingSoon";
import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Memorials - Coming Soon"
      content={
        <>
          <p>
            This page is dedicated to honoring the cherished pets who have
            recently crossed the rainbow bridge. It is a place of remembrance
            where families can celebrate the lives of their companions, share
            fond memories, and reflect on the joy their pets brought to their
            lives.
          </p>
          <p>
            We encourage you to read through these heartfelt obituaries, each
            one telling a unique story of love, companionship, and the special
            bond between humans and their pets. These tributes are a testament
            to the unconditional love and loyalty that pets bring into our
            lives, and they serve as a way to keep their memories alive.
          </p>
          <p>
            In addition to honoring our beloved pets, this page offers a space
            for healing and support. We hope that through these shared stories,
            others will find comfort and solace during difficult times, knowing
            they are not alone in their grief.
          </p>
          <p>
            If you would like to submit an obituary for your pet, please reach
            out to us. Your story, like so many others, deserves to be told, and
            we are here to help preserve the memory of your beloved companion.
          </p>
        </>
      }
    />
  );
}
