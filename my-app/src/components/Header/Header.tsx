import Container from "@/components/Container";
import Navbar from "@/components/Header/Navbar/Navbar";
import Logo from "@/components/Header/Logo";

const Header = () => {
  return (
    <>
      <header className="relative bg-gray-800 sm:fixed w-full z-20">
        <Container>
          <div className="flex justify-between align-middle flex-col sm:flex-row">
            <Logo additionalClasses="justify-center" />
            <Navbar />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
