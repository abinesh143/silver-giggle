import Swal from 'sweetalert2'

export const appMakerLogout = async () => {
  localStorage.removeItem("appMaker");
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
