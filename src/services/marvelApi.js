import axios from 'axios'
import md5 from "md5";

const publicKey = '9eacce304cbc265b91611538335ba2d1';
const privateKey = 'd41ef60ad09e3667303e17bbaee30c8f88dc200b';
const ts = Number(new Date())
const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
    params: {
        ts,
        apikey: publicKey,
        hash
    }
});

export default api
