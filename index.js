//KALDER
        let modal = document.querySelector("#modal");
        let dest = document.querySelector(".retContainer"),
            retter, menuFilter = "alle";



//TIL AT HENTE MIN .JSON FIL - MED ALLE DATERNE
        document.addEventListener("DOMContentLoaded", hentJson);
        async function hentJson() {
            let jsonData = await fetch("pie.json");
            retter = await jsonData.json();
            visRetter();
        }



//FILTERINGS KODER, SÅ JEG KAN FÅ HENTEDE DATERNE OG OPDELT DEM UNDER "FOREACH", SÅ JEG KAN VISE DE FORSKELLIGE RETTER
        document.querySelectorAll(".menu-item").forEach(knap => {
            knap.addEventListener("click", filtrering)
        });
        function filtrering() {
            dest.textContent = "";
            menuFilter = this.getAttribute("data-kategori");
            visRetter();
        }



//DATA-CONTAINEREN, SOM FÅR TEKSTEN FREM OG TIL AT KUNNE KLIKKE PÅ FOR AT KOMME TIL "VISMODAL"
        function visRetter() {

            let temp = document.querySelector(".retTemplate");
            let dest = document.querySelector(".retContainer");




            retter.forEach(ret => {
                if (ret.Katagori == menuFilter || menuFilter == "alle") { let klon = temp.cloneNode(true).content;


                    klon.querySelector(".data-navn").textContent = ret.Navn;

                    klon.querySelector(".data-navn").addEventListener("click", () => {
                        visModal(ret);
                    });


                    dest.appendChild(klon);

                }
            });
        }


//TIL AT VISE MODAL VINDUET - SOM ER DET VINDUE SOM KOMMER FREM NÅR DU KLIKKER PÅ RETTEN
        function visModal(retter) {
            console.log("test");

            modal.classList.add("vis");

            modal.querySelector(".modal-navn").textContent = retter.Navn;

            modal.querySelector(".modal-billede").src = "imgs/medium/" + retter.Billede + "-M.png";

            modal.querySelector(".modal-billede").alt = "Foto af" + retter.navn;

             modal.querySelector(".beskrivelse").textContent = retter.Beskrivelse;

             modal.querySelector("button").addEventListener("click", skjulModal);
        }


//TIL AT SKJULE MODAL VINDUET IGEN
    function skjulModal() {


            modal.classList.remove("vis");
        }

