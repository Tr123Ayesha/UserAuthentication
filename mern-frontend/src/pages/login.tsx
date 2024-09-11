import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/login', values);

      // On success, store the JWT token in localStorage
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/detail');
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
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
          padding: '20px', 
          backgroundColor: '#fff'
        }}
      >
        <p style={{ fontSize: '24px', fontWeight: '600' }}>Login</p>

        <Form
          name="login"
          wrapperCol={{ span: 40 }}
          style={{ maxWidth: 400, width: '100%' }}
          onFinish={onFinish}
          autoComplete="off"
        >
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

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={loading}>
              Log in
            </Button>
          </Form.Item>
          <p>Dont,t have an account? <a href="/signup">Sign Up</a></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
