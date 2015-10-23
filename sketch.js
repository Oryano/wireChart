// Oryan Inbar
// Und Net, Fall 2015


function chart_1(){

  var wireChark = {
  labels : ["iPhone Tuna","iPhone Oryan","Apple TV","Chromecast TV","MacBook Oryan","MacBook Tuna", 'Router TWC Arris'],
  datasets : [
    {
      fillColor : "rgba(0,130,152,0.4)",
      strokeColor : "blue",
      pointColor : "#fff",
      pointStrokeColor : "#9DB86D",
      data : [4,126,4,12761,83202,14,474] //byts sent
    },{
      fillColor : "rgba(200,130,152,0.4)",
      strokeColor : "red",
      pointColor : "#fff",
      pointStrokeColor : "#9bff86",
      data : [0,0,0,23782,96167,0,492] //byts sent

    }
  ]
}
    var activity = document.getElementById('activity').getContext('2d');
    new Chart(activity).Line(wireChark);

  }

function chart_2(){

    var data = {
        labels: ["TCP", "AJP13", "DNS", "ICMP", "IGMPV3", "MDNS", "QUIC",'SSDP' ,'TLSv1.2','TLSv1','XMPP/XML','UDP', 'HTTP' ,'HTTP/XML','NAT-PMP','SSDP'],
        datasets: [
            {
                label: "iPhone Tuna",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [75, 15, 1, 1, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1, 1 ,1]
            },
            {
                label: "iPhone Oryan",
                fillColor: "rgba(10,205,160,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [30, 30, 30,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1]
            },
            {
                label: "Apple TV",
                fillColor: "rgba(9,120,130,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                label: "Chromecast TV",
                fillColor: "rgba(4,123,90,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(40,187,120,1)",
                data: [1, 2, 1, 80, 1, 1 ,92, 6, 1, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                label: "Macbook Oryan",
                fillColor: "rgba(151,187,0,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [50, 5, 5, 3, 3, 1, 20, 5, 2, 1, 5, 1, 1, 1, 1, 1]
            },
            {
                label: "Macbook Tuna",
                fillColor: "rgba(151,0,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                label: "Router TWC Arris",
                fillColor: "rgba(0,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [90, 7, 1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]              
            }
        ]
    };

    var myRadarChart = document.getElementById('myRadarChart').getContext('2d');
    new Chart(myRadarChart).Radar(data, true);
  }
  

function setup(){

  var button_1 = select('#showChart_1');
  // What to do when button pressed
  button_1.mousePressed(chart_1);
  
  var button_2 = select('#showChart_2');
  // What to do when button pressed
  button_2.mousePressed(chart_2);

}