function main() {
/* var datArr = [1,2,3,5,7,99]
var body =  d3.select("body")
var para = body.selectAll("p")
para.data(datArr).text(function(d,i){      
    console.log("d: ", + d);
    console.log("i: ", + i);
    return "Datapoint " +i+ " is "+d;
                    }); */

d3.select("body").selectAll("p").style("background",function(d,i){

var text = this.innerText;

if(text.indexOf("Warning") >= 0) {
        return "Orange" ;
} else if (
  text.indexOf("Danger") >= 0) {
        return "Green";
  }
})

}
;