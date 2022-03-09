/**
 * API service for user management
 *
 * @version 1.0.0
 * @author [Kumaresan Periyasamy]
 */

 import axios from "axios";


export class APIUserManagement {
  token: any;
  constructor() {
  }
  

  /** Executive Dashboard Login */
  userLogin(data: any,loginurl: any): Promise<any> {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        data: data
      };
      axios(loginurl, requestOptions)
        .then((resposne) => {
            resolve(resposne)
        })
        .catch((error) => {
          reject(error)
        })
     
    })
  }

}
