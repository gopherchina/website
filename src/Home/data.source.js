import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://gocn.vip/uploads/logo.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#Content13_0',
          children: [{ children: '大会简介', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#Teams4_0',
          children: [{ children: '特邀嘉宾', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#Content9_1',
          children: [{ children: '会议议程', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#Contact0_0',
          children: [{ children: '会议地址', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '#Content12_1',
          children: [{ children: '赞助商', name: 'text' }],
        },
      },
      {
        name: 'item5',
        className: 'header3-item',
        children: {
          href: '#Content4_1',
          children: [{ children: '我要报名', name: 'text' }],
        },
      },
      {
        name: 'item6',
        className: 'header3-item',
        children: {
          href: '#Teams0_0',
          children: [{ children: '大会历程', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner31DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en kn1uariso-editor_css',
        children: (
          <span>
            <p></p>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'Gopher China 2021',
        texty: true,
      },
      { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time kn1ualpknel-editor_css',
        children: (
          <span>
            <p>2021.06.26 - 2021.06.27 / 中国·北京</p>
          </span>
        ),
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>GopherChina 大会简介</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>
              Gopher China 是中国最权威、最实力、最干货的 Go
              大会，致力于为中国广大的 Gopher 提供最好的技术交 流大会。
            </p>
            <p>
              自2015年主办以来，连续 6
              年都获得了非常好的口碑，每一年的大会从质到量都有一次新的突破。
            </p>
            <p>
              2021年第七届 Gopher China
              大会将于六月份在北京举办。届时我们将聚集一批大规模应用 Go
              的实际案例和技术实践呈现给大家，同时这也将是一场很cool的盛会。
            </p>
            <p>
              我们的传统是每年必须有T恤，必须有，而且是限量版，只有参会的人才有，买不到
            </p>
          </span>
        ),
        className: 'title-content kn1v1o9ugcu-editor_css',
      },
    ],
  },
};
export const Content91DataSource = {
  wrapper: {
    className: 'home-page-wrapper content9-wrapper kmsrzsjbmz-editor_css',
  },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '会议日程', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/9aef5533-b7ab-4041-bf2d-730795057626.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '曹春晖' },
          post: { className: 'block-post', children: '资深 Gopher，Go contributor' },
          time: { className: 'block-time', children: '2021-06-25  09:00-17:30' },
          title: { className: 'block-title', children: '会前培训：Go 性能优化实战训练拨开云雾，指点 Go 性能的迷津' },
          content: { className: 'block-content', children: '学习常见的调优工具，了解如何诊断实践中的性能问题，并针对这些问题进行优化' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/114537896164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: 'Ian Lance Taylor' },
          post: { className: 'block-post', children: 'Go Team' },
          time: { className: 'block-time', children: '2021-06-26  09:10-10:00 主会场' },
          title: { className: 'block-title', children: 'Generics in Go' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/113900477164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '刘浩扬' },
          post: { className: 'block-post', children: '端点科技-基础平台/PaaS/技术专家' },
          time: { className: 'block-time', children: '2021-06-26 10:00-11:00 主会场' },
          title: { className: 'block-title', children: '基于Golang构建高可扩展的云原生PaaS平台' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/115605661164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '王发康' },
          post: { className: 'block-post', children: '蚂蚁集团可信原生技术部/技术专家' },
          time: { className: 'block-time', children: '2021-06-26 11:00-12:00 主会场' },
          title: { className: 'block-title', children: 'MOSN 在云原生的探索和实践' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2021-06-26 12:00-13:00' },
          title: { className: 'block-title', children: '午休' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/120601329164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '黄东旭' },
          post: { className: 'block-post', children: 'PingCAP联合创始人/CTO' },
          time: { className: 'block-time', children: '2021-06-26 13:00-14:00 主会场' },
          title: { className: 'block-title', children: '浅谈全链路可观测性：从应用到Go Runtime' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/e2dc666c-d6f9-4331-9679-01a4f96f5cc3.jpg?x-oss-process=image%2Fresize%2Cw_1920',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: 'Chee Ming Chew' },
          post: { className: 'block-post', children: 'Grab' },
          time: { className: 'block-time', children: '2021-06-26 14:00-15:00 主会场' },
          title: { className: 'block-title', children: 'Improving Go Backend Developer Experience in Grab' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2021-06-26 15:00-15:20 主会场' },
          title: { className: 'block-title', children: '茶歇' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/115904649164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '喻波' },
          post: { className: 'block-post', children: '滴滴云平台事业部/专家工程师' },
          time: { className: 'block-time', children: '2021-06-26 15:30-16:30 主会场' },
          title: { className: 'block-title', children: '利用夜莺扩展能力打造全方位监控体系' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20190219/163509016164.jpg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: 'Florin Patan' },
          post: { className: 'block-post', children: 'JetBrains Developer Advocate' },
          time: { className: 'block-time', children: '2021-06-26 16:30-17:30 主会场' },
          title: { className: 'block-title', children: 'Build a home monitoring system with Go' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210514/104307476164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '安晏伯' },
          post: { className: 'block-post', children: '学而思-直播研发部技术专家' },
          time: { className: 'block-time', children: '2021-06-27 09:00-10:00 分会场一' },
          title: { className: 'block-title', children: 'Golang主动式内存缓存架构的优化探索之路' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20200924/125240003164.jpg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '许式伟' },
          post: { className: 'block-post', children: '七牛CEO' },
          time: { className: 'block-time', children: '2021-06-27 10:00-11:00 分会场一' },
          title: { className: 'block-title', children: 'Go+与数据科学' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/120319790164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '蒙卓 ' },
          post: { className: 'block-post', children: '华为/ Go Contributor' },
          time: { className: 'block-time', children: '2021-06-27 11:00-12:00 分会场一' },
          title: { className: 'block-title', children: '如何用Go模拟CPU' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2021-06-27 12:00-13:00 分会场一' },
          title: { className: 'block-title', children: '午休' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20170209/234638296164.jpg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: 'Dave Cheney' },
          post: { className: 'block-post', children: 'Atlassion Principle Software Engineer' },
          time: { className: 'block-time', children: '2021-06-27 13:00-14:00 分会场一' },
          title: { className: 'block-title', children: 'The Zen Of Go' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210514/111346362164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '续日 ' },
          post: { className: 'block-post', children: '阿里巴巴-高级软件工程师' },
          time: { className: 'block-time', children: '2021-06-27 14:00-15:00 分会场一' },
          title: { className: 'block-title', children: 'Go 语言国际电子表格办公文档格式标准实践' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2021-06-27 15:00-15:30 分会场一' },
          title: { className: 'block-title', children: '茶歇' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210512/154439670164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '周正喜 ' },
          post: { className: 'block-post', children: '阿里云/工程师' },
          time: { className: 'block-time', children: '2021-06-27 15:30-16:30 分会场一' },
          title: { className: 'block-title', children: '阿里巴巴新一代基于 Go 的云原生应用引擎实践' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210512/154659554164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '郑渊' },
          post: { className: 'block-post', children: '腾讯新闻/高级工程师' },
          time: { className: 'block-time', children: '2021-06-27 16:30-17:30 分会场一' },
          title: { className: 'block-title', children: '如何构建易于拆分的单体应用' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20190220/102106044164.jpg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '晁岳攀 ' },
          post: { className: 'block-post', children: '微博平台研发中心架构组/资深架构师' },
          time: { className: 'block-time', children: '2021-06-27 09:00-10:00 分会场二' },
          title: { className: 'block-title', children: '深入探索Go Module: 实践、技巧和陷阱' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/120857649164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '章淼' },
          post: { className: 'block-post', children: '百度' },
          time: { className: 'block-time', children: '2021-06-27 10:00-11:00 分会场二' },
          title: { className: 'block-title', children: '深入理解BFE' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/120007723164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '曹春晖' },
          post: { className: 'block-post', children: '曾供职于滴滴和蚂蚁金服' },
          time: { className: 'block-time', children: '2021-06-27 11:00-12:00 分会场二' },
          title: { className: 'block-title', children: 'Go 语言的抢占式调度' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2021-06-27 12:00-13:00 分会场二' },
          title: { className: 'block-title', children: '午休' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210514/104250254164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '高川' },
          post: { className: 'block-post', children: 'P1-基础架构' },
          time: { className: 'block-time', children: '2021-06-27 13:00-14:00 分会场二' },
          title: { className: 'block-title', children: 'K8S私有云建设实践' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210512/165530811164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '万俊峰 ' },
          post: { className: 'block-post', children: '好未来-技术委员会资深专家' },
          time: { className: 'block-time', children: '2021-06-27 14:00-15:00 分会场二' },
          title: { className: 'block-title', children: 'go-zero分布式缓存最佳实践' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2021-06-27 15:00-15:30 分会场二' },
          title: { className: 'block-title', children: '茶歇' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210511/120952391164.png?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '何晨 ' },
          post: { className: 'block-post', children: '头条' },
          time: { className: 'block-time', children: '2021-06-27 15:30-16:30 分会场二' },
          title: { className: 'block-title', children: '字节跳动在 Go 网络库上的实践' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper kmsrzf2eui9-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://img.bagevent.com/resource/20210514/114134451164.jpeg?imageView2/2/w/120/interlace/0/q/100',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '曾庆国 ' },
          post: { className: 'block-post', children: '好雨科技-技术负责人' },
          time: { className: 'block-time', children: '2021-06-27 16:30-17:30 分会场二' },
          title: { className: 'block-title', children: '云原生技术在2B软件交付中的实践' },
          content: { className: 'block-content', children: '' },
        },
      },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://ditu.amap.com/search?id=B0FFFCMCHK&city=110108&geoobj=103.43752%7C30.155757%7C105.322166%7C31.21094&query_type=IDQ&query=%E6%9C%97%E4%B8%BD%E5%85%B9%E8%A5%BF%E5%B1%B1%E8%8A%B1%E5%9B%AD%E9%85%92%E5%BA%97&zoom=9.48', name: '跳转地址' },
      title: { children: '大会地址', name: '弹框标题' },
      content: {
        children: '朗丽兹西山花园酒店 北京市海淀区丰智东路13号',
        name: '弹框内容',
      },
    },
  },
};
export const Content121DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特别鸣谢', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '',
      },
    ],
  },
  block: {
    className: '',
    children: [
      {
        title: "联合主办",
        cover: [{
          name: 'duandian',
          className: 'block',
          md: 12,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/bdaea0b8-bfe3-4615-bb8d-78666a0ad2d5.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
      {
        title: "钻石赞助",
        cover: [{
          name: 'ant',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/ea7e9fc9-0629-4521-8789-344188714dd6.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'grab',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/3b020819-7c49-46e4-9a3d-9cbcbdc6ae7f.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'didi',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/12263b80-992d-47d4-bb4a-7dc5ac5af509.jpg?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
      {
        title: "白金赞助",
        cover: [{
          name: 'tars',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/aa7ec20f-42bc-4fad-ab2d-b224dfabd2b9.jpg?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'jet',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/e879b9cd-b443-4331-a041-5668e9204204.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'pingcap',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/7cb44686-ece5-4b1d-9bc7-47353f63b204.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
      {
        title: "金牌赞助",
        cover: [{
          name: 'xueersi',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/7a04aebb-137a-4ed7-9e61-99d7a5ac4b0e.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'qulian',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/5ec9c2b7-db5d-475b-8ecc-fce584cbce4f.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'bixin',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/2f9fed4d-1894-4862-8eb2-66f21205cd28.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'beike',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/9e2fcc7c-c9c7-4c09-8bf4-487ab34db8f0.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'longbridge',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/f0917f5b-3190-43f5-8b3b-2c631845d4e7.jpg?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
      {
        title: "晚宴赞助",
        cover: [{
          name: 'apache',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/383d4045-0622-4134-a8e7-65ab5d9e496f.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
      {
        title: "茶歇赞助",
        cover: [{
          name: 'after',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/7c0d6fed-0a93-43a3-89b3-01e443ae2164.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },
        {
          name: 'ela',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/09932281-0b65-4a53-a1c8-9d1e04539222.jpeg?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
      {
        title: "合作伙伴",
        cover: [{
          name: 'huodongjia',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/6557dc4e-646d-4192-83a8-1dff118cc1ef.jpg?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        },{
          name: 'sf',
          className: 'block',
          md: 8,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/b6a6da68-cc92-4a28-84fe-b99dad75bc73.png?x-oss-process=image%2Fresize%2Cw_1920',
            },
          },
        }],
      },
    ]
  }
};
export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '我要报名',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '',
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          url: 'http://2015.gopherchina.org/',
          children: [
            {
              name: 'image',
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/422dc915-07a6-41d5-8d1e-e257c84ad9db.png?x-oss-process=image%2Fresize%2Cw_1920',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            { name: 'title', children: '2015 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2015年4月25-26日 上海',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          url: 'http://2016.gopherchina.org/',
          children: [
            {
              name: 'image',
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/72f7c693-ffab-4562-9915-b6501307bdfe.png?x-oss-process=image%2Fresize%2Cw_1920',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            { name: 'title', children: '2016 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2016年四月16-17日 北京',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          url: 'http://2017.gopherchina.org/',
          children: [
            {
              name: 'image',
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/50c555b5-3f88-4a6d-aa72-152c6dac51d4.png?x-oss-process=image%2Fresize%2Cw_1920',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            { name: 'title', children: '2017 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2017年四月15-16日 上海',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          url: 'http://2018.gopherchina.org/',
          children: [
            {
              name: 'image',
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/c46127ee-ea48-47c5-85f9-ac20e4c66180.png?x-oss-process=image%2Fresize%2Cw_1920',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            { name: 'title', children: '2018 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2018年四月14-15日 上海',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          url: 'http://2019.gopherchina.org/',
          children: [
            {
              name: 'image',
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/73c905da-c29c-4c03-a353-6d996f085910.png?x-oss-process=image%2Fresize%2Cw_1920',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            { name: 'title', children: '2019 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2019年四月27-28日 北京',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          url: 'http://2020.gopherchina.org/',
          children: [
            {
              name: 'image',
              children:
                'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/19053d29-247e-4d93-9207-bda4de3543f3.png?x-oss-process=image%2Fresize%2Cw_1920',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            { name: 'title', children: '2020 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2020年十一月21-22日 上海',
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Footer01DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper kn1v5q2fn2k-editor_css',
  },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright kn1v53mfe1m-editor_css',
    children: (
      <span>
        Gopher China 大会 | Powered by Wbofeng
      </span>
    ),
  },
};
export const Teams40DataSource = {
  wrapper: {
    className: 'home-page-wrapper content8-wrapper kobgcf0g8no-editor_css',
  },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特邀嘉宾', className: 'title-h1' },
    ],
  },
  block: {
    className: 'content-wrapper',
    children: [
      {
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/32df4769-f834-4c1e-b1fc-f826ac1b77ef.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: 'Go Team' },
          content: {
            className: 'content8-content',
            children: 'Google',
          },
          topic: {
            className: 'content8-content',
            children: 'generic in go',
          },
        },
      },
      {
        name: 'block1',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/62f137cb-56d8-4862-ad54-3348bfe1c438.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '王发康' },
          content: {
            className: 'content8-content',
            children: '蚂蚁金服',
          },
          topic: {
            className: 'content8-content',
            children: 'MOSN 在云原生的探索和实践',
          },
        },
      },
      {
        name: 'block2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/bded6ddd-0a4c-40de-b605-ff21e283793d.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '刘浩杨' },
          content: {
            className: 'content8-content',
            children: '端点',
          },
          topic: {
            className: 'content8-content',
            children: '基于Golang构建高可扩展的云原生PaaS平台',
          },
        },
      },
      {
        name: 'block3',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/3e89afda-9c93-42eb-b2d3-646a42dbe7ab.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '喻波/秦晓辉' },
          content: {
            className: 'content8-content',
            children: '滴滴',
          },
          topic: {
            className: 'content8-content',
            children: '利用夜莺扩展能力打造全方位监控体系',
          },
        },
      },
      {
        name: 'block4',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/9aef5533-b7ab-4041-bf2d-730795057626.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '曹春晖' },
          content: {
            className: 'content8-content',
            children: 'Go Contributor',
          },
          topic: {
            className: 'content8-content',
            children: 'Go 语言的抢占式调度',
          },
        },
      },
      {
        name: 'block5',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/6124f9e0-e04c-42b0-841c-5fac1a29bf69.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '蒙卓' },
          content: {
            className: 'content8-content',
            children: '华为/ Go Committer',
          },
          topic: {
            className: 'content8-content',
            children: '如何用 Go 模拟 CPU',
          },
        },
      },
      {
        name: 'block6',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/0f4462ef-7168-4ac4-af65-7d6ee1a52327.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '许式伟' },
          content: {
            className: 'content8-content',
            children: '七牛',
          },
          topic: {
            className: 'content8-content',
            children: 'Go+与数据科学',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/305439ce-4f9e-41b2-b4c4-6c8f1f1d39cb.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '黄东旭' },
          content: {
            className: 'content8-content',
            children: 'PingCAP',
          },
          topic: {
            className: 'content8-content',
            children: '浅谈全链路可观测性：从应用到Go Runtime',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/d5f1d3ec-abb5-41b7-87d5-17fd7ab53197.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '章淼' },
          content: {
            className: 'content8-content',
            children: '百度',
          },
          topic: {
            className: 'content8-content',
            children: '深入理解BFE',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/39236ea6-0a9d-4f6a-b37f-1e498ccdde00.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: '何晨' },
          content: {
            className: 'content8-content',
            children: '头条',
          },
          topic: {
            className: 'content8-content',
            children: '字节跳动在 Go 网络库上的实践',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/b9f49a98-6878-4195-b18b-a0d0b12b8044.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: 'Florin Patan' },
          content: {
            className: 'content8-content',
            children: 'JetBrains',
          },
          topic: {
            className: 'content8-content',
            children: 'Build a home monitoring system with Go',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gocn.oss-cn-shanghai.aliyuncs.com/photo/wbofeng/cbe2a254-fe42-473f-8f4c-39546eda0f04.png?x-oss-process=image%2Fresize%2Cw_1920',
          },
          title: { className: 'content8-title', children: 'Dave Cheney' },
          content: {
            className: 'content8-content',
            children: 'VMware',
          },
          topic: {
            className: 'content8-content',
            children: 'The Zen Of Go',
          },
        },
      },
    ],
  },
};