let games = {
    rockstar: {
        gta: {
            gta1: {
                name: "Grand Theft Auto 1",
                size: "80MB",
                year: "1999",
                image: "gta1.jpeg"
            },
            gta2: {
                name: "Grand Theft Auto 2",
                size: "344MB",
                year: "2000",
                image: "gta2.jpeg"
            },
            gta3: {
                name: "Grand Theft Auto 3",
                size: "1.1GB",
                year: "2002",
                image: "gta3.jpg"
            },
            gtavicevity: {
                name: "Grand Theft Auto Vice City",
                size: "1.5GB",
                year: "2003",
                image: "gtavicecity.jpg"
            },
            gtasanandreas: {
                name: "Grand Theft Auto San Andreas",
                size: "4.7GB",
                year: "2005",
                image: "gtasanandreas.jpg"
            },
            gtalibertycitystories: {
                name: "Grand Theft Auto Liberty City Stories",
                size: "16GB",
                year: "2005",
                image: "gtalibertycity.jpg"
            },
            gtavicecitystories: {
                name: "Grand Theft Auto Vice City Stories",
                size: "1.55GB",
                year: "2005",
                image: "gtavicecitystories.jpg"
            },
            gta4: {
                name: "Grand Theft Auto 4",
                size: "22GB",
                year: "2010",
                image: "gta4.jpg"
            },
            gta5: {
                name: "Grand Theft Auto 5",
                size: "110GB",
                year: "2015",
                image: "gta5.jpg"
            },
        },
        rdr: {
            readdeadrevolver: {
                name: "Read Dead Revolver",
                size: "10GB",
                year: "2004",
                image: "rdr.jpg"
            },
            readdeadredemption: {
                name: "Read Dead Redemption",
                size: "6GB",
                year: "2010",
                image: "rdr1.jpg"
            },
            readdeadredemption2: {
                name: "Read Dead Redemption 2",
                size: "150GB",
                year: "2018",
                image: "rdr2.jpg"
            },
        },
        maxpayne: {
            maxpayne1: {
                name: "Max Payne",
                size: "830MB",
                year: "2001",
                image: "Maxpayne.jpg"
            },
            maxpayne2: {
                name: "Max Payne 2",
                size: "1.5GB",
                year: "2003",
                image: "Maxpayne2.jpg"
            },
            maxpayne3: {
                name: "Max Payne 3",
                size: "35GB",
                year: "2012",
                image: "Maxpayne3.jpg"
            },

        }
    },
    gameloft: {
        gangster: {
            gangsterrio: {
                name: "Gangster Rio City Of Saints",
                size: "800MB",
                year: "2011",
                image: "gangsterrio.jpg"
            },
            gangstervegas: {
                name: "Gangster Vegas",
                size: "2.53GB",
                year: "2013",
                image: "gangstervegas.jpeg"
            },
            gangsterneworleans: {
                name: "Gangster New Orleans",
                size: "800MB",
                year: "2011",
                image: "gangsterneworleans.jpg"
            }
        }
    }
}

let box = document.getElementById("box");

for (var key in games) {
    for (var brand in games[key]) {
        for (var cd in games[key][brand]) {
            box.innerHTML += `<div class="card" style="width: 18rem;">
            <img height="300" src="images/${games[key][brand][cd].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${games[key][brand][cd].name}</h5>
              <p class="card-text">Size: ${games[key][brand][cd].size}<br>Year: ${games[key][brand][cd].year}</p>
              <a href="#" class="btn btn-success">Download</a>
            </div>
          </div>`;
        }
    }
};



function find() {
    box.innerHTML = "";
    let d = document.getElementById("search");
    let p = "";

    if (d.value.includes(" ")) {
        p = d.value.replace(/ /g, "");
        p = p.toLowerCase();
    } else {
        p = d.value.toLowerCase();
    }

    for (var key in games) {                                 // rockstar
        if (p.includes(key)) {                              // i <-- rockstar 
            if (p.length === key.length) {                 // i <-- rockstar length
                for (var key1 in games[key]) {                 // rockstar > all
                    for (var key2 in games[key][key1]) {                        // post
                        box.innerHTML += `<div class="card" style="width: 18rem;">
                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                        <a href="#" class="btn btn-success">Download</a>
                        </div>
                        </div>`;
                    }
                }
            } else {
                for (var key1 in games[key]) {
                    if (p.includes(key1)) {
                        if (p.length === (key + key1).length) {
                            for (var key2 in games[key][key1]) {
                                box.innerHTML += `<div class="card" style="width: 18rem;">
                                <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                <a href="#" class="btn btn-success">Download</a>
                                </div>
                                </div>`;
                            }
                        } else {  // rockstar , more and more
                            for (var key2 in games[key][key1]) {
                                if (p.includes(key2)) {                          //       i <-- rockstar + gta / rdr / maxpayne + gtaetc / rdretc / maxpayneetc
                                    if (p.length === (key + key1 + key2).length) {                    //         i <-- rockstar and more length
                                        box.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                        <a href="#" class="btn btn-success">Download</a>
                                        </div>
                                        </div>`;
                                    }
                                }
                            }
                        }
                    } else {
                        for (var key2 in games[key][key1]) {
                            if (p.includes(key2)) {
                                console.log("no")
                                if (p.length === (key + key2).length) {
                                    box.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                        <a href="#" class="btn btn-success">Download</a>
                                        </div>
                                        </div>`;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            for (var key1 in games[key]) {
                if (p.includes(key1)) {
                    if (p.length === key1.length) {
                        for (var key2 in games[key][key1]) {
                            box.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                        <a href="#" class="btn btn-success">Download</a>
                                        </div>
                                        </div>`;
                        }
                    } else {
                        for (var key2 in games[key][key1]) {
                            if (p.includes(key2)) {
                                if (p.length === (key1 + key2).length) {
                                    box.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                        <a href="#" class="btn btn-success">Download</a>
                                        </div>
                                        </div>`;
                                } else if (p.length === key2.length) {
                                    box.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                        <a href="#" class="btn btn-success">Download</a>
                                        </div>
                                        </div>`;
                                }
                            }
                        }
                    }
                } else {
                    for (var key2 in games[key][key1]) {
                        if (p.includes(key2)) {
                            if (p.length === key2.length) {
                                box.innerHTML += `<div class="card" style="width: 18rem;">
                                        <img height="300" src="images/${games[key][key1][key2].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${games[key][key1][key2].name}</h5>
                                        <p class="card-text">Size: ${games[key][key1][key2].size}<br>Year: ${games[key][key1][key2].year}</p>
                                        <a href="#" class="btn btn-success">Download</a>
                                        </div>
                                        </div>`;
                            }
                        }
                    }
                }
            }
        }
    }



}

