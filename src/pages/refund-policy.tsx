import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <main>
      <div className="mt-10 md:mt-20 sm:pb-8">
        <div className="px-4 sm:px-10 lg:px-16 mb-10 md:mb-20">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center mb-2 md:mb-6">
            Refund Policy
          </h1>
          <div className="lg:text-lg 2xl:text-xl text-center font-medium px-0 sm:px-5 md:px-10 lg:px-20 xl:px-48">
            We care about your Privacy.
          </div>
        </div>
        <div className="sm:bg-[url('/images/meal-bg.png')] bg-no-repeat pb-16 sm:pb-32 px-4 sm:px-10 lg:px-16">
          <div className="flex ">
            <div className=" bg-[#FCE594] relative rounded-t-[24px] sm:rounded-t-[32px] px-4 sm:px-8 lg:px-6 xl:px-8">
              <div className="absolute left-[100%] bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] w-7 h-7  before:shadow-[0_0_0_40px_#FCE594]"></div>
              <div className="sm:text-lg xl:text-xl font-semibold py-4">
                App Maker Pro AI
              </div>
            </div>
          </div>
          <div className="rounded-b-[24px] bg-[#FCE594] rounded-tr-[24px] sm:rounded-b-[32px] sm:rounded-tr-[32px]">
            <div className="flex text-xs  sm:text-base 2xl:text-xl h-fit text-ellipsis overflow-hidden ...">
              <div className=" px-4 sm:px-8 lg:px-6 xl:px-8 pt-4 sm:pt-8 lg:pt-6 xl:pt-8 lg:pb-20 max-lg:text-justify relative">
                <div className="pb-16 lg:pb-0">
                  <p>
                    This cancellation policy outlines how you can cancel or seek
                    a refund for a product/service that you have purchased
                    through the Platform. Under this policy:
                  </p>
                  <ul>
                    <li>
                      Cancellations will only be considered if the request is
                      made within <strong>Free App Maker AI</strong> days of placing the
                      order. However, cancellation requests may not be
                      entertained if the orders have been communicated to such
                      sellers/merchant(s) listed on the Platform and they have
                      initiated the process of shipping them, or the product is
                      out for delivery. In such an event, you may choose to
                      reject the product at the doorstep.
                    </li>
                    <li>
                      <strong>Free App Maker AI</strong> does not accept cancellation requests
                      for perishable items like flowers, eatables, etc. However,
                      the refund/replacement can be made if the user establishes
                      that the quality of the product delivered is not good.
                    </li>
                    <li>
                      In case of receipt of damaged or defective items, please
                      report to our customer service team. The request will be
                      entertained once the seller/merchant listed on the
                      Platform has checked and determined the same at its own
                      end. This should be reported within <strong>Free App Maker AI</strong>{" "}
                      days of receipt of the products.
                    </li>
                    <li>
                      If you feel that the product received is not as shown on
                      the site or as per your expectations, you must bring it to
                      the notice of our customer service within{" "}
                      <strong>Free App Maker AI</strong> days of receiving the product. The
                      customer service team, after looking into your complaint,
                      will take an appropriate decision.
                    </li>
                    <li>
                      In case of complaints regarding products that come with a
                      warranty from the manufacturers, please refer the issue to
                      them.
                    </li>
                    <li>
                      In case of any refunds approved by <strong>Free App Maker AI</strong>,
                      it will take <strong>Free App Maker AI</strong> days for the refund to
                      be processed to you.
                    </li>
                  </ul>
                  <p>
                    Email:{" "}
                    <a href="mailto:smileysoftwares@gmail.com">
                      smileysoftwares@gmail.com
                    </a>
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 lg:left-40 h-12 sm:h-14 lg:rounded-t-[32px] bg-white flex px-4 sm:px-8 items-center max-sm:rounded-tr-[24px] max-lg:rounded-tr-[32px]">
                  <span className="font-semibold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-black">
                    Thank You
                  </span>
                  <div className="absolute -right-7 sm:-right-8 bottom-0 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white] w-7 h-7 sm:w-8 sm:h-8"></div>
                  <div className="absolute -left-8 bottom-0 overflow-hidden before:block before:h-full before:rounded-br-[40px] before:shadow-[0_0_0_40px_white] w-8 h-8 max-lg:hidden"></div>
                  <div className="absolute left-0 -top-8 overflow-hidden before:block before:h-full before:rounded-bl-[40px] before:shadow-[0_0_0_40px_white] w-8 h-8 lg:hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-8 lg:px-10 py-4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
