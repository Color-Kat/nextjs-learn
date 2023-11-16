import {Inter} from 'next/font/google';
import {FC} from "react";
import {Layout} from "@/components/layout";
import {PostsList} from "@/modules/Post/PostsList.tsx";
import {IPost} from "@/interfaces/post.interface.ts";

const inter = Inter({subsets: ['latin']});

export const Home: FC<{ posts: IPost[] }> = ({posts}) => {
    return (
        <Layout title="Main page" description="Description">

            <div className="page-container pt-16 gap-6 flex flex-col">
                <h1 className="text-4xl font-bold text-gray-500">Posts:</h1>
                <PostsList posts={posts}/>
            </div>
        </Layout>
    );
};
