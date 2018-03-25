var AppRouter = Backbone.Router.extend({
    routes: {
        "": "makeChoice", // выбрать язык и категорию слов
        "/:language/look_words": "lookWords", // просмотр слов
        "/:language/pass_test": "passTest" // пройти тест

    },
    makeChoice: function(){
        console.log("function is called");
        var result = $.get("../html/makeChoice.html").then(function(result){
            $("#content").html(result);
        }, function(message){
            console.log("the file was not gotten!");
        }); /**/
    },
    lookWords: function(language){
        $.when($.get("../html/lookWords.html"), $.get("words.js")).done(function(lookWords, words){
            $("#content").html(lookWords);
        });
    },
    passTest: function(language){

    },
    
});

var appRouter = new AppRouter();
Backbone.history.start();