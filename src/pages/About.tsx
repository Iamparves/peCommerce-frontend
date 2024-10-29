import Benefits from "@/components/Home/Benefits";
import SectionTop from "@/components/shared/SectionTop";

const stats = [
  {
    title: "12 K",
    subtitle: "Products for Sale",
    desc: "That's why we strive to offer a diverse range of products that cater to all styles.",
  },
  {
    title: "5.5 K",
    subtitle: "Happy Customers",
    desc: "We pride ourselves on creating great products and experiences with our valued customers.",
  },
  {
    title: "2 K",
    subtitle: "Partner Brands",
    desc: "Partner with brands that share our values, striving to protect our environment.",
  },
];

const About = () => {
  return (
    <main>
      <SectionTop title="About us" />
      <section className="bg-white">
        <div className="container border-b py-16 md:py-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h4 className="mb-2 text-[15px] font-semibold">
              Welcome to Glozin
            </h4>
            <h1 className="mx-auto mb-3 max-w-md text-balance text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              Best Store Available to Everyone!
            </h1>
            <p className="text-sm text-[#696c66] sm:text-base">
              Over 15 years of experience, we have meticulously curated
              collections that transcend fleeting trends, embodying a timeless
              elegance that resonates with our discerning clientele.
            </p>
          </div>
          <div className="relative mb-16 aspect-video max-h-[620px] w-full overflow-hidden rounded-md">
            <img
              src="/images/about.jpg"
              alt="About us"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-black/20 duration-200 hover:opacity-0"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5 xl:gap-10">
            {stats.map((stat, index) => (
              <div
                className="mx-auto max-w-xs text-center lg:max-w-none"
                key={index}
              >
                <h2 className="mb-2 text-3xl font-semibold lg:text-4xl">
                  {stat.title}
                </h2>
                <h3 className="mb-2.5 font-semibold text-black lg:text-lg">
                  {stat.subtitle}
                </h3>
                <p className="text-sm text-[#696c66] lg:text-base">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Benefits />
    </main>
  );
};

export default About;
