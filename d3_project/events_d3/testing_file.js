function main() {

    d3.select("div").on("mouseover",function(){

        d3.select(this)
           .style("background-color","maroon")
    })
    .on("mouseout",function(){

        d3.select(this)
           .style("background-color","Violet")
    }) 
}


