import {database} from "./database.js"

export const makeMoods = () => {
    let HTMLString = ""
    for (const item of database) {
        HTMLString += `
        <section class="mood"><h2>${item.name}</h2>
        <img class="moodImg" alt="${item.text} image" src="${item.imageUrl}">
            <div class="machoAdvice">
                <div class="machoAdviceTitle">
                    <h3>Macho • Advice •</h3>
                </div>
                <div class="machoAdviceQuotes">
                    <ol>
                        <li>${item.quotes[0]}</li><br>
                        <li>${item.quotes[1]}</li>
                    </ul>
                </div>
            </div>
        </section>`
        
    }
    return HTMLString
}