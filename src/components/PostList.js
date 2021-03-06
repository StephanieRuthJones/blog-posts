import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'
class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    renderPosts = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            )
        })
    }
    render() {
        console.log("this.props", this.props)
        return <div className="ui relaxed divided list">
            {this.renderPosts()}
        </div>
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}
export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList)