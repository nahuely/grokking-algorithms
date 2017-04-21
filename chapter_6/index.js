var movies = require("./kevinbacon.json").movies
var Graph = require("./graph")
var Node = require("./node")

var graph = new Graph()

movies.forEach(d => {
    var movie = d.title
    var cast = d.cast

    var movieNode = new Node(movie)
    graph.addNode(movieNode)

    cast.forEach(actor => {
        var actorNode = graph.getNode(actor)
        if(!actorNode) {
            actorNode = new Node(actor)
        }

        graph.addNode(actorNode)
        movieNode.addEdge(actorNode)
    })
})


var start = graph.setStart("Mickey Rourke")
var end = graph.setEnd("Kevin Bacon")
var queue = []

//start of algorithm
start.searched = true
queue.push(start)

while(queue.length) {
    var current = queue.shift()
    if(current === end) {
        break
    }
    for(var x = 0; x < current.edges.length; x++) {
        var nodeAux = current.edges[x]
        if(!nodeAux.searched) {
            nodeAux.parent = current
            nodeAux.searched = true
            queue.push(nodeAux)
        }
    }
}

if(end.parent === null) {
    console.log("we didnt found the relation")
} else {
    var path = []
    path.push(end)
    var previous = end.parent

    while(previous != null) {
        path.push(previous)
        previous = previous.parent
    }

    console.log(path.reverse())
}