$(function(){

    var gr = $('div.cntWrap.cntWrap02>div.content.cnt02>div.section>div.view>div.artGroup');
    var btn = $('.btns>.btn');
    var btn3 = $('div.cntWrap.cntWrap03>div.content.cnt03>div.section>div.btns>.btn');
    var txt = $('div.cntWrap.cntWrap03 div.texts>h3');
    var gr3 = $('div.cntWrap.cntWrap03 div.artGroup');
    var md = $('div.cntWrap.cntWrap03 div.article>div.image');
    var gray = $('div.cntWrap.cntWrap03 div.article');
    
    var hdr = $('div.hdrWrap');
    var hdbar = $('div.hdrWrap>div.header>div.hdrTop>div.btn');
    var mnbar = $('div.navBox>div.top>div.btn');
    var mn = $('div.navBox');

    hdbar.eq(0).click(function(){
        mn.css({width:'100vw'});
    });

    mnbar.eq(0).click(function(){
        mn.css({width:'0'});
    });

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
    $(window).resize(function(){

        gray.eq(1).css({filter:'grayscale(1)'})
        gray.eq(3).css({filter:'grayscale(1)'})
        
        gr.css({marginLeft:'-33.33%'});
        
        if(window.innerWidth > 420){
            btn.first().click(function(){


                gr.stop().animate({
            
                    marginLeft : '-66.66%'
                    
                },500,function(){
            
                    gr.find('.article:first').appendTo(gr);
                    gr.css({marginLeft:'-33.33%'});
            
            
                });
            
            });
            
            btn.eq(1).click(function(){
            
            
                gr.stop().animate({
            
                    marginLeft : '0%'
                    
                },500,function(){
            
                    gr.find('.article:last').prependTo(gr);
                    gr.css({marginLeft:'-33.33%'});
            
            
                });
            
            });
            
            // 컨텐츠3
            
                    
            gr3.css({marginLeft:'-33.33%'})
            
            btn3.first().click(function(){
                
                gray.css({filter:'grayscale(1)'})
            
                gr3.find('.article:eq(3)').css({filter:'grayscale(0)'})
            
            
                gr3.stop().animate({
            
                    marginLeft : '-66.66%'
                    
                },500,function(){
            
                    gr3.find('.article:first').appendTo(gr3);
                    gr3.css({marginLeft:'-33.33%'});
            
            
                });
            
            });
            
            btn3.eq(1).click(function(){
            
                gray.css({filter:'grayscale(1)'})
            
                gr3.find('.article:eq(1)').css({filter:'grayscale(0)'})
            
            
                gr3.stop().animate({
            
                    marginLeft : '0%'
                    
                },500,function(){
            
                    gr3.find('.article:last').prependTo(gr3);
                    gr3.css({marginLeft:'-33.33%'});
            
            
                });
            
            });

            
            hdbar.click(function(){
                mn.css({width:'100vw'});
            });

            mnbar.click(function(){
                mn.css({width:'0'});
            });

        }else{

            gray.css({filter:'grayscale(0)'})

            btn.first().click(function(){


                gr.stop().animate({
            
                    marginLeft : '-93%'
                    
                },500,function(){
            
                    gr.find('.article:first').appendTo(gr);
                    gr.css({marginLeft:'-33.33%'});
            
            
                });
            
            });
            
            btn.eq(1).click(function(){
            
            
                gr.stop().animate({
            
                    marginLeft : '28%'
                    
                },500,function(){
            
                    gr.find('.article:last').prependTo(gr);
                    gr.css({marginLeft:'-33.33%'});
            
            
                });

                hdbar.click(function(){
                    mn.css({width:'100vw'});
                });
    
                mnbar.click(function(){
                    mn.css({width:'0'});
                });
            
            });
            
            // 컨텐츠3
            
            
            
            
            
            gr3.css({marginLeft:'-100%'})
            
            btn3.first().click(function(){
            
            
                gr3.stop().animate({
            
                    marginLeft : '-200%'
                    
                },500,function(){
            
                    gr3.find('.article:first').appendTo(gr3);
                    gr3.css({marginLeft:'-100%'});
            
            
                });
            
            });
            
            btn3.eq(1).click(function(){
            
            
                gr3.stop().animate({
            
                    marginLeft : '0%'
                    
                },500,function(){
            
                    gr3.find('.article:last').prependTo(gr3);
                    gr3.css({marginLeft:'-100%'});
            
            
                });
            
            });

                        

        }

    }).resize();


});