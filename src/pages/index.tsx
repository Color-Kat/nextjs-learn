import {GetStaticProps, NextPage} from 'next';
import {Home} from "@/pageComponents/Home/Home.tsx";
import {IPost} from "@/interfaces/post.interface.ts";
import {PostsService} from "@/services/posts.service.ts";

const HomePage: NextPage<{ posts: IPost[] }> = ({posts}) => {

    return (<Home posts={posts}/>);
};

export const getStaticProps: GetStaticProps<{ posts: IPost[] }> = async () => {
    const posts = await PostsService.getAll();

    return {
        props: {posts},
        revalidate: 60
    };
};

// export const getServerSideProps: GetServerSideProps<{ posts: IPost[] }> = async () => {
//     const posts = await PostsService.getAll();
//
//     return {
//       props: {posts}
//     };
// }

export default HomePage;