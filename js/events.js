
$("#content").on("click", "#front", function () {
    defineNextImage(function defineNextIndex(curIndex, minLimit, maxLimit){
        if(curIndex==maxLimit){
            curIndex=minLimit;
        }
        else {
            curIndex++;
        }
        return curIndex;
    });
});

$("#content").on("click", "#back", function () {
    defineNextImage(function defineNextIndex(curIndex, minLimit, maxLimit){
        if(curIndex==minLimit){
            curIndex=maxLimit;
        }
        else {
            curIndex--;
        }
        return curIndex;
    });
});

$("#content").on("click", "#change", function(){
    location.href="";
});

/**В каждом из этих событий определить:
 * titles, path, maxIndex (из title), индекс следующего изображения кодом из функции callback, const minIndex = 0,
 * вызывать pasteImage.
 * 
 */