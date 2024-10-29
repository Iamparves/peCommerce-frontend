import { cn } from "@/lib/utils";

interface SectionTopProps {
  title: string;
  wrapperClass?: string;
  titleClass?: string;
}

const SectionTop: React.FC<SectionTopProps> = ({
  title,
  wrapperClass,
  titleClass,
}) => {
  return (
    <section
      className={cn(
        "w-full bg-[#F6F3EF] py-16 md:py-20 lg:py-24",
        wrapperClass,
      )}
    >
      <div className="container">
        <h1
          className={cn(
            "text-center text-4xl font-semibold text-black sm:text-5xl md:text-6xl",
            titleClass,
          )}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default SectionTop;
