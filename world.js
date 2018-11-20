window.onload=function(){
    var lookup_button=document.getElementById("lookup");
    var country_search=document.getElementById("country");
    var search_result=document.getElementById("result");
    
    lookup_button.addEventListener("click", function(){
        let request=new XMLHttpRequest();
        request.onreadystatechange=function(){
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status===200){
                    search_result.innerHTML=request.responseText;
                }
            }
        }
        request.open('GET',"world.php?country",true);
        request.send();
    });
}