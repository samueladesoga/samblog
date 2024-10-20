function searchIndex() {
    return lunr(function() {
        this.field("title",{boost:10}),
        this.field("tags",{boost:5}),
        this.ref("ref")
    });
}

function loadIndexJson(indexJsonLoadedFunction) {
    var x = new XMLHttpRequest;
    x.overrideMimeType("application/json");
    x.open("GET", "/index.json", true);
    x.onreadystatechange = function() {
        if (4 == x.readyState && "200" == x.status) {
            indexJsonLoadedFunction(
                JSON.parse(x.responseText)
            );
        }
    }
    r.send(null)
}

function addToSearchIndex(lunrIndex, indexLoadedFunction) {
    return function(index) {
        var titles = {};
        index.forEach(function(item) {
            lunrIndex.add(item);
            // The lunr results only contain ref and score 
            // so we have to keep track of any other values 
            // we want to display ourselves
            titles[item.ref] = item.title;
        })
        indexLoadedFunction(lunrIndex, titles);
    } 
}