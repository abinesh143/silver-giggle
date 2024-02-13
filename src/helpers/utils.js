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
      "appDeisgn",
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
