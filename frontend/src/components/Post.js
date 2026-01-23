import React from 'react'

function Post(props) {
  return (
    <>
    <div className="col-3 d-flex">
    <div className="post">
        <div className="user">
            <p className='h3'>{props.data.createdBy}</p>
            <p>{props.data.content}</p>
        </div>

    </div>
    </div>
    </>
  )
}

export default Post
