async function weather(){
    let city=document.getElementById("weather");
    //city=document.getElementById("weather");    
    let  url='https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=12b1aee790410d75b31019921c556ae4';
    const response =await fetch(url);
    let data =await response.json();
    console.log(data);
    let {
        main :{ temp,temp_min,temp_max,humidity}}=data;
        console.log("temp :"+temp);
        console.log("temp_min :"+temp_min);
        console.log("temp_max :"+temp_max);
        console.log("humidity :"+humidity);
}
