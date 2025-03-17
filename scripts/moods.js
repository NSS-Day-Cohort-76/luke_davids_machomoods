import {database} from "./database.js"

export const makeMoods = () => {
    let HTMLString = ""
    for (const item of database) {
        HTMLString += `
        <section class="mood">${item.name}
        <img class="moodImg" alt="${item.text} image" src="${item.imageURL}">
            <div>
                <h3 class="machoAdvice">Macho Advice:</h3>
                <ul>
                    <li>${item.quotes[0]}</li>
                    <li>${item.quotes[1]}</li>
                </ul>
            </div>
        </section>`
        
    }
    return HTMLString

}