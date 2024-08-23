class oeo {
    constructor(){
        this.api = "https://rate-api.oeo.li/v1"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async exchange_list(){
        let req=await fetch(`${this.api}/exchange`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async exchange_crypto(){
        let req=await fetch(`${this.api}/exchange_crypto`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {oeo};