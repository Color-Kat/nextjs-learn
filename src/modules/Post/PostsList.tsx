import React, {FC, memo} from 'react';
import {IPost} from "@/interfaces/post.interface.ts";
import {PostItem} from "@/components/post/PostItem.tsx";

interface PostsListProps {
    posts?: IPost[];
}

export const PostsList: FC<PostsListProps> = memo(({posts}) => {


    return (
        <ul className="flex gap-6 flex-col">
            {posts && posts.map(post => (
                <PostItem post={post} key={post.id}/>
            ))}
        </ul>
    );
});