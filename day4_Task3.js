
var request1 = new XMLHttpRequest()
request1.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request1.send();
request1.onload = function(){

    var data = JSON.parse(request1.response);
  
    for(var i=0;i<data.length;i++){
         console.log(`Country Name is : ${data[i].name} , region is : ${data[i].region} , sub region is : ${data[i].subregion} and population is : ${data[i].population}`);      
      }
};