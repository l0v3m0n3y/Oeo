# Oeo
JavaScript library for oeo.li
# main
```js
async function main(){
    const {oeo} = require('./oeo');
    const rate= new oeo();
    let req=await rate.exchange_list()
    console.log(req)
}
main()
```
