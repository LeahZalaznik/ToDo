import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5079";
axios.interceptors.response.use(
  response=>response,
  err=>{
    console.log("error caught by interceptor:", err);
    return Promise.reject(err);
    
  }
)
export default {
  getTasks: async () => {
    const result = await axios.get(``)    
    return result.data;
  },

  addTask: async(name)=>{
    const result = await axios.post(``,{name,isComplete:false})    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    const result = await axios.put(`/${id}?isComplete=${isComplete}`)    
    return result.data;
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`/${id}`)    
    return result.data;
  }
};
