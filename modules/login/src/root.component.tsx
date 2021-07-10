import { Form, Input, Button, Card, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./styles/login-form.scss";

interface Rule {
  required: boolean;
  message: string;
}

export default function Root(props) {
  const required_rule: Rule = { required: true, message: "Required field" };

  return (
    <Form className="login-form" name="login">
      <Card>
        <Form.Item name="username" rules={[required_rule]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item name="password" rules={[required_rule]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form__forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__login"
          >
            Login
          </Button>
          <Button className="login-form__register">Register</Button>
        </Form.Item>
      </Card>
    </Form>
  );
}
