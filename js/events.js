$("#content").on("click", "#front", function () {
    var els = location.href.split("/"), language, length = els.length, category = els[length - 1], index, images;
    $.get("../words.json").then(function (words) {
        for (var i = 0; i < length; i++) {
            if (els[i].indexOf("#") !== -1) {
                language = els[i].split("#")[1];
                break;
            }
        }
        console.log('category: ', category);
        console.log("words: ", words);
        var curTitle = $("#title").html();
        for (var key in words[language]) {
            for (var i2 = 0, length2 = words[language][key].length; i2 < length2; i2++) {
                if (words[language][key][i2] == curTitle) {
                    index = i2;
                    if (index == words[language][key].length - 1) {
                        index = 0;
                    }
                    else {
                        index++;
                    }
                    break;
                }/**/
            }

        }
        maintainImages.pasteImage(words, index, language, category);
    }, function (message) {

    });

});