import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getTopBannersAction } from './store/actionCreators'


const TopBanner = memo(() => {
  // useSelector 取出state的hooks --- 第一个参数：回调 state => {}
  // 第二个参数 equalityFn 是否进行浅层比较（性能优化）， 默认是需要的
  const { topBanners } = useSelector(
    (state) => ({
      // 当数据转换为immutable时， 需要使用get获取数据
      // topBanners: state?.get('recommend')?.get('topBanners')
      topBanners: state?.getIn?.(['recommend', 'topBanners'])
    }),
    shallowEqual
  )
  // useDispatch  生成dispatch的hooks
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <div>      {topBanners?.map((item, index) => (
      <div key={index}>
        <h2>{index}</h2>
      </div>
    ))}</div>
  )
})

export default TopBanner