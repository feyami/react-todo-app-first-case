

function request(url, data = false, method = "GET") {
  
    return new Promise(async (resolve, reject) => {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' ,'Accept': 'application/json'} //without this line  server get req.body empty
        }
        if (data && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(data)
     
     
    }
     
      
        const response = await fetch(process.env.REACT_APP_API_KEY + url, options).catch((error) => {
          
          });
        
     
        const result = await response.json()
         
        if (response.ok) {
            resolve(result)
           
        }
        else {
            reject(result)
        }
    });
}

export const post = (url, data) => request(url, data, 'POST');
export const get = url => request(url);
export const put = (url, data) => request(url, data, 'PUT');
export const remove = (url) => request(url, '', 'DELETE');
