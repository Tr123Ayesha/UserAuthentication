import React from 'react';
import { Button, Form, Input, Checkbox, Select, DatePicker } from 'antd';

const { Option } = Select;

const SignUp: React.FC = () => (
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
      <p style={{fontSize:'24px',fontWeight:'600'}}>Sign Up</p>
      <Form
        name="signup"
        wrapperCol={{ span:40}}
        style={{ maxWidth: 1000, width: '100%' }} 
        onFinish={(values) => console.log('SignUp Success:', values)}
        autoComplete="off"
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>

        <Form.Item
          name="gender"
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <Select placeholder="Select Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Sign Up
          </Button>
        </Form.Item>

        <p>Already have an account? <a href="/detail">Log in</a></p>
      </Form>
    </div>
  </div>
);

export default SignUp;
