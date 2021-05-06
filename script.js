//Le bouton de la premiere ligne
const button = document.getElementById('btn');

//Le div contenant les resultats avec le script
let Lesscript = document.getElementById('result');
let lescodes = [];
let lesnouveauxcodes = [];
let lesnouveauxcodescomplets = [];


button.addEventListener("click", () => {

    //let lescodes = [];
    $.each($('#script').val().split(/\n/), function (i, line) {
        if (line) {
            lescodes.push(line);
        } else {
            lescodes.push("");
        }
    });

    let k = 0;

    for (i = 0; i < lescodes.length; i++) {

        let leslettres = lescodes[i].split("");

        if (leslettres[1] === " ") {
            lesnouveauxcodes[k] = lescodes[i];
            k++
        }
    }

    console.log(lesnouveauxcodes);

    let t = 0;

    for (i = 0; i < lesnouveauxcodes.length * 2; i = i + 2) {

        lesnouveauxcodescomplets[i] = ["waitms(96 + $S_CORR)"];
        lesnouveauxcodescomplets[i + 1] = lesnouveauxcodes[t];
        t++
    }

    console.log(lesnouveauxcodescomplets);

    for (i = 0; i < lesnouveauxcodescomplets.length; i++) {

        //Creation et Insertion des lignes de code
        let span = document.createElement("span");
        let br = document.createElement("br");

        if (i % 2 == 0) {

            span.innerHTML = lesnouveauxcodescomplets[i];
            Lesscript.appendChild(span);
            Lesscript.appendChild(br)

        } else if (i % 2 == 1) {

            span.innerHTML = `&nbsp;${lesnouveauxcodescomplets[i]}`;
            Lesscript.appendChild(span);
            Lesscript.appendChild(br)

        }

    }

})