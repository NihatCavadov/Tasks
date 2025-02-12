

let productsDiv = document.querySelector(".product-wrapper")

async function Getdatas() {
    let result = await axios.get("https://northwind.vercel.app/api/suppliers")


    for (i = 0; i < result.data.length; i++) {


        productsDiv.innerHTML += `
                     <div class="products">
                  
                         <ul class="card-title">
                         <li>${result.data[i].companyName}</li>
                         <li>${result.data[i].contactName}</li>
                         <li>${result.data[i].contactTitle}</li>
                         </ul>
                                          

                         <br>
                         <p class="card-text">
                        
                         <ul>
                         <li>${result.data[i].street}</li>
                         <li>${result.data[i].city}</li>
                         <li>${result.data[i].region}</li>
                         <li>${result.data[i].postalCode}</li>
                         <li>${result.data[i].country}</li>
                         <li>${result.data[i].phone}</li>
                         </ul>

                         </p>
                         <br>
                         <div class="prbutton">
                             <button>View</button>
                         </div>
                    </div>`

        //         let colDiv = document.createElement("div")
        //         let productDiv = document.createElement("div")
        //         let bottomDiv = document.createElement("div")
        //         let h3 = document.createElement("h3")
        //         let span = document.createElement("div")
        //         let button = document.createElement("button")

        //         h3.textContent = result.data[i].companyName
        //         span.textContent = result.data[i].contactName
        //         button.textContent = "View"

        //         bottomDiv.append(h3, span, button)
        //         productDiv.append(bottomDiv)
        //         colDiv.append(productDiv)
        //         productsDiv.append(colDiv)








    }


}

Getdatas()

// Inner.Html isledi ancaq TextContent normal islemedi
// address in ozunu object kimi gosterir tek tek icindekileri yazanda ise undefined