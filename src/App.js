import { Layout, Input, Menu, Card } from "antd";
import {
  SearchOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./App.css";
import styled from "styled-components";
import useTemplateData from "./Api";
import {
  Route,
  Link,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Meta } = Card;

const onSearch = (value) => console.log(value);

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const menuData = [
  { label: "熱門報導", icon: <MailOutlined />, path: "/top-headlines" },
  { label: "台灣", icon: <CalendarOutlined />, path: "/taiwan" },
  { label: "中國", icon: <AppstoreOutlined />, path: "/china" },
  { label: "全球", icon: <SettingOutlined />, path: "/china" },
  { label: "娛樂", icon: <LinkOutlined />, path: "/entertainment" },
  { label: "商業", icon: <CalendarOutlined />, path: "/business" },
  { label: "運動", icon: <AppstoreOutlined />, path: "/sport" },
  { label: "科技", icon: <SettingOutlined />, path: "/tech" },
];

const items = menuData.map((d, i) => ({
  key: `menu_${i}`,
  icon: d.icon,
  label: <Link to={d.path}>{d.label}</Link>,
}));

const App = () => {
  const [TemplateData] = useTemplateData();
  const selectedKey = useLocation().pathname;

  return (
    <MainPage className="App">
      <Layout>
        <Header>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png"
            alt="logo"
          ></img>
          <Search
            placeholder="input search text"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={[`menu_${menuData.findIndex((d) => d.path === selectedKey)}`]}
              mode={"vertical"}
              theme={"light"}
              items={items}
            />
          </Sider>
          <Content>
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate to="/top-headlines" replace />}
              />
              <Route
                exact
                path="/top-headlines"
                element={TemplateData.map((d, i) => {
                  return (
                    <Card
                      key={`card_${i}`}
                      hoverable
                      style={{
                        width: "30%",
                      }}
                      cover={<img alt="img" src={d.urlToImage} />}
                    >
                      <Meta title={d.title} description={d.author} />
                    </Card>
                  );
                })}
              />
            </Routes>
          </Content>
        </Layout>
        <Footer>
          <div>隱私權和cookie</div>
          <div>法律聲明</div>
          <div>廣告</div>
          <div>關於我們的廣告</div>
          <div>說明</div>
          <div>意見反應</div>
          <span>2021 Micrsoft</span>
        </Footer>
      </Layout>
    </MainPage>
  );
};

const MainPage = styled.div`
  & > .ant-layout {
    height: 100vh;
  }
  header {
    background: #fff;
    display: flex;
    align-items: center;
    img {
      width: auto;
      height: 100%;
      margin-right: 15px;
    }
    .ant-input-search {
      width: 200px;
      border-radius: 50%;
      .ant-input-affix-wrapper {
        border-radius: 20px;
      }
      .ant-input-group-addon {
        display: none;
      }
    }
  }
  .ant-layout-has-sider {
    height: 100%;
    aside {
      height: 100%;
      .ant-layout-sider-children {
        background: #fff;
        height: 100%;
        overflow: hidden;
        .ant-menu-item-selected {
          background-color: transparent;
        }
      }
    }
  }
  .ant-layout-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;
    .ant-card {
      border-radius: 10px;
      margin: 15px;
      overflow: hidden;
      .ant-card-cover {
        display: flex;
        align-items: center;
        height: 125px;
        overflow: hidden;
        img {
          height: auto;
          width: 100%;
        }
      }
    }
  }
  .ant-layout-footer {
    display: flex;
    color: #333;
    div {
      margin-right: 15px;
    }
    span {
      margin-left: auto;
    }
  }
`;

export default App;
