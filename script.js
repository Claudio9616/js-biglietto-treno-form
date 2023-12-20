// 1
const prezzo = document.getElementById('prezzo')
const userKm = document.getElementById('km')
const userAge = document.getElementById('age')
const button = document.getElementById('button')
const userName = document.getElementById('name')
// 2
const fixedPrice = 0.21
// 3
button.addEventListener('click', function(){
    // 4
    const userDistance = parseInt(userKm.value)
    const userEtà = userAge.value
    const userNome = userName.value.trim()
    // 5
    let totalPrice = fixedPrice * userDistance
    console.log(totalPrice)
    // 6
    let message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €'    
    // 7
    let discount = .20
    if (userEtà === 'minorenne' ){
             totalPrice -=  (totalPrice * discount)
             console.log('totalPrice (discount < 18): ', totalPrice)  
             message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
    } else if (userEtà === 'over-65') {
             discount = .40
             totalPrice -=  (totalPrice * discount)
             console.log('totalPrice (discount > 65): ', totalPrice) 
             message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
    }
    // 8
    prezzo.innerText = userNome + ' ' + message
})
