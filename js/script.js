$(document).ready(function(){
    // fullpage
    $("#fullpage").fullpage({
        navigation: true,
        navigationPosition: 'right',
        sectionsColor: ['','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)','rgb(42, 193, 188)',''],
        onLeave: function(anchorLink, index){
            if(index==1){
                $(".rider").css("opacity","1");
            }else{
                $(".rider").css("opacity","0");
            }

            if(index==8){
                $(".scroll").css("opacity","0");
            }else{
                $(".scroll").css("opacity","1");
            }

            if(index==1){
                $(".appdown").css("opacity","0");
            }else{
                $(".appdown").css("opacity","1");
            }

            if(index==8){
                $("header").css("opacity","0");
            }else{
                $("header").css("opacity","1");
            }
        },
        afterLoad: function(anchorLink, index){
            if(index==2){
                $(".section1 article .bike").css("animation","0.8s ease 0s 1 normal forwards running bike");
            }

            if(index==3){
                $(".section2 article .people img").css("animation","0.8s ease 0s 1 normal forwards running people")
            }

            if(index==4){
                $(".section3 article .present img").css("animation","0.8s ease 0s 1 normal forwards running present")
            }

            if(index==5){
                $(".section4 article .shopping img").css("animation","0.8s ease 0s 1 normal forwards running shopping")
            }

            if(index==6){
                $(".section5 article .rider2 img").css("animation","0.8s ease 0s 1 normal forwards running rider2")
            }

            if(index==7){
                $(".section6 article .flag img").css("animation","0.8s ease 0s 1 normal forwards running flag")
            }
        }

    });
});