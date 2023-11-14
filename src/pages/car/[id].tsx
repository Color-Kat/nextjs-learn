import {NextPage} from 'next';
import {useRouter} from "next/router";

const CarPage: NextPage = ({}) => {
    const {asPath, pathname} = useRouter();
    console.log(asPath, pathname);

    return (<div>
        <h1>Car Page</h1>
    </div>);
};

export default CarPage;