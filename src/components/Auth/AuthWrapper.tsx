import { PropsWithChildren } from "react";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mx-auto w-full max-w-[620px] rounded-md bg-white p-5 shadow-[0_1px_10px_rgba(0,0,0,0.1)] sm:p-8 md:p-10 lg:px-12">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthWrapper;
