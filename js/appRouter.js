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
       console.log("lookWords is here.");
        $.when($.get("../html/lookWords.html"), $.get("../words.json")).done(
           function(lookWords, words){
                $("#content").html(lookWords);
                if($("#content").html()!==""){
                    if($("#image")){
                        console.log("words[0][language][category][0]: ", words[0][language][category][0]);
                        var chosenImages = words[0][language][category];
                       // $("#image").html(firstImage);
                       //$("#image").html("<img src = 'images/portugues/insectos/abelha.jpg'>");
                        $("#image").html("<img src = 'images/"+language+"/"+category+"/"+chosenImages[0]+".jpg'>");
                        $("#title").html(chosenImages[0]);
                    }
                }
               // 
            }
        )
    },
    passTest: function(language){

    },
    
});

var appRouter = new AppRouter();
Backbone.history.start();