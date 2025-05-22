import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function Loading({
  blurBackground = true,
  fullScreen
}: {
  blurBackground?: boolean // optional, default to false
  fullScreen?: boolean // optional, default to false
}) {
  return (
    <>
      {blurBackground ? (
        <div className="bg-white/30 backdrop-saturate-50 absolute left-0 top-0 w-full h-full z-10">
          <Spin
            className="spin absolute left-[50%] top-[50%]"
            fullscreen={fullScreen}
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          ></Spin>
        </div>
      ) : (
        <Spin
          className="spin absolute left-[50%] top-[50%]"
          fullscreen={fullScreen}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        ></Spin>
      )}
    </>
  )
}
