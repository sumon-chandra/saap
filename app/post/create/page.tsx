"use client"
import PostForm from "./components/PostForm"

const CreatePost = () => {
    return (
        <main className="flex flex-col gap-10">
            <h3 className="lg:text-2xl text-lg font-semibold text-saap-text-primary dark:text-saap-text-dark-primary">Create a new post</h3>
            <PostForm />
        </main>
    )
}

export default CreatePost
