gantt.config.api_date="%Y-%m-d"


var tasks = {
  data: [
      {
        id: 1, text: "Project #2", start_date: "01-04-2018", duration: 18, order: 10,
        progress: 0.4, open: true
      },
      {
        id: 2, text: "Task #1", start_date: "02-04-2018", duration: 8, order: 10,
        progress: 0.6, parent: 1
      },
      {
        id: 3, text: "Task #2", start_date: "11-04-2018", duration: 8, order: 20,
        progress: 0.6, parent: 1
      }
    ],
    links: [
      {id: 1, source: 1, target: 2, type: "1"},
      {id: 2, source: 2, target: 3, type: "0"}
    ]
};
// var items = new vis.DataSet([
//     {id: 1, content: 'item 1', start: '2013-04-20'},
//     {id: 2, content: 'item 2', start: '2013-04-14'},
//     {id: 3, content: 'item 3', start: '2013-04-18'},
//     {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
//     {id: 5, content: 'item 5', start: '2013-04-25'},
//     {id: 6, content: 'item 6', start: '2013-04-27'}]);

//DisplayGnatt

var container = document.getElementById('visualization');
gantt.config.highlight_critical_path = true;



  gantt.init("gantt_here");


  gantt.parse(tasks);

//initial JSON DATA storage
var items = (gantt.serialize().data);;
//   item = JSON.parse(JSON.stringify(item).split('"text":').join('"content":'));
//   item = JSON.parse(JSON.stringify(item).split('"start_date":').join('"start":'));

//Vue.Js Init
var app1 = new Vue({
el: '#app-1',
data: {
message: items }
})

//Gnatt EventHandling

gantt.attachEvent("onAfterTaskAdd", function(id,item){
items = gantt.serialize().data
console.log(items)
app1.message=items;
});

gantt.attachEvent("onAfterTaskUpdate", function(id,item){
items = gantt.serialize().data
console.log(items)
app1.message=items;
});

gantt.attachEvent("onAfterTaskDrag", function(id,item){
items = gantt.serialize().data
console.log(items)
app1.message=items;
});

gantt.attachEvent("onAfterTaskDelete", function(id,item){
items = gantt.serialize().data
console.log(items)
app1.message=items;
});

gantt.attachEvent("onAfterTaskMove", function(id,item){
items = gantt.serialize().data
console.log(items)
app1.message=items;
});
