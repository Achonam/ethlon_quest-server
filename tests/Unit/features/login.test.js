import Joi from 'joi';
import LoginUserRequest from '../../../src/app/requests/login-user.request.js';


describe("LoginUserRequest", () => {
  let loginUserRequest;
  beforeEach(() => {
    const req = {};
    loginUserRequest = new LoginUserRequest(req);
  });

  test("The user can login using their email and password", async () => {
    (await request(app).post("/api/v1/auth/login")).send({
      email: "testuser@gmail.com",
      password: "password",
    });
    const response = await request(app).post("/api/v1/auth/login").send({
      email: "testuser@gmail.com",
      password: "password",
    });
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("User registered successfully");
  });

  test("should show an error when a user tries to login using invalid email or password", async () => {
    (await request(app).post("/api/v1/auth/login")).send({
      username: " testuser",
      email: "testuser@gmail.com",
      password: "password",
    });
    const response = (await request(app).post("/api/v1/auth/login")).send({
      username: "anotheruser",
      password: "password",
    });
    expect(response.status).toBe(404);
    expext(response.body).toHaveProperty("message");
  });
});


