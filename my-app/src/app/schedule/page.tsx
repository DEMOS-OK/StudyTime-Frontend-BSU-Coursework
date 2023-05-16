import Schedule from "@/components/Schedule/Schedule";
import BackgroundImage from "@/components/BackgroundImage";
import background from "../../../public/img/bsu2.jpg";

export default async function SchedulePage() {
  return (
    <>
      <section className="pt-16">
        <BackgroundImage src={background.src} />
        <Schedule />
      </section>
    </>
  );
}
