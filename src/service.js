import axios from 'axios';
axios.defaults.baseURL =process.env.REACT_APP_URL;
axios.interceptors.response.use(
  response=>response,
  err=>{
    console.log("error caught by interceptor:", err);
    return Promise.reject(err);
    
  }
)
export default {
  getTasks: async () => {
    const result = await axios.get('')    
    return result.data;
  },

  addTask: async(name)=>{
    console.log(name);
    
    const result = await axios.post(`?name=${name}`)    
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
