{{template "base/header.html" .}}

<header id="site-header" class="site-header valign-center">
        <div class="intro">

{{if eq .Lang "en-US"}}
            <h2>16 April, 2016 / Beijing China</h2>

            <h1>Gopher China 2016</h1>

            <p>Gopher's biggest party</p>

            <a class="btn btn-white" data-scroll href="#register">Register Now</a>

{{else}}
            <h2>中国 北京 / 2016-04-16 09:00 ~ 2016-04-17 18:00</h2>

            <h1>第二届 Gopher China 大会</h1>

            <p>地址: 东城区 工体北路新中西街8号 亚洲大酒店</p>

            <a class="btn btn-white" data-scroll href="#register">注册报名</a>
{{end}}
        </div>
    </header>

   <!--  <section id="speakers" class="section speakers">
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

                    </div>
                </div>

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

                    </div>
                </div>

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

                    </div>
                </div>
            </div>

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
    </section> -->

    <section id="schedule" class="section schedule">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="section-title">{{if eq .Lang "zh-CN"}}会议日程{{else}}Event Schedule{{end}}</h3>
                </div>
            </div>
            <div class="row">
                <table class="table">
            <thead>
                <tr>
                    <th class="am-u-sm-offset-1">日期</th>
                    <th>时间</th>
                    <th>日程安排</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center" rowspan="12" valign="middle">4月16日<br>周六</td>
                    <td>08:20-8:50</td>
                    <td>入场报到</td>
                </tr>
                <tr>
                    <td>08:50-9:00</td>
                    <td>大会介绍</td>
                </tr>
                <tr>
                    <td>09:00-09:10</td>
                    <td>介绍</td>
                </tr>
                <tr>
                    <td>09:10-10:10</td>
                    <td>陈辉,蚂蚁金服       Go在数据挖掘的应用</td>
                </tr>
                <tr>
                    <td>10:15-11:15</td>
                    <td>刘奇,PingCAP       Go在分布式数据库中的应用</td>
                </tr>
                <tr>
                    <td>11:20-12:20</td>
                    <td>许式伟,七牛         待定</td>
                </tr>
                <tr>
                    <td>13:30-14:30</td>
                    <td>孙宏亮,DaoCloud    Go在分布式docker里面的应用</td>
                </tr>
                <tr>
                    <td>14:35-15:35</td>
                    <td>Marcel,Google     Go如何解决i18s和i13n问题</td>
                </tr>
                <tr>
                    <td>15:35-15:55</td>
                    <td>茶歇</td>
                </tr>
                <tr>
                    <td>16:00-17:00</td>
                    <td>米嘉,宜信          Go如何构建Web应用</td>
                </tr>
                <tr>
                    <td>17:00-18:00</td>
                    <td>邓洪超,CoreOS      Go在分布式系统的性能调试和优化</td>
                </tr>
                <tr>
                    <td>20:15-22:30</td>
                    <td>Gopher技术沙龙party, 七牛和DaoCloud联合赞助举办</td>
                </tr>
                <tr>
                    <td align="center" rowspan="9" valign="middle">4月17日<br>周日</td>
                    <td>09:00-10:00</td>
                    <td>Dave Cheney        How to Write high performance application</td>
                </tr>
                 <tr>
                    <td>10:05-11:05</td>
                    <td>吴小伟,阿里云        Go在CDN系统的应用</td>
                </tr>
                 <tr>
                    <td>11:10-12:10</td>
                    <td>陶春华,百度           Go在百度bfe的应用</td>
                </tr>
                 <tr>
                    <td>13:10-14:10</td>
                    <td>毛剑,哔哩哔哩        Go在数据存储上面的应用</td>
                </tr>
                 <tr>
                    <td>14:15-15:15</td>
                    <td>高步双,小米         Go在小米网运维平台的应用与实践</td>
                 </tr>
                 <tr>
                     <td>15:15-15:35</td>
                     <td>茶歇</td>
                 </tr>
                 <tr>
                    <td>15:40-16:40</td>
                    <td>孙建良,网易         Go在网易广域网上传加速系统中的应用</td>
                </tr>
                <tr>
                    <td>16:45-17:45</td>
                    <td>Paul Dix,fluxedb   待定</td>
                </tr>
            </tbody>
        </table>
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
                    <a class="supporters-box supporters-box-1"></a>
                </div>
                <div class="col-sm-3">
                    <a class="supporters-box supporters-box-2"></a>
                </div>
                <div class="col-sm-3">
                    <a class="supporters-box supporters-box-3"></a>
                </div>
                <div class="col-sm-3">
                    <a class="supporters-box supporters-box-4"></a>
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
