
search=document.querySelector("#btn");
result=document.querySelector("#result");
result1=document.querySelector("#result1");
coun=document.querySelector("#coun");

function getLatestNews(){
    fetch(url).then(resp=>resp.json())
              .then(data=>{
                    news = data["weather"];
                    var temp=data['main']['temp'];
                    var count=data['sys']['country'];
result1.innerHTML=`temperature:${temp}`;
coun.innerHTML=`country     :${count}`;
                    showAllnews();
    })
    .catch(error=>{
        console.log("While getting news :",error);
    })
}
function getcountry(){
    fetch(url).then(resp=>resp.json())
              .then(data=>{
                  
        news = data["sys"];
        show1();
    }).catch(error=>{
        console.log("While getting news :",error);
    })
}


search.addEventListener("click",e=>{
    e.preventDefault();
    
     var val=document.querySelector("#idweather").value;
     url=`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=4b26590bbd59d923bb728c3465df8e0d`;
    getLatestNews();
    //getcountry();
}
);
    
   function show1()
   {
    str1 =  `<ul class="list-group list-group-flush">`
    console.log('12345');
   for(let n1 of news)
   {
var p=`${n1.country}`;
str1=`${p}`;
   }
    result1.innerHTML=str1;
   }


    function showAllnews(){
        str =  `<ul class="list-group list-group-flush">`
        
        for(let n of news){
            var pac = `${n.main}`; 
            var ion = `${n.icon}`;
            if(pac=="Smoke"){
                str=`<h3>${pac}</h3>`;
                var x = document.createElement("IMG");
  x.setAttribute("src", "smoke.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
            } 
            else if(pac=="Mist")
            {
                str=`<h3>${pac}</h3>`;
                var x = document.createElement("IMG");
                x.setAttribute("src", "mist1.gif");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
            }
            else if(pac=="Clear")
            {
                str=`<h3>${pac}</h3>`;
                var x = document.createElement("IMG");

                x.setAttribute("src", "sky.png");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
            }
            else if(pac=="Haze")
            {
                str=`<h3>${pac}</h3>`;
                var x = document.createElement("IMG");
                x.setAttribute("src", "haze1.gif");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
            }
            else if(pac=="Fog")
            {
                str=`<h3>${pac}<h3>`;
                var x = document.createElement("IMG");
                x.setAttribute("src", "fog.gif");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("center");
                document.body.appendChild(x);
            }
            else if(pac=="Clouds")
            {
                str=`<h3>${pac}<h3>`;
                var x = document.createElement("IMG");
                x.setAttribute("src", "cloud1.gif");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
            
                document.body.appendChild(x);
            }
            else{
                str=`<h3>${pac}</h3>`;

            } 


        }
        
        result.innerHTML=`type       :${str}`;
      }
      
      
     
    
