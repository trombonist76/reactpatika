import axios from "axios";

export default async function getData (userId){
    const {data:userData} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {data:userPosts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    userData["posts"] = userPosts
    return userData
}

