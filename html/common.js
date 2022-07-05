$(function(){
    $('.ham').click(function(){
        $('.gnb').addClass('on')
    })

    $('.close').click(function(){
        $('.gnb').removeClass('on')
    })

    // 슬라이드
    setInterval(function(){
        $('.slide').not(':animated').animate({marginTop:-100+'vh'}, 700, function(){
            $('.slide>li').eq(0).appendTo($('.slide'))
            $('.slide').css({marginTop:0})
        })
        $('.slide_txt li').eq(0).appendTo($('.slide_txt'))
        $('.dot_con span').eq(0).appendTo($('.dot_con'))
    }, 5000)
   

    // 탭 메뉴
    $('.tab>button').click(function(){
        $('.tab>button').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        console.log(idx)
        $('.tab_list').removeClass('on')
        $('.tab_list').eq(idx).addClass('on')
    })

    let w = $('.tab_list li').width()

    $('.next').click(function(){
        $('.tab_list').not(':animated').animate({marginLeft:-w}, 700, function(){
            $('.tab_list>li').eq(0).appendTo($('.tab_list'))
            $('.tab_list').css({marginLeft:0})
        })
    })

    $('.prev').click(function(){
        $('.tab_list>li').eq(-1).prependTo($('.tab_list'))
        $('.tab_list').css({marginLeft:-w})
        $('.tab_list').not(':animated').animate({marginLeft:0}, 700)
    })

})