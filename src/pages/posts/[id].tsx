import {NextPage} from 'next';
import {useRouter} from "next/router";

const PostPage: NextPage = ({}) => {
    const {asPath, pathname} = useRouter();
    console.log(asPath, pathname);

    return (
        <div>

        </div>
    );
};

export default PostPage;