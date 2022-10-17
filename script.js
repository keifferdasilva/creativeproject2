document.getElementById("wordSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("wordInput").value;
    if (value === "")
        return;
    console.log(value);
    let results = "";
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + value;
    fetch(url)
    .then(response => response.json())
    .then(function(json){
        console.log(json);
        const wordObject = json[0];
        results += "<h1 class='word'>" + wordObject.word.charAt(0).toUpperCase() + wordObject.word.slice(1) + "</h1>";
        results += "<h2>Phonetic Pronounciation: " + wordObject.phonetic + "</h2>";
        results += "<h2>Definitions</h2>";
        for(let i = 0; i < wordObject.meanings.length; i++){
            results += "<h3>Used as a " + wordObject.meanings[i].partOfSpeech + "</h3> <ol>";
            for(let j = 0; j < wordObject.meanings[i].definitions.length; j++){
                results += "<li>" + wordObject.meanings[i].definitions[j].definition + "</li>";
            }
            results += "</ol>";
        }
        document.getElementById("wordResults").innerHTML = results;
    });
    
});