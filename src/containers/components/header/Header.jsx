import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MenuType from './MenuType';
import Logo from './Logo';
import Setting from './Setting';
import User from './User';
import Inbox from './Inbox';
import { PREFIX_CLS } from '../../common/constants';
import './style';

const prefixCls = `${PREFIX_CLS}-boot-header`;

@inject('AppState', 'HeaderStore', 'MenuStore')
@observer
class Header extends Component {
  componentDidMount() {
    const { AppState, HeaderStore, MenuStore } = this.props;
    MenuStore.loadMenuData({ type: 'site' }, false);
    HeaderStore.axiosGetOrgAndPro(AppState.getUserId);
  }

  render() {
    const { AppState: { getUserInfo: { image_url: imgUrl } }, MenuStore: { getSiteMenuData }, history } = this.props;
    return (
      <div className={`${prefixCls}-wrap`}>
        <div className={`${prefixCls}-left`}>
          <Logo history={history} />
        </div>
        <ul className={`${prefixCls}-center`}>
          <li>
            <MenuType />
          </li>
          {
            getSiteMenuData.length > 0 && (
              <li>
                <Setting />
              </li>
            )
          }
        </ul>
        <ul className={`${prefixCls}-right`}>
          <li>
            <Inbox />
          </li>
          <li>
            <User imgUrl={imgUrl} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
