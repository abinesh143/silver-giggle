const LogoutModal = () => {
  return (
    <main>
      <div
        id="logout-modal"
        tabindex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full sm:h-[calc(100%-1rem)] max-h-full"
        data-modal-placement="center-center"
      >
        <div className="absolute sm:relative w-full max-w-md max-h-full max-sm:bottom-0">
          <div className="relative bg-white sm:rounded-[40px] shadow p-8 max-sm:rounded-t-[24px]">
            <div className="flex items-center mb-3">
              <h3 className="text-2xl font-medium">
                Log<span className="font-semibold">out!</span>
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="logout-modal"
              >
                <nuxt-img src="/svg/close-circle.svg" height="24" width="24" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <p>Are You Sure To Logout?</p>
            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
              <button
                type="button"
                className="bg-white border border-black hover:bg-black hover:text-white focus:ring-gray-400 focus:ring-4 focus:outline-none text-sm font-semibold rounded-xl px-6 py-2 sm:px-12 sm:py-3"
                data-modal-hide="logout-modal"
              >
                No, Continue
              </button>
              <button className="text-white bg-black hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none text-sm font-semibold rounded-xl px-6 py-2 sm:px-12 sm:py-3">
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogoutModal;
