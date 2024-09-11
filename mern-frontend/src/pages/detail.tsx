import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const Detail: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<any>({});

  // Get token from localStorage
  const token = localStorage.getItem('token');
  const API_URL = 'http://localhost:5000'; // Change this to your API URL

  // Fetch user profile data
  const fetchProfile = async () => {
    if (!token) {
      message.error('No token found. Please log in.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setInitialValues(response.data);
      form.setFieldsValue(response.data);
    } catch (error) {
      message.error('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const onFinish = async (values: any) => {
    if (!token) {
      message.error('No token found. Please log in.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(`${API_URL}/update-profile`, values, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      message.success(response.data.message);
    } catch (error) {
      message.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
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
        onClick={fetchProfile} 
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
          form={form}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 1000, width: '100%' }} 
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          initialValues={initialValues}
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
            {/* <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              style={{ width: '48%' }}
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
       

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

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Detail;
