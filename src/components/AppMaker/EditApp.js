import { currentTime } from "@/helpers/utils";

const EditApp = () => {
  return (
    <main>
      <div className="p-4 sm:p-8  lg:rounded-2xl">
        <div className="flex justify-between border-b pb-3 sm:pb-4 mb-5 sm:mb-10">
          <div className="sm:text-xl xl:text-2xl font-semibold">Edit App</div>
          {currentTime()}
        </div>
        <section>
          <div className="w-[1024px] h-[600px] overflow-hidden bg-[#F9F9F9] p-4">
            <iframe
              src="https://www.e-droid.net"
              title="Free App Maker AI"
              className="w-[1024px] h-full border-none"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EditApp;
