import axios from 'axios'

export function request(config) {
    //创造axios的实例
    const instance = axios.create({
            baseURL: "http://152.136.185.210:8000/api/n3",
            timeout: 5000
        })
        //请求拦截的作用
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
            // console.log(res);
            return res.data
        }, err => {
            console.log(err);

        })
        //发送真正的网络请求
    return instance(config)
}