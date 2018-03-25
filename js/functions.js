function getFile(path){
    var defer = $.Deferred();
    $.get(path, function(file){
    var file = file;
    //console.log(file);
    defer.resolve();    
    });
    return defer.promise();
}