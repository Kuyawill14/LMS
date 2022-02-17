import axios from 'axios'
const actions = {
  
    verifyEmail(ctx, payload) {
       /*  return new Promise((resolve, reject) => {
            axios
                .get('/api/email-verification', {
                    params: payload
                })
                .then((response) => {
                    return response.data;
                    //console.log(response.data);
                    //resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        }) */

        axios.get('/api/email-verification', {
            params: payload
        }).then((response)=>{
            return response;
        }).catch((e)=>{

        })
    },
   

};
export default {
    actions,
  
};