import axios from "axios";
import {IPost} from "@/interfaces/post.interface.ts";

const API_URL = 'https://jsonplaceholder.org';

axios.defaults.baseURL = API_URL;

export const PostsService = {
    async getAll() {
        const {data} = await axios.get<IPost[]>(`/posts`);
        return data;
    },
    async getById(id: string) {
        const {data} = await axios.get<IPost>(`/posts/${id}`);
        return data;
    }
};