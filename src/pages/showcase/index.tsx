/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const ShowCase = () => {
  return (
    <main>
      <Head>
        <title>
          Showcase of Websites Transformed into Native Mobile Apps | Shopify,
          WooCommerce, BigCommerce & More
        </title>
        <meta
          name="description"
          content="See how websites like Shopify, WooCommerce, Squarespace, BigCommerce, Dukaan, and Wix became high-performing native Android and iOS apps. Explore our showcase of successful app transformations"
          key="desc"
        />
      </Head>
      <div className="container sm:mx-auto py-4">
        <Navbar />
        <div className="mt-10 sm:mt-24 max-sm:px-4">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-4">
            Showcase: Website to Android & iOS Apps
          </h1>
          <p className="text-lg text-center ">
            Discover Our Clients Beautifully Designed Apps
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 my-10 sm:my-20">
            {[...Array(4)].map((_, index) => (
              <div key={`showcase-${index}`}>
                <img
                  src={`/images/showcase${index + 1}.png`}
                  alt={`showcase-${index + 1}`}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default ShowCase;
