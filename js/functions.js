
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
    pasteImage: function (data, index){
        if($("#image")){
            $("#image").html("<img src='"+data.path+data.images[index]+".jpg'/>");
        }
        if($("#title")){
            $("#title").html(data.images[index]);
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

function defineUrlParams(callback){
    var els = location.href.split("/"), language, length = els.length, category = els[length - 1], curIndex, 
    curTitle = $("#title").html();
    $.get("../words.json").then(function (words) {
        for (var i = 0; i < length; i++) {
            if (els[i].indexOf("#") !== -1) {
                language = els[i].split("#")[1];
                break;
            }
        }
        var data = defineData(words, language, category);
        /*words, language, category определены. Чтобы поставить нужное изображение, нужно найти curTitle в words[language][category],
        определить его индекс, индекс следующего изображения и вставить следующее изображение*/
        curIndex = data.images.indexOf(curTitle);
        defineNextImage(callback, curIndex, data.images);
        
    }, function (message) {

    });
}

function defineNextImage(callback, curIndex, images){
    
    var newIndex = callback(curIndex, 0, images.length-1);
    maintainImages.pasteImage(data, newIndex);
}

function defineData(words, language, category){
    return data = {
        images: words[language][category], 
        path: "images/"+language+"/"+category+"/"
    };
}

