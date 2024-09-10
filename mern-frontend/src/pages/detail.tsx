import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

const Detail: React.FC = () => (
  <div 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw', 
      position: 'relative'
    }}
  >
    
    <Button 
      type="primary" 
      style={{
        position: 'absolute', 
        top: '20px', 
        left: '20px'
      }}
    >
      Update
    </Button>

    <div 
      style={{
        padding: '20px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        boxShadow: '4px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)', 
        backgroundColor: '#fff',
        width: '80%',
      }}
    >
      <p style={{fontSize: '24px', fontWeight: '600'}}>Personal Information</p>
      <Form
        name="userDetail"
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 1000, width: '100%' }} 
        onFinish={(values) => console.log('User Info Submitted:', values)}
        autoComplete="off"
        layout="vertical"
      >
       
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form.Item
            label="First Name"
            name="firstName"
            style={{ width: '48%' }}
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            style={{ width: '48%' }}
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </div>

        {/* Second Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form.Item
            label="Email"
            name="email"
            style={{ width: '48%' }}
            rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            style={{ width: '48%' }}
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </div>

        {/* Third Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form.Item
            label="Password"
            name="password"
            style={{ width: '48%' }}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            style={{ width: '48%' }}
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
        </div>

        {/* Fourth Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form.Item
            label="Gender"
            name="gender"
            style={{ width: '48%' }}
            rules={[{ required: true, message: 'Please select your gender!' }]}
          >
            <Select placeholder="Select Gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

        </div>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Submit
        </Button>
       
      </Form>
    </div>
  </div>
);

export default Detail;
