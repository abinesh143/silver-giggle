import { toastProvider } from "@/helpers/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthModal = (props) => {
  const [authType, setAuthType] = useState("register");
  const [isVisble, setIsVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    userEmail: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    userEmail: "",
    phoneNumber: "",
    password: "",
    userCountry: "",
    isPremium: false,
    amount: 0,
  });
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const router = useRouter();

  const togglePassword = (value) => {
    setIsVisible(!value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!loginData.userEmail || !loginData.password) {
      setLoginError("Email or Password is not valid");
    } else {
      try {
        let res = await fetch("/api/userLogin", {
          method: "POST",
          body: JSON.stringify(loginData),
        });

        let userData = await res.json();
        if (res.status === 200) {
          localStorage.setItem("appMaker", JSON.stringify(userData));
          props.closeModal();
          toastProvider("success", "Signed in successfully");
          router.push("/account");
        } else {
          setLoginError(userData.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (!registerData.fullName) {
      setRegisterError("Full name is missing");
    } else if (!registerData.userEmail) {
      setRegisterError("Email is missing or invalid");
    } else if (!registerData.password) {
      setRegisterError("Password is missing");
    } else if (!registerData.userCountry) {
      setRegisterError("user country is missing");
    } else if (!registerData.phoneNumber) {
      setRegisterError("phone number is missing");
    } else {
      try {
        let res = await fetch("/api/userData", {
          method: "POST",
          body: JSON.stringify(registerData),
        });

        let userData = await res.json();
        if (res.status === 200) {
          localStorage.setItem("appMaker", JSON.stringify(userData));
          props.closeModal();
          router.push("/account");
          toastProvider("success", "Registration is Success");
        } else {
          setRegisterError(userData.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <main>
      <div
        id="auth-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full sm:h-[calc(100%-1rem)] max-h-full"
        data-modal-placement="center-center"
      >
        <div class="absolute sm:relative w-full max-w-md max-h-full max-sm:bottom-0">
          <div class="relative bg-white sm:rounded-[40px] shadow p-8 max-sm:rounded-t-[24px]">
            <div class="flex items-center">
              <h3 class="text-lg sm:text-2xl font-semibold">
                Welcome{authType === "login" ? " Back" : ""},
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
            <h3 class="text-lg sm:text-2xl">
              In order to continue,
              <span class="capitalize font-semibold text-[#FE5000]">
                {authType}
              </span>
            </h3>
            {authType === "login" ? (
              <form
                onSubmit={(e) => handleSubmitLogin(e)}
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
                    type="email"
                    class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                    placeholder="Your Email"
                    value={loginData.userEmail}
                    onChange={(e) =>
                      setLoginData({ ...loginData, userEmail: e.target.value })
                    }
                    required
                  />
                </div>
                <div name="password" class="relative">
                  <Image
                    src="/svg/lock.svg"
                    height="24"
                    width="24"
                    class="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                    alt="lock"
                  />
                  <input
                    type="password"
                    class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                  <div class="absolute top-4 right-4 cursor-pointer">
                    <Image
                      src={isVisble ? "/svg/not-eye.svg" : "/svg/eye.svg"}
                      width={24}
                      height={24}
                      alt="eye"
                      onClick={() => togglePassword(isVisble)}
                    />
                  </div>
                </div>
                {/* <p v-if="showForgotPasswordAlert" class="flex items-center">
              <Image src="/svg/info-orange.svg" class="w-4 h-4 mr-1" />
              <span class="text-[#FE5000] text-xs">
                Reset password link has been sent to your email
              </span>
            </p> */}
                <a
                  href="#"
                  class="float-right text-xs sm:text-sm text-[#949494] hover:underline"
                >
                  Forgot Password?
                </a>

                <button
                  type="submit"
                  class="w-full text-white bg-black hover:bg-opacity-80 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
                >
                  Log In
                </button>
                {loginError ? (
                  <small name="password" class="mt-1 text-xs text-red-600">
                    {loginError}
                  </small>
                ) : null}
                <div class="text-center text-xs sm:text-sm font-medium text-[#949494]">
                  Don&apos;t have an account,
                  <a
                    href="#"
                    class="text-black font-semibold hover:underline"
                    onClick={() => setAuthType("register")}
                  >
                    Register
                  </a>
                </div>
              </form>
            ) : (
              <form
                onSubmit={(e) => handleSubmitRegister(e)}
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
                    value={registerData.fullName}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
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
                    value={registerData.userEmail}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        userEmail: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div name="password" class="relative">
                  <Image
                    src="/svg/lock.svg"
                    height="24"
                    width="24"
                    alt="lock"
                    class="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                  />
                  <input
                    type="password"
                    class="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                  <div class="absolute top-4 right-4 cursor-pointer">
                    <Image
                      src={isVisble ? "/svg/not-eye.svg" : "/svg/eye.svg"}
                      width={24}
                      height={24}
                      alt="eye"
                      onClick={() => togglePassword(isVisble)}
                    />
                  </div>
                </div>
                <div name="country" class="relative">
                  <select
                    id="countries"
                    class="border border-gray-300 text-gray-900 text-sm sm:text-base focus:ring-black focus:border-black rounded-xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={registerData.userCountry}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        userCountry: e.target.value,
                      })
                    }
                    required
                  >
                    <option value={null} selected>
                      Choose a country
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
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
                    placeholder="Phone Number"
                    value={registerData.phoneNumber}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        phoneNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-black hover:bg-opacity-80 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
                >
                  Register
                </button>
                {registerError ? (
                  <small name="email" class="mt-1 text-xs text-red-600">
                    {registerError}
                  </small>
                ) : null}

                <div class="text-center text-xs sm:text-sm font-medium text-[#949494]">
                  Already have an account,
                  <a
                    class="text-black font-semibold hover:underline"
                    onClick={() => setAuthType("login")}
                  >
                    Login
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthModal;
