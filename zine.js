/* On récupère tous les chapitres dans la page html */
var items = document.getElementsByClassName('chapitre');
console.log(items);


/* Création du formulaire dynamique en fonction des chapitres */
for (let i = 0; i < items.length; i++) {
  var div = document.createElement('div');
  var input = document.createElement('input');
  var label = document.createElement('label');
  div.setAttribute("id", "div"+i)
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "chapitre"+i);
  input.setAttribute("name", "formulaire");
  label.setAttribute("for", "chapitre"+i);
  label.innerHTML = "Chapitre"+" "+(i+1);

  var formContainer = document.getElementById("generateForm");
  formContainer.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
};

/* La fonction sous le bouton du formulaire. Vérification de l'état des checkboxes et suppression des chapitres qui ne sont pas cochés */
function reducto(event) {
    let checkboxes = document.querySelectorAll('input[name="formulaire"]');
            let output = [];
            checkboxes.forEach((checkbox) => {
                var cc = checkbox.checked;
                output.push(cc);
            });
            console.log(output);

            for (let i = 0; i < output.length; i++) {
                if (output[i] == false) {
                    document.getElementById("texte"+i).remove();
                    console.log("le texte" + " " + i + " a bien été effacé.")
                };
            };
            /* on utilise la méthode preventDefault() pour éviter que le navigateur rafraichisse la page */
            event.preventDefault();
};






