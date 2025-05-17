  function one(){
    const username="sameer"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website); //this can not be used as website is defined inside two and is refereed outuside it so can not be callled

    two()
    
  }
  one()