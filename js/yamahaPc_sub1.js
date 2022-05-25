$(function(){
    var hdr = $('div.hdrWrap');
    var hdbar = $('div.hdrWrap>div.header>div.hdrTop>div.btn')
    var mnbar = $('div.navBox>div.top>div.btn');
    var mn = $('div.navBox');
    var con1 = $('div.cntWrap>div.content');
    var con2 = $('div.cntWrap>div.content>div.section>div.article');
    var wd1 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.images>div.imgBg');
    var wd2 = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.images>div.image');
    var op1 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.images>div.image');
    var op2 = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.texts');
    var dd = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.images');

    $(window).resize(function(){
        
        if(window.innerWidth > 1024){

            con1.mouseover(function(){
                op1.css({opacity:'1',width:'calc(100% / 12 * 8.5)'});
                wd1.css({width:'calc(100% / 12 * 9)'})
            });
            con2.eq(1).mouseover(function(){
                wd2.eq(0).css({width:'100%',opacity:'1'});
                op2.eq(0).css({opacity:'1'});
                dd.eq(0).css({width:'calc(100% / 12 * 6)'})
            });
            con2.eq(2).mouseover(function(){
                dd.eq(1).css({width:'calc(100% / 12 * 6)'})
                wd2.eq(1).css({width:'100%',opacity:'1'});
                op2.eq(1).css({opacity:'1'})
            });


        }else if(window.innerWidth <= 1024 && window.innerWidth > 420){

            hdbar.click(function(){
                mn.css({width:'100vw'});
            });

            mnbar.eq(0).click(function(){
                mn.css({width:'0'});
            });
            
        }else{

            con1.mouseover(function(){
                op1.css({opacity:'1',width:'85%'});
            });
            con2.eq(1).mouseover(function(){
                wd2.eq(0).css({width:'90%',opacity:'1'});
                op2.eq(0).css({opacity:'1'});
                dd.eq(0).css({width:'95%'})
            });
            con2.eq(2).mouseover(function(){
                dd.eq(1).css({width:'95%'})
                wd2.eq(1).css({width:'90%',opacity:'1'});
                op2.eq(1).css({opacity:'1'})
            });

            hdbar.click(function(){
                mn.css({width:'100vw'});
            });
    
            mnbar.eq(0).click(function(){
                mn.css({width:'0'});
            });
        }

    }).resize();

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


});