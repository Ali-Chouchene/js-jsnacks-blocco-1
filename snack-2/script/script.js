/*
SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.
*/

const guestList = ["leonardo", "ali", "broly", "gatsby", "alex"];



const nameElement = document.getElementById("name");
const login = document.getElementById("btn");
const guard = document.getElementById("no");
const gatsby = document.getElementById("yes");

login.addEventListener("click", function () {
    let isAllowed = false;

    for (let i = 0; !isAllowed && i < guestList.length && !isAllowed; i++) {
        const currentName = guestList[i];

        if(currentName === nameElement.value) {
            isAllowed = true;
                                                            
        } else if  (currentName !== nameElement.value) {

        }


    }
    console.log(isAllowed)
    result = isAllowed ? gatsby.classList.remove("d-none") ||  guard.classList.add("d-none"): guard.classList.remove("d-none") || gatsby.classList.add("d-none");
})




