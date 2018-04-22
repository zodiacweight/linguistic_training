
var imageData = (function defineImageParams () {
    var fields = {
        language: "",
        category: "",
        path: "",
        titles: ""
    }
    return {
        getValues: function (){
            return {
                language: fields.language,
                category: fields.category,
                path: fields.path,
                titles: fields.titles
            }
        },
        changeValues: function(){
            return{
                changeLanguage: function(newLanguage){
                    return fields.language=newLanguage;
                },
                changeCategory: function(newCategory){
                    return fields.category=newCategory;
                },
                changePath: function(){
                    return fields.path="images/"+fields.language+"/"+fields.category+"/";
                },
                changeTitles: function(words){
                    return fields.titles=words[fields.language][fields.category];
                }
            }
        }
    }
})();

function submitForm(){
    event.preventDefault(); // отменить действие по умолчанию
    var checked = $("input:radio:checked");
        if(checked.length > 1){
        var language = checked[0]["defaultValue"], category = checked[1]["defaultValue"];
        location.href+="#"+language+"/look_words/"+category;
        console.log("language: ", language, "category: ", category);
        } else {
            $("#message").html("<p>Необходимо выбрать язык и категорию слов!</p>");
        }
}

function pasteImage(path, index, titles){
    var title=titles[index], src=path+"/"+title+".jpg";
    $("#image").html("<img src='"+src+"'>");
    $("#title").html(title);
}

function defineNextImage(callback){
    var titles = imageData.getValues().titles, path = imageData.getValues().path, maxLimit=titles.length-1, 
    curTitle=$("#title").html(), curIndex=titles.indexOf(curTitle);
    console.log("curTitle до callback = ", curTitle);
    console.log("curIndex до callback = ", curIndex);
    curIndex=callback(curIndex, 0, maxLimit);
    console.log("curTitle после callback = ", curTitle);
    console.log("curIndex после callback = ", curIndex);
    pasteImage(path, curIndex, titles);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


function defineData(words, language, category){
    return data = {
        images: words[language][category], 
        path: "images/"+language+"/"+category+"/"
    };
}

