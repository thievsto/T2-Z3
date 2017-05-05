function fecz(url, fnSukces, fnBlad){
    
    var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
   xhr.onreadystatechange = function(){
       if (this.readyState === 4 && this.status === 200){
           return fnSukces(this.response);        
       } else {
           return fnBlad(this.status);
       }
   }
       xhr.send(null);
}  
   	fecz(" https:// jsonplaceholder.typicode.com/users", function(data){
			console.log("Sukces");
			cosole.log(data);
		}, function(err){
			console.log("Błąd!");
			console.log(err);
		});
    
