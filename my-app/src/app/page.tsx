import Container from "@/components/Container";
import background from "../../public/img/bsu.jpg";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <section className="text-white pt-16">
        <BackgroundImage src={background.src} />
        <Container>
          <div className="h-screen flex items-center sm:justify-center flex-col gap-10 px-3 sm:px-0">
            <h1 className="font-bold text-3xl sm:text-4xl">
              StudyTime - удобное расписание в любое время!
            </h1>
            <a
              href="/schedule"
              className="rounded-md px-7 py-4 text-sm font-semibold flex lg:inline bg-gray-800
                            text-white hover:scale-110 transition-all hover:bg-gray-700"
            >
              Перейти к расписанию
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
