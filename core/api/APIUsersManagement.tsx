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

  getOSCInfo(): Promise<any> {
    let url = 'http://192.168.42.1:80/osc/info'
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
  

  getOSCState(): Promise<any> {
    let url = 'http://192.168.42.1:80/osc/state'
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json;charset=utf-8");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("X-XSRF-Protected", "1");
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      axios(url, requestOptions)
        .then((resposne) => {
            resolve(resposne)
        })
        .catch((error) => {
          reject(error)
        })
     
    })
  }

  takePicture(): Promise<any> {
    let data = {
      "name": "camera.takePicture"
    }
    let url = 'http://192.168.42.1:80/osc/commands/execute'
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json;charset=utf-8");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("X-XSRF-Protected", "1");
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        data: data
      };
      axios(url, requestOptions)
        .then((resposne) => {
            resolve(resposne)
        })
        .catch((error) => {
          reject(error)
        })
     
    })
  }

  getStatus(): Promise<any> {
    let data = {
      "id": "001996"
    }
    let url = 'http://192.168.42.1:80/osc/commands/status'
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json;charset=utf-8");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("X-XSRF-Protected", "1");
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        data: data
      };
      axios(url, requestOptions)
        .then((response) => {
          if(response.state.data == 'done') {
            resolve(response)
          } else {
            this.getStatus()
          }            
        })
        .catch((error) => {
          reject(error)
        })     
    })
  }

  

}
