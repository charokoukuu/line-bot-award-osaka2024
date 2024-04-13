// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-l7MFen8bFg_GZBXl3BEGP4-QSZcZbWo",
  authDomain: "line-bot-award-osaka2024.firebaseapp.com",
  projectId: "line-bot-award-osaka2024",
  storageBucket: "line-bot-award-osaka2024.appspot.com",
  messagingSenderId: "1013799501550",
  appId: "1:1013799501550:web:f317f79b66ea808a04bdff",
  measurementId: "G-G0ETHG5QEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp, "gs://line-bot-award-osaka2024.appspot.com");

import * as Firestore from 'fireworkers';

export const db = await Firestore.init({
  uid: 'nnikudango',
  project_id: 'line-bot-award-osaka2024',
  client_email: 'firebase-adminsdk-y3q5d@line-bot-award-osaka2024.iam.gserviceaccount.com',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaRKIurBQ/KyXQ\nT5TCZ7jSKmtQyfQg+jEMbgZSir9EtcjWTYY8LPucFMyGIk9RN2uV1Ty5DmapaQgG\n45JuGG3BDZZ+Af5lzG/afiWQg6p1xSfKMi7pskqgsyvuYl7DH85eO0Fb+3ALLpZ9\nYrJmJWx5Lx/9EyBhRtGZuTf0eXzxCUGz8JHmkvrk+06QqtmY0Dxw0XVvtgdBlT8b\nAEAa30bsJREMRLhptgiWYGzC5MixhP3P2t3uEqDRn4+df0M3RQaNqsSCVQSl5H3w\nXd5DIWzH7R+MSyYQxi77oSGlJ3UYz6d7cz6EJDXIhCSZ6TDh7xEKbniQ+jJyIap9\nCJUwCwfbAgMBAAECggEAUdS6g0oDmz03g5ZafNo7OhwqONNGYli6q+DSIP8gv4dx\n4RqWkZgByx4nIcDaQOZIwRd9mRnTln8owcBvRTSGbYMFIX/o20yewOlbdwdOELJW\nfSF8YiR0gzQ5a7nYskoJ6l1H307wzlhslly66r3sIbDvysdxc9cDvSDqYA9uLsVq\nvT58r3Dk0E8oJ9gwdmQ/sfmRNx5KI1HGngX2ZyDJ/KuqDqW7Ut6TLjop1OnZoWju\n+5fewnuZKd2hlOAY93JhxCU1djPGs+lb3N9hcLUAhlOD9zd7prq44dSTPTHDhQet\nze1aaokbbwBabwvdYUdZm+3z5QAFRHr1derygKHrOQKBgQD3WJ4IJx5u2lj5/2xD\nwWL/YkAFCL+L6MWvH+YeSPgeki/cflR8mhshNVhTNMVWDgSDL2LJ17gp1Sc2DAM+\nc66kXVbWAblHV+UetKYygx7g4xjeE3bPUo0tTC5SU5outxXXCgqQN2pcZuvyFzLl\neFPf1XZCSOTyHN7kQ1tiW19ImQKBgQDh55NNpYmEkFS8Ny3Wuu21hN+EXkdN9et1\nv3fWDVIM1dKQoQyO2BepD1KAU85J3yO5mVa6kZ3nywdl54HNhE3UIXMlVqdeOWIG\n0gj3kslxVm6oNMM+HZQj8UVch5cHtASqgZ6FzV59kAttSQOGs0l3fZWKbl0BEEzi\n9lGVy3YYkwKBgQCEaYBQRQDZvzIaw04mB4UDyokTKNfCAl6xnZYHaHDLjN7qXwbD\nnYwgfvpFsN5jbyWjRN7RxxXj7yQKnuutpyg6/WzbLBkPxFH32iWOrPr+0RQi7rCP\n1FWXhkzV7cOAdqrOb6WwBrp9tOtismCgz4W3MgMZAQTvR91avWRShy+/IQKBgCTL\nBNDWr0kqAMMO8aZRl7nCxGzYtiBad1kcMDZqwPxaLwtjT5pMU74zQqqn+6dIcpce\nBGQqp19DUBcm15tTeyGbuRdRv7y29+JIfzFjdO/Ctg8rWMlbI++esj9Zzh1xEnl6\n1wjP5B3rQhEwnSRpOwP9Lkf3paowr3UfzTXqh3eFAoGBAMpn3neek3a4y2+ehFb7\nKAV9hXOuCfpgk7lOatBPvZ/HxHAnSKcoAaWszQXBsMl0GUPqS2gVE1uzahKUc2qB\nZ1ZcXeVrfZOYJvbHN6ujxiPQjBNBpcMxP0iIfbzSE/QkooVV7rE0PRy5nZ/TAH+j\ndDD54AAekS4WJZYBEpxsLklF\n-----END PRIVATE KEY-----\n',
  private_key_id: '06b221b78199b7a359f7b79a99e4db0112f1a893',
});