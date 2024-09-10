import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LogIn: React.FC = () => (
  <div 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw', 
    }}
  >
    <div 
      style={{
        paddingTop: '20px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        boxShadow: '4px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)', 
        paddingBottom: '20px', 
        paddingRight: '20px', 
        paddingLeft: '20px', 
        backgroundColor: '#fff'
      }}
    >
      <p style={{fontSize:'24px',fontWeight:'600'}}>LogIn </p>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 1000, width: '100%' }} 
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
       
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ span: 24 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log In
          </Button>
        </Form.Item>

        <p>Don't have an account? <a href="/signup">Sign up now!</a></p>

      </Form>
    </div>
  </div>
);

export default LogIn;
