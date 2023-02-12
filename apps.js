const link = document.querySelector('link[rel="monetization"]')

let total = 0

let scale

link.addEventListener("monetization", (e) =>{

    console.log("yey monetization is on")

    

    const monetizationDisplay = document.getElementById("monetization-info")

    monetizationDisplay.textContent = "Monitized"

    monetizationDisplay.classList.add("monetized")

    monetizationDisplay.classList.remove("not-monitized")

    

    document.getElementById("exclusive").classList.remove("hidden")

    

    const {amount, assetCode, assetScale} = e

    

    if (total === 0) {

        scale = assetScale 

        document.getElementById("currency"). innerText = assetCode 

    }

    

    total += Number(amount)

    

    const formattedTotal = (total * Math.pow(10, -scale)).toFixed(scale)

    document.getElementById("total").innerText = formattedTotal 

})

