
import axios from 'axios'

export const getBooks=async()=> {
    try{
    const reponse=await axios.get("https://669ba47f276e45187d36124f.mockapi.io//api/v1/getbooks/test")
    console.log("first",reponse)
    return reponse.data
    }catch(e){console.error("erreur",e)}
 
}
export const getStory=async()=> {
    try{
    const response=await axios.get("https://669ba47f276e45187d36124f.mockapi.io/api/v1/getbooks/story")
    console.log("second",response)
    return response.data
    }catch(e){console.error("erreur",e)}
 
}


