module.exports = {
    get: function(url, cb){
        fetch(url)
        .then((data)=>{
            const result = data.json();
            result.then(res=>{
                return cb(null, res)
            })
            
        })
        .catch(cb)
    }
}