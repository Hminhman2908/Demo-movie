import React from "react";
import {
  Button,
  //  Checkbox,
  Form,
  Input,
  message,
} from "antd";
import axios from "axios";
import { BASE_URL, configHeaders } from "../api/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/constant/user";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../api/localService";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeaders(),
      })
      .then((res) => {
        // Đẩy res lên redux sau khi đăng nhập(login) thành công
        let action = {
          type: SET_INFO,
          payload: res.data.content,
        };
        dispatch(action);
        // Lưu data xuống localStorage
        userLocalStorage.set(res.data.content);
        // chuyển hướng về trang home
        navigate("/");
        message.success("Đăng nhập thành công");
      })
      .catch((err) => {
        console.log(err);
        message.error("Tài khoản hoặc mật khẩu không chính xác");
      });
  };
  return (
    <Form
      className="w-1/2 mt-auto mb-auto"
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 20,
      }}
      // style={{
      //   maxWidth: 600,
      // }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 20,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 20,
        }}
      >
        <Button type="primary" className="bg-red-600" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
