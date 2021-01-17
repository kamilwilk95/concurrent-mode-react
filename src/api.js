import axios from 'axios';
import { unstable_createResource as createResource } from "react-cache";

const axiosBase = axios.create({
    baseURL: 'http://localhost:3000/',
    responseType: 'json'
})

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            console.log('success');
            status = "success";
            result = r;
        },
        e => {
            console.log('error')
            status = "error";
            result = e;
        }
    );

    return {
        read() {
            if (status === "pending") {
                console.log('throw');
                throw suspender;
            } else if (status === "error") {
                console.log('throw2');
                throw result;
            } else if (status === "success") {
                console.log('result');
                return result;
            }
        }
    };
}

export class Api {
    static async getUsers() {
        console.log('getUser')
        return (await axiosBase.get('/users')).data;
    }

    static getUsersForSuspense() {
        console.log('getUsersForSuspense')
        return wrapPromise(axiosBase.get('/users').then(d => d.data))
    }

    static getUsersForSuspenseFilter(value) {
        console.log('getUsersForSuspenseFilter')
        return wrapPromise(axiosBase.get('/users').then(d => d.data.filter(u => u.first_name.startsWith(value))))
    }
}