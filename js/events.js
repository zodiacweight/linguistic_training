$("#content").on("click", "#front", function () {
    defineUrlParams(function changeIndex(curIndex, minLimit, maxLimit){
        console.log("maxLimit = ", maxLimit, "minLimit = ", minLimit);
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
    defineUrlParams(function changeIndex(curIndex, minLimit, maxLimit){
        if(curIndex==minLimit-1){
            curIndex=maxLimit;
        }
        else {
            curIndex--;
        }
        return curIndex;
    });
});