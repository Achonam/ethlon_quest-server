import Joi from "joi";
import CreateUserRequest from "../../../src/app/requests/create-user.request.js"




const app = Utilities.bootraptest
describe("CreateUserRequest", () => {
  let createUserRequest;

  beforeEach(() => {
    // Mock request object if needed
    const req = {};
    createUserRequest = new CreateUserRequest(req);
  });

  

  describe("validation", () => {
    const validate = (data) => {
      const schema = Joi.object(createUserRequest.rules());
      return schema.validate(data);
    };

    it("should validate a correct user input", () => {
      const userInput = {
        email: "test@example.com",
        password: "hard-word23",
        role: "student",
        firstName: "melitus",
        lastName: "Dom",
        phoneNumber: "816689345",
        country: "Nigeria",
        street: "new-town",
        city: "Anytown",
        state: "Enugu",

        primary: true,
        gender: "male",
      };

      const { error } = validate(userInput);
      expect(error).toBeUndefined();
    });
    xpect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("User registerd succesfully");

    it("should fail validation for missing required fields", () => {
      const userInput = {
        email: "test@example.com",
        password: "",
        role: "student",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        country: "",
        street: "",
        city: "",
        state: "",
        primary: true,
        gender: "",
        // Missing firstName, lastName, phoneNumber, etc.
      };

      const { error } = validate(userInput);
      expect(error).toBeDefined();
      expect(error.details.length).toBeGreaterThan(0);
    });
    xpect(response.status).toBe(404);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("");

    it("should fail validation for invalid email", () => {
      const userInput = {
        email: "invalid-email",
        password: "hard-word23",
        role: "student",
        firstName: "melitus",
        lastName: "Dom",
        phoneNumber: "816689345",
        country: "Nigeria",
        street: "new-town",
        city: "Anytown",
        state: "Enugu",

        primary: true,
        gender: "male",
      };

      const { error } = validate(userInput);
      expect(error).toBeDefined();
      expect(error.details[0].message).toContain("email");
    });

    it("should fail validation for invalid role", () => {
      const userInput = {
        email: "test@example.com",
        password: "hard-word23",
        role: "invalidRole", // Invalid role
        password: "hard-word23",
        role: "student",
        firstName: "melitus",
        lastName: "Dom",
        phoneNumber: "816689345",
        country: "Nigeria",
        street: "new-town",
        city: "Anytown",
        state: "Enugu",

        primary: true,
        gender: "male",
      };

      const { error } = validate(userInput);
      expect(error).toBeDefined();
      expect(error.details[0].message).toContain("role");
    });

    // Add more tests as necessary for other fields
  });
});
