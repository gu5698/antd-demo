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

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("熱門報導", "1", <MailOutlined />),
  getItem("台灣", "2", <CalendarOutlined />),
  getItem("中國", "3", <AppstoreOutlined />),
  getItem("全球", "4", <SettingOutlined />),
  getItem("娛樂", "5", <LinkOutlined />),
  getItem("商業", "6", <CalendarOutlined />),
  getItem("運動", "7", <AppstoreOutlined />),
  getItem("科技", "8", <SettingOutlined />),
];

const App = () => {
  const [TemplateData] = useTemplateData();
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
              style={{
                width: 256,
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode={"vertical"}
              theme={"light"}
              items={items}
            />
          </Sider>
          <Content>
            {TemplateData.map((d) => {
              return (
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="img"
                      src={d.urlToImage}
                    />
                  }
                >
                  <Meta title={d.title} description={d.author} />
                </Card>
              );
            })}
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
      }
    }
  }
  .ant-layout-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: scroll;
    .ant-card {
      border-radius: 10px;
      margin-bottom: 15px;
      .ant-card-cover {
        display: flex;
        overflow: hidden;
        height: 150px;
        align-items: center;
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
