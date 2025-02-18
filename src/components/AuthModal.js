import { toastProvider } from "@/helpers/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import countryList from "../json/country.json";

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
  const [btnLoading, setBtnLoading] = useState(false);
  const router = useRouter();

  const togglePassword = (value, id) => {
    const element = document.getElementById(id);
    if (element) {
      value ? (element.type = "password") : (element.type = "text");
    }
    setIsVisible(!value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!loginData.userEmail || !loginData.password) {
      setLoginError("Email or Password is not valid");
    } else {
      try {
        setBtnLoading(true);
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
      } finally {
        setBtnLoading(false);
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
    } else {
      try {
        setBtnLoading(true);
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
      } finally {
        setBtnLoading(false);
      }
    }
  };
  return (
    <main>
      <div
        id="auth-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full sm:h-[calc(100%-1rem)] max-h-full"
        data-modal-placement="center-center"
      >
        <div className="absolute sm:relative w-full max-w-md max-h-full max-sm:bottom-0">
          <div className="relative bg-white sm:rounded-[40px] shadow p-8 max-sm:rounded-t-[24px]">
            <div className="flex items-center">
              <h3 className="text-lg sm:text-2xl font-semibold">
                Welcome{authType === "login" ? " Back" : ""},
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={() => props.closeModal()}
              >
                <Image
                  src="/svg/close-circle.svg"
                  height="24"
                  width="24"
                  alt="close"
                />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <h3 className="text-lg sm:text-2xl">
              In order to continue,
              <span className="capitalize font-semibold text-[#FE5000]">
                {authType}
              </span>
            </h3>
            {authType === "login" ? (
              <form
                onSubmit={(e) => handleSubmitLogin(e)}
                className="space-y-4 mt-6"
              >
                <div className="relative">
                  <Image
                    src="/svg/profile.svg"
                    height="24"
                    width="24"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                    alt="profile"
                  />
                  <input
                    type="email"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                    placeholder="Your Email"
                    value={loginData.userEmail}
                    onChange={(e) =>
                      setLoginData({ ...loginData, userEmail: e.target.value })
                    }
                    required
                  />
                </div>
                <div name="password" className="relative">
                  <Image
                    src="/svg/lock.svg"
                    height="24"
                    width="24"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                    alt="lock"
                  />
                  <input
                    id="login-app"
                    type="password"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                  <div className="absolute top-4 right-4 cursor-pointer">
                    <Image
                      src={isVisble ? "/svg/eye.svg" : "/svg/not-eye.svg"}
                      width={24}
                      height={24}
                      alt="eye"
                      onClick={() => togglePassword(isVisble, "login-app")}
                    />
                  </div>
                </div>
                {/* <p v-if="showForgotPasswordAlert" className="flex items-center">
              <Image src="/svg/info-orange.svg" className="w-4 h-4 mr-1" />
              <span className="text-[#FE5000] text-xs">
                Reset password link has been sent to your email
              </span>
            </p> */}
                {/* <a
                  href="#"
                  className="float-right text-xs sm:text-sm text-[#949494] hover:underline"
                >
                  Forgot Password?
                </a> */}

                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-opacity-80 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
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
                  Log In
                </button>
                {loginError ? (
                  <small name="password" className="mt-1 text-xs text-red-600">
                    {loginError}
                  </small>
                ) : null}
                <div className="text-center text-xs sm:text-sm font-medium text-[#949494]">
                  Don&apos;t have an account,
                  <a
                    href="#"
                    className="text-black font-semibold hover:underline cursor-pointer"
                    onClick={() => setAuthType("register")}
                  >
                    Register
                  </a>
                </div>
              </form>
            ) : (
              <form
                onSubmit={(e) => handleSubmitRegister(e)}
                className="space-y-4 mt-6"
              >
                <div className="relative">
                  <Image
                    src="/svg/profile.svg"
                    height="24"
                    width="24"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                    alt="profile"
                  />
                  <input
                    type="text"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
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
                <div className="relative">
                  <Image
                    src="/svg/sms.svg"
                    height="24"
                    width="24"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                    alt="sms"
                  />
                  <input
                    type="email"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
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

                <div name="password" className="relative">
                  <Image
                    src="/svg/lock.svg"
                    height="24"
                    width="24"
                    alt="lock"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                  />
                  <input
                    id="regis-app"
                    type="password"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
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
                  <div className="absolute top-4 right-4 cursor-pointer">
                    <Image
                      src={isVisble ? "/svg/eye.svg" : "/svg/not-eye.svg"}
                      width={24}
                      height={24}
                      alt="eye"
                      onClick={() => togglePassword(isVisble, "regis-app")}
                    />
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/svg/globe.svg"
                    height="24"
                    width="24"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                    alt="country"
                  />
                  <select
                    id="countries"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl text-sm sm:text-base"
                    value={registerData.userCountry}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        userCountry: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="">Choose a country</option>
                    {countryList.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div name="mobile" className="relative">
                  <Image
                    src="/svg/call.svg"
                    height="24"
                    width="24"
                    alt="call"
                    className="absolute inset-y-0 top-3.5 left-3.5 pointer-events-none"
                  />
                  <input
                    type="number"
                    className="pl-12 p-3 w-full border border-[#CECECE] focus:ring-black focus:border-black rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-sm sm:text-base"
                    placeholder="Phone Number"
                    value={registerData.phoneNumber}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-opacity-80 disabled:bg-gray-600 disabled:border-gray-600 focus:ring-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
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
                  ) : null}{" "}
                  Register
                </button>
                {registerError ? (
                  <small name="email" className="mt-1 text-xs text-red-600">
                    {registerError}
                  </small>
                ) : null}

                <div className="text-center text-xs sm:text-sm font-medium text-[#949494]">
                  Already have an account,
                  <a
                    className="text-black cursor-pointer font-semibold hover:underline"
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
