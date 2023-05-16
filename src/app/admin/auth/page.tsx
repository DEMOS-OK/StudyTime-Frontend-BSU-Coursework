import BackgroundImage from "@/components/BackgroundImage";
import background from "../../../../public/img/bsu3.jpg";
import LoginForm from "@/components/Form/Auth/LoginForm";
import Container from "@/components/Container";

export default async function SchedulePage() {
  return (
    <>
      <section className="pt-16">
        <BackgroundImage src={background.src} />
        <Container>
          <LoginForm />
        </Container>
      </section>
    </>
  );
}
