import * as actionType from "./constants";

import { getTopBanners } from "@/services/recommend";

const changeTopBannersAction = (res) => ({
  type: actionType?.CHANGE_TOP_BANNERS,
  topBanners: res?.banners,
});

export const getTopBannersAction = () => {
  return async dispatch => {
    const res = await getTopBanners();
    dispatch(changeTopBannersAction(res));
  }
}
