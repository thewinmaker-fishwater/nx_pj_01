<template>
    <div>
        <NuxtLayout name="layout01">
            <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container flex flex-wrap px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                <h1 class="mb-4 text-2xl font-medium text-white sm:text-3xl title-font lg:w-1/3 lg:mb-0">Master Cleanse Reliac Heirloom</h1>
                <p class="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/500x300">
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/501x301">
                    </div>
                    <div id="chart02" class="w-full p-1 md:p-2">
                    <!-- <img alt="gallery" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/600x360"> -->
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                    <div id="chart01" class="w-full p-1 md:p-2">
                    <!-- <img alt="gallery" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/601x361"> -->
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/502x302">
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full" src="https://dummyimage.com/503x303">
                    </div>
                </div>
                </div>
            </div>
            </section>
        </NuxtLayout>
    </div>
</template>

<script>


export default {
    name:'',
    components:{},
    data(){
        return {
            sampleData:''
        };
    },
    beforeCreate(){},
    create(){},
    beforeMount(){},
    mounted(){

        //chart01
        Highcharts.chart('chart01', {

            title: {
                text: '대장제목'
            },

            subtitle: {
                text: '부제목'
            },

            yAxis: {
                title: {
                text: 'y축 제목'
                }
            },

            xAxis: {
                accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
                }
            },

            series: [{
                name: '선 1',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: '선 2',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: '선 3',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }],

            responsive: {
                rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                    }
                }
                }]
            }

        });



        //chart02
        // var title = {text: '대장제목'};
        // var subtitle = {text: '부제목'}; 
        // var yAxis = {
        //     title: {text: 'y축 제목'}
        // };
        // var xAxis = {
        //     categories: ['일', '이', '삼', '사', '오', '육', '칠', '팔'],
        //     crosshair: true
        // };
        // var legend = {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // };
        // var series = [{
        //     name: '선 1',
        //     data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        // },{
        //     name: '선 2',
        //     data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        // },{
        //     name: '선 3',
        //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]		
        // }];
        
        // var json_chart={};
        
        // json_chart.title=title;
        // json_chart.subtitle=subtitle;
        // json_chart.yAxis=yAxis;
        // json_chart.xAxis=xAxis;
        // json_chart.legend=legend;
        // json_chart.series=series;
        
        // $('#chart02').highcharts(json_chart);
        chart02();

    },
    beforeUpdate(){},
    updated(){},
    beforeUnmount(){},
    unmounted(){},
    methods:{}
}
</script>