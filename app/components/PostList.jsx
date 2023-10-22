import Post from '../components/Posts'

const PostList = ({posts}) => {
  return (
    <ul>
        {
            posts.map(post => (
                <Post key={post.id} post={post} />
            ))
        }
    </ul>
  )
}

export default PostList