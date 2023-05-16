const AuthWrapper = ({ children }: { children: any }) => {
  return (
    <div
      className="flex justify-center items-center max-w-full px-5 sm:max-w-none pt-0 sm:pt-20"
      style={{ minHeight: "600px" }}
    >
      <div
        className="h-full bg-white rounded-lg shadow-lg px-5 py-10"
        style={{ width: "500px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
