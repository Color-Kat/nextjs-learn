import React, {FC, memo} from 'react';
import Image from "next/image";
import {IPost} from "@/interfaces/post.interface.ts";
import Link from "next/link";

interface PostItemProps {
    post: IPost;
}

export const PostItem: FC<PostItemProps> = memo(({post}) => {


    return (
        // <Link href={`/posts/${post.id}`}>
        <div className="flex items-center justify-betwee gap-5 bg-white p-7 rounded-2xl">
            <Image src={post.image} alt={post.title} height={300} width={300}/>

            <div>
                <h1>{post.title}</h1>
                <p>{post.content.slice(0, 100)}...</p>
                <Link href={`/posts/${post.id}`}>Read more</Link>
            </div>

        </div>
        // </Link>
    );
});