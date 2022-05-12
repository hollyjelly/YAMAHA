$(function(){

    var gr = $('div.cntWrap>div.content.cnt02 div.artGroup');
    var btn = $('.artView>.btn');
    var art = $('.content.cnt02>.artGroup>.article');
    var hdr = $('div.hdrWrap');
    var hdbar = $('div.hdrWrap>div.header>div.hdrTop>div.btn')
    var mnbar = $('div.navBox>div.top>div.btn');
    var mn = $('div.navBox');
    var con1 = $('div.cntWrap>div.content.cnt01>div.section>div.artTop');
    var con2 = $('div.cntWrap>div.content.cnt01>div.section>div.artBtm');
    var con3 = $('div.cntWrap>div.content.cnt02>div.section');
    var wd1 = $('div.cntWrap>div.content.cnt01>div.section>div.artTop>div.design1')
    var wd2 = $('div.cntWrap>div.content>div.section>div.artBtm>div.design1');
    var wd3 = $('div.cntWrap>div.content.cnt02>div.section>div.design1');
    var op1 =$('div.cntWrap>div.content.cnt01>div.section>div.artTop>div.artGroup');
    var op2 =$('div.cntWrap>div.content>div.section>div.artBtm>div.artGroup');
    var op3 = $('div.cntWrap>div.content.cnt02>div.section>div.artView>div.artGroup>div.article');
    
    gr.css({marginLeft:'-80%'});

    $(window).resize(function(){
        
        if(window.innerWidth > 1024){

            con1.mouseover(function(){
                wd1.css({width:'calc(100% / 12 * 10.5)'});
                op1.css({opacity:'1'});
                wd2.css({width:'0'});
                op2.css({opacity:'0'});
            });
            con2.mouseover(function(){
                wd1.css({width:'0'});
                op1.css({opacity:'0'});
                wd2.css({width:'calc(100% / 12 * 10.5)'});
                op2.css({opacity:'1'});
        
            });
            con3.mouseover(function(){
                wd3.css({width:'calc(100% / 12 * 10.5)'});
                op3.css({opacity:'1'});
            });
            con3.mouseleave(function(){
                wd3.css({width:'0'});
                op3.css({opacity:'0'});
            });

        }else if(window.innerWidth > 420){

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
            
            hdbar.click(function(){
                mn.css({width:'100vw'});
            });

            mnbar.click(function(){
                mn.css({width:'0'});
            });    


        }else{
            hdbar.click(function(){
                mn.css({width:'100vw'});
            });

            mnbar.click(function(){
                mn.css({width:'0'});
            });
        }

    }).resize();


    

    btn.click(function(){

        gr.stop().animate({

            marginLeft:'-160%'

        },500,function(){

            gr.find('.article:first').appendTo(gr);
            gr.css({marginLeft:'-80%'})

        });

    });


    
});