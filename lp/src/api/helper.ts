import axios from "axios";
import qs from 'qs';

export const postEmail = async (email: string) => {
    const data = {
        email: email,
    };

    const options = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    try {
        const response = await axios.post('https://script.google.com/macros/s/AKfycbyDGc2WusfSbmyTcwNsDR0yp3hT-Is0NK2ya_qW0jDHrLWOdt5GXQIcM_Pf7PTmLV5o/exec', qs.stringify(data), options);
        return response;
    } catch (error) {
        console.error(error);
    }
};
