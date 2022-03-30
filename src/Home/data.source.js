import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://cdn.gocn.vip/gocn-forum/static/logo.346ad1a5.png',
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
        children: 'Gopher China 2022',
        texty: true,
      },
      { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time kn1ualpknel-editor_css',
        children: (
          <span>
            <p>2022.06.11 - 2021.06.12 / 中国·北京</p>
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
              '',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '神秘嘉宾' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: '敬请期待' },
          content: { className: 'block-content', children: '' },
        },
      }
    ]
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
        title: "敬请期待",
        cover: [{
          name: 'duandian',
          className: 'block',
          md: 12,
          xs: 24,
          children: {
            wrapper: { className: 'block-content' },
            img: {
              children:
                '',
            },
          },
        }],
      },
    ],
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
            { name: 'title', children: '2021 年 Gopher China', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '2021年六月26-27日 北京',
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
    children: [],
  },
};