const AuthHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="font-light text-2xl">{title}</h1>
    </div>
  );
};

export default AuthHeader;
