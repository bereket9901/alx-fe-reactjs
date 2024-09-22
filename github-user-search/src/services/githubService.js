import axios from 'axios'
const fetchUserData=()=>{
    return axios.get("https://api.github.com/users/{username}")
}

export default fetchUserData;