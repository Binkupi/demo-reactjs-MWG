//export const getProfileFetch = () => {
//    return dispatch => {
//        const token = localStorage.token;
//     if (token) {
//       return fetch("http://localhost:3000/api/v1/profile", {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       })
//         .then(resp => resp.json())
//         .then(data => {
//           if (data.message) {
//             localStorage.removeItem("token")
//           } else {
//             dispatch(loginUser(data.user))
//           }
//         })
//     }
//   }
// }

export const CallApi = () => {
    return dispatch => {
        return fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            dispatch(data);
        })
        .catch(console.log)
    }
}