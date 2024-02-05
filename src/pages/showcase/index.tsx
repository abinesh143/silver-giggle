import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ShowCase = () => {
  return (
    <main>
      <div className="container sm:mx-auto py-4">
        <Navbar />
        <div className="mt-10 sm:mt-24 max-sm:px-4">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-4">
            Apps Showcase
          </h2>
          <p className="text-lg text-center ">
            Discover Our Clients Beautifully Designed Apps
          </p>
          <div className="grid grid-cols-3 gap-8"></div>
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default ShowCase;
