import axios from "axios";

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key:"3e19b7d9c4ae4fa5ce86714f41036a5d",
    language:"ko-KR"
  }
})

export default instance;