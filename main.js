/* 
Change the font color of the paragraph to light blue.✅
Change the font size of the heading to 48px.✅
Change the text of the paragraph to be the following Hipster Ipsum: ✅
Change the 13th item to be half transparent. (Look this up!) ✅
 Change the 3rd item's text to say:
 I say, "Hi!"✅
 Change the image below the list to be whatever image you want.✅
 Change that image's size to be 300 pixels high.✅
 Using HTML, add a new image of your choice below or to the right of the other image and give it a unique id.✅
 Now make that image 300 pixels high (with JS)✅
 Using HTML, add a 16th `<li>` to the list. Once again with HTML, give it an ID that follows the others' numbering scheme.✅
 Now, (with JS) give it the same class as the others.
 Give that `<li>` the following text:
 Won't get fooled again.❌
 */






let header = document.querySelector("h1")
header.style.fontSize = "48px"

let para1 = document.querySelector("p")
para1.style.color = "lightblue"
para1.style.fontSize = "20px"

para1.innerText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."



let item13 = document.querySelector("#item-13")
item13.style.opacity = ".5"

let item3 = document.querySelector("#item-3")
item3.innerText = "I say, Hi!"

let image1 = document.querySelector("img")
image1.src = "https://images.indianexpress.com/2021/12/Kratos-facts-featured.jpg"
image1.style.height = "300px"

let image2 = document.querySelector("#image2")
image2.style.height = "300px"

//not sure what I'm doing wrong
let item16 = document.querySelector("#item-16")
item16.className = "item"
item16.innerText = "Won't get fooled again."