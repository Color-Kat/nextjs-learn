import React, {FC, memo} from 'react';
import {IPost} from "@/interfaces/post.interface.ts";
import {PostItem} from "@/components/post/PostItem.tsx";
import {Layout} from "@/components/layout";

interface PostProps {
    post?: IPost;
}

export const Post: FC<PostProps> = memo(({post}) => {

    if (!post) return null;

    return (
        <Layout title={post.title} description={post.content}>

            <div className="page-container pt-16 gap-6 flex flex-col">
                <h1 className="text-4xl font-bold text-gray-500">Post Page</h1>
                <PostItem post={post} key={post.id}/>
            </div>
        </Layout>
    );
});