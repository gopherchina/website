/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';
import Nav3 from './Nav3';
import Banner3 from './Banner3';
import Content13 from './Content13';
import Content9 from './Content9';
import Contact0 from './Contact0';
import Content12 from './Content12';
import Teams0 from './Teams0';
import Teams4 from './Teams4';
import Footer0 from './Footer0';
import Point from './Point';
import Content4 from './Content4'
import {
  Nav30DataSource,
  Banner31DataSource,
  Content130DataSource,
  Content91DataSource,
  Contact00DataSource,
  Content121DataSource,
  Content40DataSource,
  Teams00DataSource,
  Footer01DataSource,
  Teams40DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    /* 如果不是 dva 2.0 请使用以下代码
    // 实现整屏滚动
    scrollScreen.init({ location: ['Banner3_1', 'Content13_0', 'Content9_1', 'Contact0_0', 'Content12_1', 'Teams0_0', 'Footer0_1'] });
    */
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true
        })
        // 实现整屏滚动
        scrollScreen.init({
          location: [
            'Banner3_1',
            'Content13_0',
            'Content9_1',
            'Contact0_0',
            'Content12_1',
            'Content4_1',
            'Teams0_0',
            'Footer0_1',
          ]
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_1"
        key="Banner3_1"
        dataSource={Banner31DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams4
        id="Teams4_0"
        key="Teams4_0"
        dataSource={Teams40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_1"
        key="Content9_1"
        dataSource={Content91DataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact0
        id="Contact0_0"
        key="Contact0_0"
        dataSource={Contact00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12
        id="Content12_1"
        key="Content12_1"
        dataSource={Content121DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_1"
        key="Content4_1"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_1"
        key="Footer0_1"
        dataSource={Footer01DataSource}
        isMobile={this.state.isMobile}
      />, // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point
        key="list"
        data={[
          'Nav3_0',
          'Banner3_1',
          'Content13_0',
          'Teams4_0',
          'Content9_1',
          'Contact0_0',
          'Content12_1',
          'Teams0_0',
          'Footer0_1',
        ]}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
