class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
  };

function go(link) {
console.log(link);
  if (link == '') {
    alert('Bruh you need to insert a url!');
  } else if (!link.includes("http://")) {
      link = "http://" + link;
  } 
  // else if(!link.includes(".")) {
  //   link = `searx.degenerate.info/search?q=` + link;
  // }
  parent.document.getElementById("frame").src="/sw/"+xor.encode(link);
};

const database = [
    //emulated games
    {
        name: "Retro Bowl",
        type: "emulated",
        icon: "./game-imgs/retro-bowl.jpg",
        path: "./g/retro-bowl/index.html"
    },
    //html games
    {
        name: "Clumsy Bird",
        type: "html",
        icon: "./game-imgs/clumsy.png",
        path: "./g/clumsy-bird/index.html"
    },
    {
        name: "2048",
        type: "html",
        icon: "./game-imgs/2048.png",
        path: "./g/2048/index.html"
    },
    {
        name: "Hextris",
        type: "html",
        icon: "./game-imgs/hextris.png",
        path: "./g/hextris/index.html"
    },
    {
        name: "JavaScript Racer",
        type: "html",
        icon: "./game-imgs/jsracer.png",
        path: "./g/javascript-racer/v4.final.html"
    },
    {
        name: "Tower Building",
        type: "html",
        icon: "./game-imgs/tower.gif",
        path: "./g/tower-building/index.html"
    },
    {
        name: "Simon Says",
        type: "html",
        icon: "./game-imgs/simon.png",
        path: "./g/simon-shockers/index.html"
    },
    //multiplayer games
    {
        name: "Krunker",
        type: "multiplayer",
        icon: "./game-imgs/krk.png",
        path: "krunker.io"
    },
    {
        name: "1v1.lol",
        type: "multiplayer",
        icon: "./game-imgs/1v1-lol.jpg",
        path: "1v1.lol"
    },
    {
        name: "Shell Shockers",
        type: "multiplayer",
        icon: "./game-imgs/shellshockers.png",
        path: "shellshock.io"
    },
    {
        name: "paper.io",
        type: "multiplayer",
        icon: "./game-imgs/paperio.png",
        path: "paper.io"
    },
    //flash games
    {
        name: "Duck Life 4",
        type: "flash",
        icon: "./game-imgs/ducklife4.png",
        path: "./g/flash-ems/ducklife.html"
    },
    {
        name: "Alien Hominid",
        type: "flash",
        icon: "./game-imgs/AlienHominid.png",
        path: "./g/flash-ems/alienh.html"
    },
    {
        name: "Bullet Bill",
        type: "flash",
        icon: "./game-imgs/bulletbill.png",
        path: "./g/flash-ems/bulletb.html"
    },
    {
        name: "Portal 2D",
        type: "flash",
        icon: "./game-imgs/portal.png",
        path: "./g/flash-ems/portal2d.html"
    },
]

function selectElement(selector) {
    return document.querySelector(selector);
}

//this clear result upon a new letter (to prevent caking of results)
function clearRES() {
    selectElement('.results').innerHTML = ""
}

//this will show a result based on the text the user puts in the search input
function getResults() {
    const search = selectElement('.gamesSEARCH').value;

    clearRES();
    for (let i = 0; i < database.length; i++) {
        if (database[i].name.toLowerCase().includes(search.toLowerCase()) || database[i].type.toLowerCase().includes(search.toLowerCase())) {
            selectElement(".results").innerHTML += `<i onclick="window.open('${database[i].path}', '_self')" class="gameLINK emL"><img src="${database[i].icon}" class="thumbnail"><h3 class="title">${database[i].name}</h3></i>`
            selectElement(".games").classList.add("hide");
            if (selectElement(".results").classList.contains("hardhide")) {
                selectElement(".results").classList.add("showRES");
                selectElement(".results").classList.remove("hardhide");
                selectElement(".gamesSEARCH").style.marginLeft = "0px";
                selectElement(".help").classList.add("hardhide");
            } else {
                selectElement(".results").classList.add("hardshow");
            }
        }
        if (document.getElementById("gamesSEARCH").value == 0) {
            selectElement(".results").innerHTML = '';
            selectElement(".results").classList.remove("showRES")
            selectElement(".results").classList.add("hardhide");
            selectElement(".help").classList.remove("hardhide");
            selectElement(".games").classList.remove("hide");
            selectElement(".gamesSEARCH").style.marginLeft = "-8px";
        }
    }
}

selectElement(".gamesSEARCH").addEventListener("keyup", getResults);

// function setFFR() {
//     window.open(`${database[i].path}`);
// }
const gameGEN = document.createElement("i");

// var tabs = document.querySelectorAll(".tab li button.tablinks");
// let tabALL = document.querySelector(".allL");
// let tabHTML = document.querySelector(".htmlL");
// let tabFLASH = document.querySelector(".flashL");
// let all = document.querySelectorAll(".gameLINK")

// tabs.forEach((tab) => {
//     tab.addEventListener("click", ()=>{
// 		tabs.forEach((tab)=>{
// 			tab.classList.remove("active");
// 		})
// 		tab.classList.add("active");
// 		var tabval = tab.getAttribute("data-tabs");

// 		all.forEach((item)=>{
// 			item.style.visibility = "collapse";
// 		});

// 		if(tabval == "html"){
//             tabHTML.forEach((game) => {
//                 game.style.visibility = "visible";
//             })
//             // tabHTML.style.visibility = "visible";
// 		}
// 		else if(tabval == "flash"){
// 			tabFLASH.style.visibility = "visible";
// 		} else if(tabval == "em") {
//             let tabEM = document.querySelector(".emL");
//             console.log(tabEM);
//             tabEM.style.visibility = "visible";
//         } else {
// 			all.forEach((item)=>{
// 				item.style.visibility = "visible";
// 			})
// 		}
// 	})
// })

// tabALL.addEventListener("click", (e) => {
//     if(tabALL.classList.contains("active")) {
//         console.log("fuck");
//         return;
//     } else if(tabALL.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabALL.classList.add("active");

//     }
// });

// tabHTML.addEventListener("click", (e) => {
//     if(tabHTML.classList.contains("active")) {
//         return;
//     } else if(tabHTML.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabHTML.classList.add("active");
//     }
// });

// tabFLASH.addEventListener("click", (e) => {
//     if(tabFLASH.classList.contains("active")) {
//         console.log("fuck");
//         return;
//     } else if(tabFLASH.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabFLASH.classList.add("active");
//     }
// });

// tabEM.addEventListener("click", (e) => {
//     if(tabEM.classList.contains("active")) {
//         return;
//     } else if(tabEM.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabEM.classList.add("active");
//     }
// });

// if (localStorage.getItem("theme") === "lime") {
//     document.getElementById("rels").href = "../styles/limeg.css";
// } else if (localStorage.getItem("theme") === "amoled") {
//     document.getElementById("rels").href = "../styles/amoledg.css";
// } else if(localStorage.getItem("theme") === "classic") {
//     document.getElementById("rels").href = "../styles/g.css";
// }

document.addEventListener("keydown", ea => {
    if (ea.keyCode == "9") {
        ea.preventDefault();
        parent.document.getElementById("urlbar").focus()
    }
});