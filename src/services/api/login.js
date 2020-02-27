import { ApiService } from '@apicase/services'
import fetch from '@apicase/adapter-fetch';

const ApiRoot = new ApiService({
    adapter: fetch, 
    url: 'https://www.api.sitiospy.com',
    // url: 'http://127.0.0.1:8000',
    mode: 'cors',
    method: 'POST',
}).on('fail',     res => alert('Failed but it is OK', res))
  .on('error',    err => alert('No Internet Connection', err))
  .on('cancel',   (can) => alert('Request was cancelled', can))

export default{

  newUser(name){
    return ApiRoot.doRequest({
      url: 'login/newUser',
      query: { 
        username: name
      }
    }).then(response => {
      return response.result.body
    })
  },

  setPassword(pass, id){
    
    return ApiRoot.doRequest({
      url: 'login/setPassword',
      query: { 
        password: pass, 
        person_id : id 
      },
    }).then(response => {
      return response.result.body
    })
  },

  authentication(user, pass){
    
    return ApiRoot.doRequest({
      url: 'login/authentication',
      query: { 
        password: pass, 
        username : user 
      },
    }).then(response => {
      return response.result.body
    })
  },

  getFaculty(id){

    return ApiRoot.doRequest({
      url: 'facultades',
      query: {
        id 
      }
    }).then(response => {
      return response.result.body
    })
  },
}