import axios from "axios";

export const addVideo= async (data) => {
    return await axios.post("https://media-player-server-1-2yzz.onrender.com/videos", data);
};
export const getVideos=async()=>{
    return await axios.get('https://media-player-server-1-2yzz.onrender.com/videos')
}
export const deleteVideo=async(id)=>{
    return await axios.delete(`https://media-player-server-1-2yzz.onrender.com/videos/${id}`)
}
export const addCategory=async(data)=>{
    return await axios.post("https://media-player-server-1-2yzz.onrender.com/category",data)
}
export const getCategories=async(data)=>{
    return await axios.get("https://media-player-server-1-2yzz.onrender.com/category",data)
}
export const deleteCategory=async(id)=>{
    return await axios.delete(`https://media-player-server-1-2yzz.onrender.com/category/${id}`)
}
export const addHistory=async(data)=>{
    return await axios.post(`https://media-player-server-1-2yzz.onrender.com/history`,data)
}
export const getHistory=async()=>{
    return await axios.get(`https://media-player-server-1-2yzz.onrender.com/history`)
}
export  const deleteHistory=async()=>{
    return await axios.delete(`https://media-player-server-1-2yzz.onrender.com/history/${id}`)
}
export  const updateCategory=async(id,data)=>{
    return await axios.put(`https://media-player-server-1-2yzz.onrender.com/category/${id}`,data)
}
export const checkEmailApi=async(email)=>{
    return await axios.get(`https://media-player-server-1-2yzz.onrender.com/users?email=${email}`)
}
export const registerApi=async(data)=>{
    return await axios.post(`https://media-player-server-1-2yzz.onrender.com/users`,data)
}
export const loginApi=async(email,password)=>{
    return await axios.get(`https://media-player-server-1-2yzz.onrender.com/users?email=${email}&password=${password}`)
}

