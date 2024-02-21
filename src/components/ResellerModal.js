import Image from "next/image";
import Swal from "sweetalert2";
import { useState } from "react";

const ResellerModal = (props) => {
  const [resellerData, setResellerData] = useState({
    fullName: "",
    userEmail: "",
    phoneNumber: "",
    userCountry: "",
    description: "",
  });

  const [resellerError, setRellerError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const handleSubmitReseller = async (e) => {
    e.preventDefault();
    if (!resellerData.fullName) {
      setRellerError("Full name is missing");
    } else if (!resellerData.userEmail) {
      setRellerError("Email is missing or invalid");
    } else if (!resellerData.userCountry) {
      setRellerError("user country is missing");
    } else if (!resellerData.phoneNumber) {
      setRellerError("phone number is missing");
    } else if (!resellerData.description) {
      setRellerError("Explain something please.");
    } else {
      try {
        setRellerError("");
        setBtnLoading(true);
        let res = await fetch("/api/reseller", {
          method: "POST",
          body: JSON.stringify(resellerData),
        });

        let userData = await res.json();
        if (res.status === 200) {
          props.closeModal();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank You! we will contact you via whatsapp or Email.",
            showConfirmButton: false,
            timer: 10000,
          });
          setResellerData({
            fullName: "",
            userEmail: "",
            phoneNumber: "",
            userCountry: "",
            description: "",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setBtnLoading(false);
      }
    }
  };
  return (
    <main>
      <div
        id="reseller-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full sm:h-[calc(100%-1rem)] max-h-full"
        data-modal-placement="center-center"
      >
        <div class="absolute sm:relative w-full max-w-md max-h-full max-sm:bottom-0">
          <div class="relative bg-white sm:rounded-[40px] shadow p-8 max-sm:rounded-t-[24px]">
            <div class="flex items-center">
              <h3 class="text-lg sm:text-2xl font-semibold">
                Welcome{" "}
                <span class="capitalize font-semibold text-[#FE5000]">
                  Reseller / Partner,
                </span>
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={() => props.closeModal()}
              >
                <Image
                  src="/svg/close-circle.svg"
                  height="24"
                  width="24"
                  alt="close"
                />
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <form
              onSubmit={(e) => handleSubmitReseller(e)}
              class="space-y-4 mt-6"
            >
              <div class="relative">
                <Image
                  src="/svg/profile.svg"
                  height="24"
                  width="24"
                  class="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                  alt="profile"
                />
                <input
                  type="text"
                  class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                  placeholder="Full Name"
                  value={resellerData.fullName}
                  onChange={(e) =>
                    setResellerData({
                      ...resellerData,
                      fullName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div class="relative">
                <Image
                  src="/svg/sms.svg"
                  height="24"
                  width="24"
                  class="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                  alt="sms"
                />
                <input
                  type="email"
                  class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                  placeholder="Email Address"
                  value={resellerData.userEmail}
                  onChange={(e) =>
                    setResellerData({
                      ...resellerData,
                      userEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div class="relative">
                <Image
                  src="/svg/globe.svg"
                  height="24"
                  width="24"
                  class="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                  alt="country"
                />
                <input
                  type="text"
                  class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                  placeholder="Your Country"
                  value={resellerData.userCountry}
                  onChange={(e) =>
                    setResellerData({
                      ...resellerData,
                      userCountry: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div name="mobile" class="relative">
                <Image
                  src="/svg/call.svg"
                  height="24"
                  width="24"
                  alt="call"
                  class="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                />
                <input
                  type="number"
                  class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-sm sm:text-base"
                  placeholder="Whatsapp Number"
                  value={resellerData.phoneNumber}
                  onChange={(e) =>
                    setResellerData({
                      ...resellerData,
                      phoneNumber: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <div class="relative">
                  <div class="absolute top-4 left-0 flex items-center pl-3.5 pointer-events-none">
                    <Image
                      src="/svg/edit-cover.svg"
                      width="24"
                      height="24"
                      alt="cover"
                    />
                  </div>
                  <textarea
                    rows="3"
                    class="resize-none pt-4 pl-12 pr-4 pb-4 w-full rounded-lg sm:rounded-xl border border-[#DBDBDB] focus:ring-black focus:border-black text-sm sm:text-base"
                    placeholder="Explain your proposal"
                    value={resellerData.description}
                    onChange={(e) =>
                      setResellerData({
                        ...resellerData,
                        description: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-black hover:bg-opacity-80 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
                disabled={btnLoading}
              >
                {btnLoading ? (
                  <Image
                    src="/svg/spin.svg"
                    width={24}
                    height={24}
                    alt="spin"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                  />
                ) : null}
                Register for Free
              </button>
              {resellerError ? (
                <small name="email" class="mt-1 text-xs text-red-600">
                  {resellerError}
                </small>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResellerModal;
