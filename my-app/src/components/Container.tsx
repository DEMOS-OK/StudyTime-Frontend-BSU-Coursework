const Container = ({ children }: { children: any }) => {
  return (
    <>
      <div className="container mx-auto lg:w-10/12 sm:w-full">{children}</div>
    </>
  );
};

export default Container;
