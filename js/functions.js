
/*var maintainImages = (function (){
    var chosenImages = words[0][language][category];
    return {
        images: chosenImages,
        pasteImage: function (path, index){
            if($("#image")){
                $("#image").html("<img src="+path+chosenImages[index]+".jpg/>");
            }
        }
    }
})();*/

var maintainImages = {
    defineImages: function(words, language, category){
        return words[language][category]; // определение нужного массива изображений
    },
    pasteImage: function (words, index, language, category){
        var images = this.defineImages(words, language, category);
        var path = "images/"+language+"/"+category+"/";
        if($("#image")){
            $("#image").html("<img src='"+path+images[index]+".jpg'/>");
        }
        if($("#title")){
            $("#title").html(images[index]);
        }
    }
};

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