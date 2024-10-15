/*
some examples: 
   m = 3.25 ft 
   ft = 12 inch
   hr = 60 min 
   min = 60 sec

example queries: 
   2m = ? inch 
   13 inch = ? m 
   10 inch = ? hr "not convertible" 
*/


/*
solution brainstorming: 

using a graph to represent each connected units (distance, duration, ..)
we are using a dictionnary to map a string (unit) to a sort of a node in the graph. 
*/

class Edge {
    constructor(mult, node){
        this.mult = mult; 
        this.node = node;
    }
}

class Node {
    constructor(unit){
        this.unit = unit; 
        this.edges = []; 
    }

    addEdge(mult, other_unit) {
        this.edges.push(new Edge(mult, other_unit)); 
    }

    

}