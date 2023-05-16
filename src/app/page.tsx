import Container from "@/components/Container";
import background from "../../public/img/bsu.jpg";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <section className="text-white pt-16">
        <BackgroundImage src={background.src} />
        <Container>
          <div
            className="flex items-center sm:justify-center flex-col gap-10 px-3 sm:px-0"
            style={{ height: "700px" }}
          >
            <h1 className="font-bold text-3xl sm:text-4xl">
              StudyTime - удобное расписание в любое время!
            </h1>
            <div className="flex flex-row gap-10">
              <a
                href="/schedule"
                className="rounded-md px-7 py-4 text-sm font-semibold flex lg:inline bg-gray-800
                            text-white hover:scale-110 transition-all hover:bg-gray-700"
              >
                Смотреть расписание
              </a>
              <a
                href="/admin/auth"
                className="rounded-md px-7 py-4 text-sm font-semibold flex lg:inline border-2 border-black/25
                            bg-black/25 hover:bg-black/50 text-white
                            hover:scale-110 transition-all"
              >
                Управлять расписанием
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
