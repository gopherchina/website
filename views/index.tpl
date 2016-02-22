{{template "base/header.html" .}}

<header id="site-header" class="site-header valign-center"> 
        <div class="intro">

            <h2>25 April, 2016 / 中国 北京</h2>
            
            <h1>Gopher China 2016</h1>
            
            <p>Second &amp; Largest Conference</p>
            
            <a class="btn btn-white" data-scroll href="#register">{{if eq .Lang "zh-CN"}}注册报名{{else}}Register Now{{end}}</a>
        
        </div>
    </header>

    <section id="speakers" class="section speakers">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}演讲嘉宾{{else}}Speakers{{end}}</h3>
                
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="speaker">

                        <figure>
                            <img alt="" class="img-responsive center-block" src="/static/images/speakers/speaker-1.jpg">
                        </figure>

                        <h4>Jhon Smith</h4>

                        <p>CEO of Peren</p>

                        <ul class="social-block">
                            <li><a href=""><i class="ion-social-twitter"></i></a></li>
                            <li><a href=""><i class="ion-social-facebook"></i></a></li>
                            <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                        </ul>

                    </div><!-- /.speaker -->
                </div><!-- /.col-md-4 -->

                <div class="col-md-4">
                    <div class="speaker">

                        <figure>
                            <img alt="" class="img-responsive center-block" src="/static/images/speakers/speaker-2.jpg">
                        </figure>

                        <h4>Jhon Smith</h4>

                        <p>CEO of Peren</p>

                        <ul class="social-block">
                            <li><a href=""><i class="ion-social-twitter"></i></a></li>
                            <li><a href=""><i class="ion-social-facebook"></i></a></li>
                            <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                        </ul>

                    </div><!-- /.speaker -->
                </div><!-- /.col-md-4 -->

                <div class="col-md-4">
                    <div class="speaker">

                        <figure>
                            <img alt="" class="img-responsive center-block" src="/static/images/speakers/speaker-3.jpg">
                        </figure>

                        <h4>Jhon Smith</h4>

                        <p>CEO of Peren</p>

                        <ul class="social-block">
                            <li><a href=""><i class="ion-social-twitter"></i></a></li>
                            <li><a href=""><i class="ion-social-facebook"></i></a></li>
                            <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                        </ul>

                    </div><!-- /.speaker -->
                </div><!-- /.col-md-4 -->
            </div><!-- /.row -->

            <div class="row">
                <div class="col-md-4">

                    <div class="speaker">

                        <figure>
                            <img alt="" class="img-responsive center-block" src="/static/images/speakers/speaker-4.jpg">
                        </figure>

                        <h4>Jhon Smith</h4>

                        <p>CEO of Peren</p>

                        <ul class="social-block">
                            <li><a href=""><i class="ion-social-twitter"></i></a></li>
                            <li><a href=""><i class="ion-social-facebook"></i></a></li>
                            <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="speaker">

                        <figure>
                            <img alt="" class="img-responsive center-block" src="/static/images/speakers/speaker-5.jpg">
                        </figure>

                        <h4>Jhon Smith</h4>

                        <p>CEO of Peren</p>

                        <ul class="social-block">
                            <li><a href=""><i class="ion-social-twitter"></i></a></li>
                            <li><a href=""><i class="ion-social-facebook"></i></a></li>
                            <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                        </ul>

                    </div>
                </div>

                <div class="col-md-4">
                    <div class="speaker">
                        <figure>
                            <img alt="" class="img-responsive center-block" src="/static/images/speakers/speaker-6.jpg">
                        </figure>
                        <h4>Jhon Smith</h4>
                        <p>CEO of Peren</p>
                        <ul class="social-block">
                            <li><a href=""><i class="ion-social-twitter"></i></a></li>
                            <li><a href=""><i class="ion-social-facebook"></i></a></li>
                            <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="schedule" class="section schedule">

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}会议日程{{else}}Event Schedule{{end}}</h3>
                </div>
            </div>
            <div class="row">
                <table class="am-table">
            <thead>
                <tr>
                    <th class="am-u-sm-offset-1">日期</th>
                    <th>时间</th>
                    <th>日程安排</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center" rowspan="11" valign="middle">4月25日<br>周六</td>
                    <td>08:20-8:50</td>
                    <td>入场报到</td>
                </tr>
                <tr>
                    <td>08:50-9:00</td>
                    <td>大会介绍</td>
                </tr>
                <tr>
                    <td>09:00-10:00</td>
                    <td><a href="/user/chenmingda">陈明达,厦门真有趣信息科技有限公司</a>- Go 语言在游戏项目的应用情况汇报</td>
                </tr>
                <tr>
                    <td>10:05-11:05</td>
                    <td><a href="/user/liuqi">刘奇,豌豆莢</a>- Go 在分布式系统开发中的应用</td>
                </tr>
                <tr>
                    <td>11:10-12:10</td>
                    <td><a href="/user/xushiwei">许式伟,七牛</a>- 七牛如何做HTTP服务测试</td>
                </tr>
                <tr>
                    <td>13:10-14:10</td>
                    <td><a href="/user/maquanyi">马全一,DockerChina</a>- 使用 Docker 构建企业持续集成服务</td>
                </tr>
                <tr>
                    <td>14:15-15:15</td>
                    <td><a href="/user/zhouyang">周洋,奇虎360</a>- Go 语言构建高并发分布式系统实践</td>
                </tr>
                <tr>
                    <td>15:30-16:30</td>
                    <td><a href="/user/yujun">余军</a>- 动态资源管理和容器技术在金融行业的架构探索和明天</td>                    
                </tr>
                <tr>
                    <td>16:35-17:35</td>
                    <td><a href="/user/wangyang">汪洋，华为</a>- Go 语言在 NFV 场景下的应用研究</td>
                </tr>
                <tr>
                    <td>17:40-18:40</td>
                    <td><a href="/user/guofeng">郭峰，DaoCloud</a>- Go 在持续交付中的实践</td>
                </tr>
                <tr>
                    <td>20:30-22:00</td>
                    <td>Gopher酒会, 七牛</td>
                </tr>
                <tr>
                    <td align="center" rowspan="8" valign="middle">4月26日<br>周日</td>
                    <td>09:00-10:00</td>
                    <td><a href="/user/robert">Robert Griesemer</a>- gofmt 的文化演变</td>
                </tr>
                 <tr>
                    <td>10:05-11:05</td>
                    <td><a href="/user/gonghaohua">龚浩华,网宿科技</a>- 基于Go实现的 P2P Cache服务器</td>
                </tr>
                 <tr>
                    <td>11:10-12:10</td>
                    <td><a href="/user/lisibao">李四宝,杭州佑软科技</a>- 在 P2P 网络构之上构建的应用生态----Leither</td>
                </tr>
                 <tr>
                    <td>13:10-14:10</td>
                    <td><a href="/user/yuhen">雨痕</a>- Go 1.4 runtime</td>
                </tr>
                 <tr>
                    <td>14:15-15:15</td>
                    <td><a href="/user/maojian">毛剑,猎豹移动</a>- Go 在猎豹移动的应用</td>
                </tr>
                 <tr>
                    <td>15:30-16:30</td>
                    <td><a href="/user/xiabin">夏彬,深之度</a>- Go在深度桌面环境中的应用</td>
                </tr>
                <tr>
                    <td>16:35-17:35</td>
                    <td><a href="/user/qleelulu">QLeelulu,广州舜飞</a>- Go 在 RTB 实时竞价 DSP 广告系统中的应用</td>
                </tr>                
                <tr>
                    <td>17:40-18:40</td>
                    <td><a href="/user/zhangchengyuan">张成远,京东</a>- Docker 原理与应用实践</td>
                </tr>
            </tbody>
        </table>
                <div class="col-md-4 col-sm-6">
                    <div class="schedule-box">
                        <div class="time">
                            <time datetime="09:00">09:00 am</time> - <time datetime="22:00">10:00 am</time>
                        </div>
                        <h3>Welcome and intro</h3>
                        <p>Mustafizur Khan, SD Asia</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="schedule-box">
                        <div class="time">
                            <time datetime="10:00">10:00 am</time> - <time datetime="22:00">10:00 am</time>
                        </div>
                        <h3>Tips and share</h3>
                        <p>Mustafizur Khan, SD Asia</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="schedule-box">
                        <div class="time">
                            <time datetime="10:00">10:00 am</time> - <time datetime="22:00">10:00 am</time>
                        </div>
                        <h3>View from the top</h3>
                        <p>Mustafizur Khan, SD Asia</p>
                    </div>
                </div>
            </div>
    </section>
    <section id="register" class="section register">
        <div class="container">
             <div class="row">
                <div class="col-md-12">
                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}注册报名{{else}}Event Register{{end}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <script type="text/javascript" src="http://www.bagevent.com/resources/js/bagevent-widget-1.0.js?parent=true"></script><iframe id="promote_ticket_iframe" width="100%" src="http://www.bagevent.com/widget/ticket/13779?widget=1" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    </section>
    <section id="partner" class="section partner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}赞助商{{else}}Event Partner{{end}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <a class="partner-box partner-box-1"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-2"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-3"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-4"></a>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <a class="partner-box partner-box-5"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-6"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-7"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-8"></a>
                </div>
            </div>   
    </section>

    <section id="supporters" class="section supporters">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}媒体支持{{else}}Media Supporter{{end}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <a class="partner-box partner-box-1"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-2"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-3"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-4"></a>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <a class="partner-box partner-box-5"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-6"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-7"></a>
                </div>
                <div class="col-sm-3">
                    <a class="partner-box partner-box-8"></a>
                </div>
            </div>   
    </section>

    <section id="location" class="section location">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}会议地址{{else}}Event Location{{end}}</h3>
                    <address>
                        <p>北京 东城区<br>工体北路新中西街8号<br>亚洲大酒店<br> Email: xiemengjun@gmail.com</p>
                    </address>
                </div>
                <div class="col-sm-9">
                    <div class="map" id="mapContainer"></div>
                </div>
            </div>
        </div>
    </section>
    <script type="text/javascript" src="//api.map.baidu.com/api?v=1.4&s=1"></script>
<script type="text/javascript">

var map = new BMap.Map("mapContainer");          
    
var point = new BMap.Point(116.445605, 39.939396);
    
map.centerAndZoom(point, 15);   
    
map.addControl(new BMap.NavigationControl());  
    
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
    
var marker = new BMap.Marker(point);  
    
map.addOverlay(marker);  

</script>

{{template "base/footer.html" .}}
