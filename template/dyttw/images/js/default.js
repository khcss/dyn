//�۵����� չ��ȫ�� //gradient ��Ҫ������˫��div����
$(function(){
	var slideHeight = 360; // px
	var defHeight = $('#bodyshow').height();
	if(defHeight >= slideHeight){
		$('#bodyshow').css({"height":slideHeight+"px","overflow":"hidden"});
		$('#read-more').append('<div class="showdie margin-top"><a href="#">--չ��ȫ������--</a></div>');
		$('#read-more a').click(function(){
			var curHeight = $('#bodyshow').height();
			if(curHeight == slideHeight){
				$('#bodyshow').animate({
				  height: defHeight
				}, "normal");
				$('#read-more a').html('--���ز��־���--');
				$('#gradient').fadeOut();
			}else{
				$('#bodyshow').animate({
				  height: slideHeight
				}, "normal");
				$('#read-more a').html('--չ��ȫ������--');
				$('#gradient').fadeIn();
			}
			return false;
		});		
	}
});


//scrolltotop ���ض�������
$(function(){
        //���Ƚ�#back-to-top����
        $("#totop").hide();
        //����������λ�ô��ھඥ��100��������ʱ����ת���ӳ��֣�������ʧ
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#totop").show();
                }
                else
                {
                    $("#totop").hide();
                }
            });
            //�������ת���Ӻ󣬻ص�ҳ�涥��λ��
            $("#totop").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });
            
          $("#totop a").click(function(){ //��id=letter �е�li a��ǩ����¼�
          var v_href = $(this).attr("data"); //��ȡ��ǰdata��ֵ. alert(v_href);
          $("html,body").animate({scrollTop: $(v_href).offset().top - 90});return false;
      	  });

        });
    }); 

//������Ϊ��������
var common = {
	images: {
		lazyload: function() {
				$.getScript("https://cdn.jsdelivr.net/gh/khcss/dyn/template/dyttw/images/js/jquery.lazyload.min.js", function() {
				$(".lazypic").lazyload({
					placeholder : "https://cdn.jsdelivr.net/gh/khcss/dyn/template/dyttw/images/load.gif",
					effect: "fadeIn",
					threshold: 200,
					failurelimit: 15,
					skip_invisible: !1
				})
			})
		},
	},

//����ҳ��ʾ���
	detail:{
		collapse: function() {
					$(".player_detail").on("click", ".detail-more", function() {
						$detailContent = $(".player_detail_content");
						//$detailSketch = $(".detail-sketch");
						
						"none" == $detailContent.css("display") ? ($(this).html('\u6536\u8d77<i class="upward"></i>'), $detailContent.show()) : ($(this).html('\u8be6\u60c5<i class="downward"></i>'), $detailContent.hide())
					})
				},
	}
}
$(document).ready(function() {
	//ͼƬ��ʱ����
	common.images.lazyload();
	common.detail.collapse();
});