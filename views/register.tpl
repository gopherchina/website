{{template "base/header.html" .}}
<style type="text/css">
	.content{width: 80%;margin: 0 auto;margin-top: 20px;}
	.thumbimage{
		display: block;padding: 2px;margin-bottom: 2rem;background-color: #fff;border-radius: 0;-webkit-transition: all .2s ease-in-out;transition: all .2s ease-in-out;}
	.thumbimage>img, .thumbimage a>img {margin-left: auto;margin-right: auto;display: block;}
	.thumbimage-caption{margin: 0;padding: .8rem;color: #333;font-weight: 400;text-align: center;}
</style>
<div class="content">
	<div class="am-g">
		<div class="am-u-sm-11 am-u-sm-centered">
			<div class="am-cf am-article">
				<div class="am-u-lg-12 am-u-md-6 am-u-sm-12 ">
		          <p class="detail-p">
		            大会报名 <i class="am-icon-hand-o-right"></i> 在线支付（支付宝） <i class="am-icon-hand-o-right"></i>获取电子门票报名成功 <i class="am-icon-hand-o-right"></i> 持打印的电子门票现场签到（或凭彩信/短信） <i class="am-icon-hand-o-right"></i> 领取大会入场券及礼品
		          </p>
		        </div>
				<div><iframe name='mgframe' id='mgframe' height='261px' width='100%' src='http://www.eventdove.com/business/getInnerTicket.do?siteInfoId=100669&moduleId=44&viewFlag=1&tc=promoteticket' frameborder='0' scrolling='no'></iframe>
				</div>
				<div class="am-u-sm-12">
			    <div class="thumbimage">
			      <img src="/static/images/gophercomplex1.jpg" alt=""/>
			    </div>
			   </div>
			</div>
		</div>
	</div>
</div>

{{template "base/footer.html" .}}
