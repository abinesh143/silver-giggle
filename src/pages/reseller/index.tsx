import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Reseller = () => {
  return (
    <main>
      <div className="container sm:mx-auto py-4">
        <Navbar />
        <div className="mt-10 sm:mt-24 max-sm:px-4">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-4">
            Welcome Resellers
          </h2>
          <div className="flex justify-center">
          <p className="text-lg text-center w-3/4">
            Provide additional value to your clients by turning their website
            into an app. Ideal for web developers, marketing agencies and other
            service providers that are in close contact with their clients and
            their websites.
          </p>
          </div>
          <div className="grid grid-cols-3 gap-8"></div>
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default Reseller;
