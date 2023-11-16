import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {IPost} from "@/interfaces/post.interface.ts";
import {PostsService} from "@/services/posts.service.ts";
import {Post} from "@/pageComponents/Post/Post.tsx";

const PostPage: NextPage<{ post: IPost }> = ({post}) => {

    return (<Post post={post}/>);
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await PostsService.getAll();

    return {
        paths: posts.map(post => ({
            params: {id: post.id.toString()}
        })),
        fallback: 'blocking'
    };
};


export const getStaticProps: GetStaticProps<{ post: IPost }> = async ({
                                                                          params
                                                                      }) => {
    const post = await PostsService.getById(String(params?.id));

    return {
        props: {post},
        revalidate: 60
    };
};


export default PostPage;