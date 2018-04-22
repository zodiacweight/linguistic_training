var AppRouter = Backbone.Router.extend({
    routes: {
        "": "makeChoice", // выбрать язык и категорию слов
        ":language/look_words/:category": "lookWords", // просмотр слов
        "/:language/pass_test/:category": "passTest" // пройти тест

    },
    makeChoice: function(){
        //console.log("function is called");
        /*var result =*/ $.get("../html/makeChoice.html").then(function(result){
            $("#content").html(result);
        }, function(message){
            console.log("the file was not gotten!");
        }); /**/
    },
    lookWords: function(language, category){
        /**
         *  Знать: words, language, category, path, index=0;
         * Сделать: вставку изображения.
         * 
         */
        $.when($.get("../html/lookWords.html"), $.get("../words.json")).done(
           function(lookWords, words){
                $("#content").html(lookWords);
                imageData.changeValues().changeLanguage(language);
                imageData.changeValues().changeCategory(category);
                imageData.changeValues().changePath(language, category);
                imageData.changeValues().changeTitles(words[0]);
                //console.log(imageData.getValues().titles);
                if($("#content").html()!==""){
                    pasteImage(imageData.getValues().path, 0, imageData.getValues().titles);
                }
            }
        )
    },
    passTest: function(language){

    },
    
});

var appRouter = new AppRouter();
Backbone.history.start();