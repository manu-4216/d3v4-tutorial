var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

var update = d3.select('.chart')
  .selectAll('div')
  .data(scores, function(d) {
    return d ? d.name : this.innerText;
  }).style('color', 'blue');

var enter = update.enter()
  .append('div')
  .text(function(d) {
    return d.name;
  })
  .style('color', 'green')

update.exit().remove();

// Select both new and updated elements:
var all = update.merge(enter)

all.style('text-transform', 'uppercase')
   .style('background', 'lightgreen')
   .style('border', '1px solid black')
   .style('width', d => d.score + 'px')
