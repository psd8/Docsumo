let baseUrl = process.env.NODE_ENV === 'development'
    ? process.env.DEV_API_URL
    : process.env.API_URL;

export const post = async(url, payload) => {
    try{
       let res = await fetch(baseUrl + url, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      let jsonres = await res.json();
      if(res.status >= 200 && res.status <= 299){
          return jsonres;
      }else{
        throw new Error(jsonres.message);
      }
    }catch(err){
        throw err;
    }
};
