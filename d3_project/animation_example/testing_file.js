function main() {

/*     d3.select("#container")
      .transition().duration(3000)
      .style("background-color","maroon") */

/* var t = d3.select("#container")
          .transition()
          .duration(3000)        
          .style("background-color","yellow")
          .transition()
          .style("background-color","maroon") */

   var svg = d3.select("body")
               .append("svg")
               .attr("width",500)
               .attr("heigth",500)

   var bar1 = svg.append("rect")
                 .attr("fill","navy")
                 .attr("x",100)
                 .attr("y",10)
                 .attr("width",10)
                 .attr("heigth",20)

   var bar2 = svg.append("rect")
                 .attr("fill","navy")
                 .attr("x",120)
                 .attr("y",10)
                 .attr("width",10)
                 .attr("heigth",20)

update();

function update() {

bar1.transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attr("height",100)
bar2.transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .delay(2000)
    .attr("height",100)    


}

}

