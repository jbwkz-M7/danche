import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        // let loading;
        // if (options.data && options.data.isShowLoading !== false){
        //     loading = document.getElementById('ajaxLoading');
        //     loading.style.display = 'block';
        // }
        let baseApi = 'https://www.easy-mock.com/mock/5cd421124031143439b76a2a/mockapi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                // if (options.data && options.data.isShowLoading !== false) {
                //     loading = document.getElementById('ajaxLoading');
                //     loading.style.display = 'none';
                // }
                // console.log(response)
                // console.log(typeof response.status)
                if (response.status == '200'){
                    console.log(1)
                    let res = response.data;
                    console.log(res)
                    if (res.code == '0'){
                        resolve(res);

                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.message
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}