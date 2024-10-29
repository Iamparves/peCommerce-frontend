const benefits = [
  {
    icon: "/images/benefits/support.png",
    title: "24/7 Customer Service",
    description:
      "We're here to help you with any questions or concerns you have, 24/7.",
  },
  {
    icon: "/images/benefits/return-box.png",
    title: "14-Day Money Back",
    description:
      "If you're not satisfied with your purchase, simply return it within 14 days for a refund.",
  },
  {
    icon: "/images/benefits/guarantee.png",
    title: "Our Guarantee",
    description:
      "We stand behind our products and services and guarantee your satisfaction.",
  },
  {
    icon: "/images/benefits/shipped.png",
    title: "Shipping worldwide",
    description:
      "We ship our products worldwide, making them accessible to customers everywhere.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container text-[#1f1f1f]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
            What Makes Us Different
          </h2>
          <p className="text-[15px] sm:text-base">
            We're dedicated to offering the best products and services to
            enhance your shopping experience. Here are the benefits you’ll enjoy
            with us:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {benefits.map((benefit, index) => (
            <div
              className="mx-auto flex max-w-xs flex-col items-center text-center"
              key={index}
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="mb-5 size-16 object-contain"
              />
              <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
