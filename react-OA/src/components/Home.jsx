import { Layout,Menu,Input, Space, Drawer ,Typography,Dropdown} from 'antd';
import { AppstoreOutlined, CheckSquareOutlined,SearchOutlined,BellOutlined,DownOutlined  } from '@ant-design/icons';
import React , { useState } from 'react';
import '../css/index.css';
import '../css/homeapp.css';
import img from  '../img/img.png'
import {useNavigate,Outlet} from 'react-router-dom'
const { Header, Sider, Content } = Layout;

// 点击路由
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
// 点击路由
const items = [
    getItem('', 'g1', null, [getItem('工作台', 'home',<AppstoreOutlined/>),getItem('日程待办', 'day',<CheckSquareOutlined/>)], 'group'),
];
export default function HomeApp() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  const onClick = (e) => {
    console.log(e.key);
    navigate('/'+e.key)
  };
// 抽屉
const showDrawer = () => {
  setVisible(true);
};
const onClose = () => {
  setVisible(false);
};
// 下拉菜单
const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['2']}
    items={[
      {
        key: '1',
        label: '重置密码',
      },
      {
        type: 'divider',
      },
      {
        key: '2',
        label: '退出系统',
      },
    ]}
  />
);
  return (
    <div>
       <Layout>
      <Header className='top'> 
      <Space size={50}>

          <span>OA办公后台管理系统</span> 
      <Input
      className='input'
      placeholder="请输入关键字"
      prefix={<SearchOutlined   className="site-form-item-icon" />}
    />
     </Space>
     <Space size={20}>
    <div className='message'>
       <BellOutlined className='small' onClick={showDrawer}></BellOutlined>
    <Drawer title="消息通知" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
      </Drawer>
      
    </div>

      <img src={img} alt="" />
      <Dropdown overlay={menu} className='but'>
    <Typography.Link>
      <Space>
       <h5 >Daisy</h5> 
        <DownOutlined  className='button'/>
      </Space>
    </Typography.Link>
  </Dropdown>
    </Space>
    
    
      </Header>
      <Layout>
      <Sider className="center">
      <Menu
      onClick={onClick}
      mode="inline"
      theme="light "
      items={items}
    />
      </Sider>
        <Content className='right'>
<Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>

    </div>
  )
}
