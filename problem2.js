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

        this.edgesCounter = -1
    }

    addEdge(mult, other_unit) {
        this.edgesCounter++
        this.edges[this.edgesCounter] = new Edge(mult, other_unit); 
    }

}

function parse_parameters(qry) {
    let parsedParameter = {}; 
    const responseKeys = ["the left unit", "quantity", "the right unit"]; 
    const units = ["meter", "inch", "cm", "hour", "minutes", "seconds"]; 

    let wordIndex = 0; 


    for(key in responseKeys){
        if(units.includes(qry[wordIndex]) || qry[wordIndex].isInteger()){
            parsedParameter[responseKeys[wordIndex]] = qry[wordIndex]; 

            wordIndex++;
        }
    }
}