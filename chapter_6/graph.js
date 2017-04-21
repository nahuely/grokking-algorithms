function Graph() {
    this.nodes = []
    this.graph = {}
    this.end = null
    this.start = null
}

Graph.prototype.addNode = function(n) {
    this.nodes.push(n)
    this.graph[n.value] = n
}

Graph.prototype.getNode = function(name) {
    if(this.graph.hasOwnProperty(name)) return this.graph[name]
    return undefined
}

Graph.prototype.setEnd = function(name) {
    this.end = this.graph[name]
    return this.end
}

Graph.prototype.setStart = function(name) {
    this.start = this.graph[name]
    return this.start
}

module.exports = Graph