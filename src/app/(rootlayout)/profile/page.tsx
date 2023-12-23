"use client";
import { useUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Avatar, Row, Space } from "antd";

import { UserOutlined } from "@ant-design/icons";
import NavbarSimple from "@/components/Home/NavbarSimple";

const UserProfile = () => {
  const { userId } = getUserInfo() as any;
  const { data } = useUserQuery(userId);
  return (
    <>
      <NavbarSimple />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></div>
      <Row justify="center" align="middle" style={{ marginTop: "2rem" }}>
        <Space wrap size={16}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
      </Row>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <h2>{data?.name}</h2>

        <h3 style={{ margin: "1rem 0" }}>{userId}</h3>

        <p>Phone Number: {data?.phoneNumber}</p>
      </div>
    </>
  );
};

export default UserProfile;
