import CaloriePost from './CaloriePost'

const CaloriePostList = ({posts}) => {
  return (
    <ul>
        {
            posts.map(post => (
                <CaloriePost key={post.id} post={post} />
            ))
        }
    </ul>
  )
}

export default CaloriePostList