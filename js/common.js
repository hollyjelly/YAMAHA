$(function(){
    $('.hdr').load('./inc/header.html',function(){
        var hdr = $('div.hdrWrap');
        var hdbar = $('div.hdrWrap>div.header>div.hdrTop>div.btn');
        var mnbar = $('div.navBox>div.top>div.btn');
        var mn = $('div.navBox');
        hdbar.click(function(){
            mn.css({width:'100vw'});
        });

        mnbar.click(function(){
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
    });
    $('.ftr').load('./inc/footer.html');
});