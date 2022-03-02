import api from "./api";

export const getTopBanners = () => {
  return api.get({
    url: "/banner",
  });
};
