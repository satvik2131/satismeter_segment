document.getElementById("form").onsubmit = (e)=>{
    e.preventDefault();
    console.log("works");

   
    
    //For anonymous user
    // analytics.identify({
    //     subscriptionStatus: 'inactive'
    //   });



    //For known user
    // analytics.identify("97980cfea0067", {
    //     name: "Satvik Kushwaha",
    //     email: "satvik213161@gmail.com",
       
    //   });

    // analytics.track("User Registered", {
    //     plan: "Pro Annual",
    //     accountType: "Facebook"
    //   });
}