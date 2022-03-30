import React from 'react';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';

class Content12 extends React.PureComponent {
  getItemImgRender = (item, title) => {
    let itemList = item.map((itemData) => {
      return (
        <Col key={itemData.name} {...itemData} style={{marginBottom: '32px'}}>
          {
            title == "联合主办" ?  <div {...itemData.children.wrapper} style={{height: '360px', width: '100%', background: `url("${itemData.children.img.children }") center center no-repeat`, backgroundSize: 'cover'}}>
            </div> :  <div {...itemData.children.wrapper} style={
              { height: '120px',
                width: '100%',
                background: `url("${itemData.children.img.children }") center center no-repeat`,
                backgroundSize: itemData.name === "grab" || itemData.name ==="tars" || itemData.name ==="xueersi" || itemData.name ==="beike" || itemData.name ==="sf" ? "cover" : "contain"}}>
            </div>
          }
        </Col>
      );
    })
    return itemList
  }

  getChildrenToRender = (dataSource, classNameProps) => {
    let list = dataSource.block.children.map((item) => {
      let itemImg = this.getItemImgRender(item.cover, item.title)
      return (
        <div style={{ marginBottom: '16px' }}>
          <div style={{ textAlign: "center", fontSize: '26px', marginBottom: '16px' }}>{item.title}</div>
          <Row justify="center" gutter={16}>
            {
              itemImg
            }
          </Row>
        </div>
      )
    });

    return list
  }

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          {childrenToRender}
        </div>
      </div>
    );
  }
}

export default Content12;
