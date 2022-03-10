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
  

  // /** Executive Dashboard Login */
  // getOSCInfo(data: any,loginurl: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     var requestOptions: any = {
  //       method: "GET",
  //       headers: myHeaders,
  //       redirect: "follow",
  //       data: data
  //     };
  //     axios(loginurl, requestOptions)
  //       .then((resposne) => {
  //           resolve(resposne)
  //       })
  //       .catch((error) => {
  //         reject(error)
  //       })
     
  //   })
  // }

  getOSCInfo(url: any): Promise<any> {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json;charset=utf-8");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("X-XSRF-Protected", "1");
      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch(url, requestOptions)
      .then((response) => {
        resolve(response)
      })
      .catch(function (error: any) {
        reject(error);
      })

    })
  }

}
