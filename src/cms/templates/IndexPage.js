import React from 'react'
// import BlogPost from '../../templates/blog-post'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <code><pre>
        {data}
      </pre></code>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview

