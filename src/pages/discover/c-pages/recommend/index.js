import React, { memo } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner';

function Recommend(props) {


  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
  )
}
// const mapStateToProps = (state) => ({
//   topBanners: state?.recommend?.topBanners
// })

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction())
//   }
// })

export default memo(Recommend)

// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       <h2>HYRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
