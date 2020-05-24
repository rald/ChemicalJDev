var display=document.getElementById("display");

var res=alasql("select * from ?",[data]);

var count=[];
var labels=[];

for(var i=0;i<42;i++) {
	count.push(0);
	labels.push(i+1);
}

for(var j=0;j<res.length;j++) {
	for(var i=0;i<res[j]["combination"].length;i++) {
		count[res[j]["combination"][i]-1]++;
	}
}

var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',

	data: {
		labels: labels,
		datasets: [{
			label: "frequency",
			data: count
		}]
	},

	options: {}
});
