
function defineImages (language, category, words){
    var chosenImages = words[0][language][category];
    return chosenImages;
};

function pasteImage(images, index){
    if($("#image")){
        $("#image").html(images[index]);
    }
}

function submitForm(){
    event.preventDefault(); // отменить действие по умолчанию
    var checked = $("input:radio:checked");
    /**/if(checked.length > 1){
        var language = checked[0]["defaultValue"], category = checked[1]["defaultValue"];
        location.href+="#"+language+"/look_words/"+category;
        console.log("language: ", language, "category: ", category);
        } else {
            $("#message").html("<p>Необходимо выбрать язык и категорию слов!</p>");
        }
    //
}