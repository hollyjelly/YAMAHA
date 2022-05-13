$(function(){
    var tit = $('.txtBox>li');

    var hdr = $('div.hdrWrap');

    var hdbar = $('div.hdrWrap>div.header>div.hdrTop>div.btn')

    var mnbar = $('div.navBox>div.top>div.btn');

    var mn = $('div.navBox');

    $(window).resize(function(){
        
        if(window.innerWidth > 420){

            $(window).scroll(function(){
                var scro = $(this).scrollTop();
                if(scro>0){
                    hdr.css({backgroundColor:'#000',width:'100vw',margin:'0 auto'});
                }else{
                    hdr.css({
                        background:'rgba(0,0,0,0.6)',margin:'0 auto'
                    });
                }
            });
            
            hdbar.eq(0).click(function(){
                mn.css({width:'100vw'});
            });

            mnbar.eq(0).click(function(){
                mn.css({width:'0'});
            });

        }else{

                        
            hdbar.eq(0).click(function(){
                mn.css({width:'100vw'});
            });

            mnbar.eq(0).click(function(){
                mn.css({width:'0'});
            });

        }

    }).resize();

    

    tit.even().click(function(){
        tit.removeClass('show');
        $(this).addClass('show');
    });
});