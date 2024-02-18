import axios from "axios";
import { URL_API } from "./url";

const app = axios.create({
    baseURL: URL_API,
});

export default app;
