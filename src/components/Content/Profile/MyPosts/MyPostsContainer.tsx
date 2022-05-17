import {addPostAC} from "../../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state:any) => {

    return {
        postData: state.profilePage.posts
    }

}
const mapDispatchToProps = (dispatch: any) => {

    return {
        addPost: (value: string) => {
            let action = addPostAC(value)
            dispatch(action)
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);