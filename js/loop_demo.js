/**
* fil: loop_demo.js
* formål: demo af logo
*/


console.log("loop demo kører...")//tjek om det virker

// nu laver vi et loop
// semikolon loopet køre bare derfor skal der være semikolon!, ellers er det en virusstil agtigt
// i er en variabel
// MÅ IKKE VÆRE MERE ELLERS CRASHER SYSTEMET!

for (let i=0;i<100; i++){
    console.log("jeg må ikke tjekke mobilen mens Per underviser"+i)

    // nu skal vi skrive til html'en
    // resultat.innerHTML = "Jeg har nu talt til: "+ i; viser teksten 1 gang
    // resultat.innerHTML += "Jeg har nu talt til: "+ i; + står der 99 gange 99 fordi vi starter med 0 og derfor 99
    // LISTER ul unordered bullets
    // LISTER ol ordered   talrække
    resultat.innerHTML += "<li>" 
    + "Jeg har nu talt til: "
    + i 
    + "</li>";
}

let husk = [
    "Fløde (Lacto Free)",
    "Kaffe",
    "Hindbærsnitter",
    "Vegansk Leverpostej",
    "Opvaskebørste",
    "Dåseleverpostej fra Faaborg",
    "Strenge til guitaren"
]
// ved at taste 0 kommer fløde i bunden af console på web console.log(husk[0]);
console.log(husk[0]);

//lengths er en attribut og betyder hvor lang er du
for (let i=0;i<husk.length;i++){
    console.log(husk[i]);
    glemikke.innerHTML += "<li>"
    + husk[i]
    + "</li>"

}