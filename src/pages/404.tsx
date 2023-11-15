import {NextPage} from 'next';
import {BsArrowLeft} from "react-icons/bs";
import {useRouter} from "next/router";
import Image from "next/image";
import {Layout} from "@/components/layout";

const NotFoundPage: NextPage = ({}) => {
    const {back} = useRouter();

    return (
        <Layout title="Page not found" description="This page does not exist">
            <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-start md:px-8">

                <div
                    className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
                    <div className="flex-1 max-w-lg">
                        <Image
                            src="/illustrations/404.png"
                            alt=""
                            width={400}
                            height={0}
                            // sizes="500vw"
                            // className="w-full h-auto"
                            // layout="responsive"
                        />
                    </div>
                    <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
                        <h3 className="text-indigo-600 font-semibold">
                            Ошибка 404
                        </h3>
                        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                            Страница не найдена
                        </p>
                        <p className="text-gray-600">
                            Извините, но такой страницы не существует.
                        </p>
                        <button
                            className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
                            onClick={back}
                        >
                            <BsArrowLeft/> Назад
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;