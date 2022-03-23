async function display(){
    const response=await fetch(url);
    var data =await response.json();
    return Promise.resolve(data)
}

}