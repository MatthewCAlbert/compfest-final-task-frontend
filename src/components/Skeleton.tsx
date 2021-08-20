import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <>
    <ContentLoader viewBox="0 0 420 100">
      <rect x="50" y="17" rx="4" ry="4" width="500" height="15" />
      <rect x="0" y="45" rx="3" ry="3" width="500" height="13" />
      <rect x="0" y="62" rx="3" ry="3" width="500" height="13" />
      <rect x="0" y="79" rx="3" ry="3" width="500" height="13" />
    </ContentLoader>
    <ContentLoader viewBox="0 0 420 100">
      <rect x="50" y="17" rx="4" ry="4" width="500" height="15" />
      <rect x="0" y="40" rx="3" ry="3" width="500" height="13" />
      <rect x="0" y="57" rx="3" ry="3" width="500" height="13" />
      <rect x="0" y="74" rx="3" ry="3" width="500" height="13" />
    </ContentLoader>
    </>
  )
}

export default Skeleton
