import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

function Content4(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;

  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <iframe
            title="iframe_content4"
            id="promote_ticket_iframe"
            width="100%"
            src="https://www.bagevent.com/widget/ticket/8057917?widget=2"
            frameborder="0"
            scrolling="no"
            height={isMobile? '2000' : '1000'}>
          </iframe>
        </OverPack>
      </div>
    </div>
  );
}

export default Content4;
