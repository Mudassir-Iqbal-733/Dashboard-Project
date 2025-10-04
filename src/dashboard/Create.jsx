import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [loading, setLoading] = useState(false);
    const navigator = useNavigate();

    const onFinish = values => {
        setLoading(true);
axios.post('https://68b990866aaf059a5b57fd8d.mockapi.io/api/products', values)
  .then(function (response) {
    navigator("/products");
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>{
    setLoading(false);
  } 
)};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
  
    //create a card holding form
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
         <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Product Name"
      name="name"
      rules={[{ required: true, message: 'This field is mandatory' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Image Url"
      name="image"
      rules={[{ required: true, message: 'This field is mandatory' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'This field is mandatory' }]}
    >
      <InputNumber min={1} max={500} />
    </Form.Item>
     <Form.Item
      label="Rating"
      name="rating"
      rules={[{ required: true, message: 'This field is mandatory' }]}
    >
      <InputNumber min={1} max={5} />
    </Form.Item>
    <Form.Item
      label="Product Description"
      name="description"
      rules={[{ required: true, message: 'This field is mandatory' }]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" loading={loading}>
        Submit
      </Button>
    </Form.Item>
  </Form>
</div>
  )
}

export default Create