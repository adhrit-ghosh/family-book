var reasons=[
    "Adhrit Ghosh","Kavish Ghosh","Lucy Ghosh","Biplab Ghosh" 
    ];
    var imgs=[
      "me.jpg","kavish.jpg","mom.jpg","dad.jpg"
    ];
    var i=0;
    function click(){
      document.getElementById("name").innerHTML=reasons[i];
    
       document.getElementById("images").src=imgs[i];i++; 
       
    }