var nodegeoCoder=require('node-geocoder');

let options={
    provider:'openstreetmap'
}

let geocoder=nodegeoCoder(options);
//geocoder.reverse({lat:17.52,lon:78.26})
geocoder.geocode('yapral')
.then((res)=>
{
console.log(res)
})
.catch((err)=>{
    console.log(err)
});

