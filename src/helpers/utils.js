import Swal from "sweetalert2";
import { DateTime } from "luxon";

export const appMakerLogout = async () => {
  localStorage.removeItem("appMaker");
  localStorage.removeItem("appMakerPro");
  window.location.href = "/";
};

export const getItemLocalStorage = (key) => {
  const data = localStorage.getItem("appMakerPro");
  const setting = data ? JSON.parse(data) : null;
  if (!key) {
    return setting;
  }
  return setting && setting[key] ? setting[key] : null;
};

export const setItemLocalStorage = (key, value) => {
  const data = localStorage.getItem("appMakerPro");
  const setting = data ? JSON.parse(data) : {};

  if (
    [
      "appInfo",
      "appDesign",
      "appSetting",
      "appNotification",
      "appAds",
      "appReview",
    ].includes(key)
  ) {
    setting[key] = value;
  }

  localStorage.setItem("appMakerPro", JSON.stringify(setting));
};

export const toastProvider = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: icon ? icon : "success",
    title: title ? title : "Saved Successfully",
  });
};

export const currentTime = () => {
  const now = DateTime.local();
  const currentTime = now.toFormat("dd/LL/yyyy,HH:mm");
  const formatedTime = currentTime.split(",")
  return (
    <p className="text-sm sm:text-lg xl:text-xl">
      {formatedTime[0] || '06/02/2024'},{' '}
      <span className="font-semibold">{formatedTime[1] || '18:26'} ⏰</span>
    </p>
  );

  return now.toFormat("dd/LL/yyyy,HH:mm");
};
