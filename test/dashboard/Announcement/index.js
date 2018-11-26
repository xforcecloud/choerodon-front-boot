import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'choerodon-ui';
import './index.scss';
import NavBar from '../../../src/containers/components/dashboard/Navbar';
import ToolBar from '../../../src/containers/components/dashboard/Toolbar';
import Action from '../../../src/containers/components/action';

export default class Announcement extends Component {
  state = {
    visible: true,
  };

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <ToolBar>
          {
            visible && <Action data={[]} />
          }
        </ToolBar>
        <div className="c7n-iam-dashboard-announcement">
          <ul>
            <li>
              <Icon type="volume_up" onClick={() => this.setState({ visible: false })} />
              <a target="choerodon" href="http://choerodon.io/zh/docs/release-notes/changelog_v0.8/">
                <FormattedMessage id="announcement.item.01" />
              </a>
            </li>
            <li>
              <Icon type="volume_up" />
              <a target="choerodon" href="http://choerodon.io/zh/docs/release-notes/changelog_v0.7/">
                <FormattedMessage id="announcement.item.02" />
              </a>
            </li>
            <li>
              <Icon type="volume_up" />
              <a target="choerodon" href="http://choerodon.io/zh/docs/release-notes/changelog_v0.6/">
                <FormattedMessage id="announcement.item.03" />
              </a>
            </li>
          </ul>
          <NavBar>
            <a target="choerodon" href="http://choerodon.io/zh/docs/release-notes/">
              <FormattedMessage id="announcement.redirect" />
            </a>
          </NavBar>
        </div>
      </Fragment>
    );
  }
}
