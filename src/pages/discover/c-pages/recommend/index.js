import React, { memo, useEffect } from 'react'

import { RecommendWrapper } from './style'
import { getTopBannersAction } from './store/actionCreators'
import { connect } from 'react-redux'

function HYRecommend({ getBanners, topBanners }) {
  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <RecommendWrapper>
      {topBanners?.map((item, index) => (
        <div key={index}>
          <h2>{index}</h2>
        </div>
      ))}
    </RecommendWrapper>
  )
}
const mapStateToProps = (state) => ({
  topBanners: state?.recommend?.topBanners
})

const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannersAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend))

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
