import React from 'react'
import { startCircle } from '../../../utils/icons'
import Comment from './Comment'

const CommentsContainer = () => {
  return (
    <div className='comment-container'>
      <div className="icon">
              {startCircle}
  
      </div>
        <div className="commetns">
           { [1,1,1,1,1,1].map((comment)=>(
             <Comment />
            ))}
            <div className="loadMore">
            Show 10+ more reviews
            </div>
        </div>
        
    </div>
  )
}

export default CommentsContainer