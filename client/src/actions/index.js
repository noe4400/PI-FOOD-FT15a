import axios from 'axios';

export function getDietTypes {
        return function (dispatch) {
            return axios.get('http://localhost:3001/types')
                        .then(response =>{
                               dispatch({
                                type: 'GET_DIET_TYPES',
                                payload: response.data
                               }                           

                               ) 

                        })
                        .cath(err=>console.log(err));
        }
}