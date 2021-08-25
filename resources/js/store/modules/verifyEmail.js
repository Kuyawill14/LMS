import axios from 'axios'
const actions = {
  
    verifyEmail(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .get('/api/email-verification', {
                    params: payload
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
   

};
export default {
    actions,
  
};