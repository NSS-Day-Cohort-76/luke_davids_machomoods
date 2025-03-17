import { makeMoods } from "./moods.js"
const container = document.querySelector('.container')

const render = document.getElementById("container")
render.innerHTML = makeMoods()