import PageLayout from "@/app/components/PageLayout";

export default function Page() {
  return (
    <PageLayout
      title="Pet Care Program"
      content={
        <>
          <p>
            With broken hearts, we offer compassion and grace to pets and pet
            owners we&apos;ll probably never meet.
          </p>
          <p>
            {" "}
            Economic euthanasia is a reality. The cost of the required care
            exceeds what the pet owner can afford. To keep the pet from
            suffering, the pet is euthanized. What if there was an option?
          </p>
          <p>
            {" "}
            A portion of all sales will be added to this program. Any vet can
            call and request funding for surgery or medical procedures to avoid
            economic euthanasia. This is not a loan to the pet owner. It is
            given freely based on funds available on a first come, first served
            basis.
          </p>
          <p>
            {" "}
            People can contribute to this fund and even earmark it for their
            favorite vet.
          </p>
          <p>
            {" "}
            It&apos;s possible that once this fund is up and running that we can
            coordinate with other organizations that assist with vet bills. The
            more BEloved grows, and spreads nationwide, the more vets that will
            have access to this fund.
          </p>
          <p>
            {" "}
            Eventually, I&apos;d like this program to offer a pre-paid medical
            plan that includes financing and guaranteed payment to vets at
            pre-negotiated rates.
          </p>
        </>
      }
    />
  );
}
