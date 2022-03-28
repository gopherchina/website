import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    const scrollToAnchor = (anchorName) => {
      if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
      }
    }
    const children = dataSource.textWrapper.children.map((item) => {
      const { name, texty, ...$item } = item;
      if (name.match('button')) {
        return (
          <Button type="primary" key={name} {...$item} onClick={() => scrollToAnchor('Content4_1')}>
            {item.children}
          </Button>
        );
      }

      return (
        <div key={name} {...$item}>
          {texty ? (
            <Texty type="mask-bottom">{item.children}</Texty>
          ) : (
            item.children
          )}
        </div>
      );
    });
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          {children}
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;
