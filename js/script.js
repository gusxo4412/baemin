$(document).ready(function(){
    // fullpage
    $("#fullpage").fullpage({
        navigation: true,
        navigationPosition: 'right',
        sectionsColor: ['','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)',''],
        onLeave: function(anchorLink, index){
            if(index==1){
                $(".rider").css({"opacity":"1" , "z-index":"10"});
            }else{
                $(".rider").css({"opacity":"0" , "z-index":"-10"});
            }

            if(index==8){
                $(".scroll").css("display","none");
            }else{
                $(".scroll").css("display","block");
            }

            if(index==1){
                $(".appdown").css("display","none");
            }else{
                $(".appdown").css("display","block");
            }

            if(index==8){
                $("header").css("display","none");
            }else{
                $("header").css("display","block");
            }
        },
        afterLoad: function(anchorLink, index){
            if(index==2){
                $(".section1 article .bike").css("animation","0.8s ease 0s 1 normal forwards running bike");
            }

            if(index==3){
                $(".section2 article .people").css({"animation":"0.8s ease 0s 1 normal forwards running up"})
            }

            if(index==4){
                $(".section3 article .present").css({"animation":"0.8s ease 0s 1 normal forwards running up"})
            }

            if(index==5){
                $(".section4 article .shopping").css({"animation":"0.8s ease 0s 1 normal forwards running up"})
            }

            if(index==6){
                $(".section5 article .rider2").css({"animation":"0.8s ease 0s 1 normal forwards running left"})
            }

            if(index==7){
                $(".section6 article .flag").css({"animation":"0.8s ease 0s 1 normal forwards running up"})
            }
        }

    });
});