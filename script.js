$(document).ready(function () {

const menu = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function(){
sidebar.classList.toggle('active');
if(window.innerWidth<=768){
    sidebar.classList.remove('active');
}
});
// navbar color
$(window).scroll(function(){
    var scroll= $(window).scrollTop();
    if(scroll> 50){
        $('.navbar').css('background', '#101545');
        $('.navbar').css('box-shadow', 'rgba(0,0,0,.1) 0px 4px 12px');
    }else{
        $('.navbar').css('background', 'transparent');
        $('.navbar').css('box-shadow', 'none');
    }
})


  var options = {
    series: [
      {
        name: "series1",
        data: [150, 55,95, 78, 65, 156, 56, 92, 66],
      },
      {
        name: "series2",
        data: [50,95, 25, 79, 130, 36, 112, 46, 132],
      },
    ],
    chart: {
      height: 300,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["blue", "yellow"],
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.5,
      },
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      categories: [
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "jul",
        "Aug",
        "sept",
        "oct",
      ],
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    legend: {
      labels: {
        colors: "white",
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chLine"), options);
  chart.render();


var options = {
    series: [44, 55, 17, 34],
    labels:['Impression', 'Followers', 'Engagement', 'Likes', ],
    chart:{
        type:'donut',
        height:250,
        plotOptions:{
            pie:{
                expandClick:true
            },
        },
    },
    colors:['#3a86ff', '#3d348b', '#ff006e', '#ffbe0b'],
    legend:{
        show:false
    }
};
var chart= new ApexCharts(document.querySelector('#dougnut-chart'), options);
chart.render();
})
