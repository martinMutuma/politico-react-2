import loginUser from "../actions/loginActions";
import mockAxios from "jest-mock-axios";

test("Login user works as expected for 200 ok ", () => {
  const data = {
    status: 200,
    data: {
      data: {
        token: "MockToken",
        user: { username: "Mock Name" }
      }
    }
  };
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data }));
  const thenFn = jest.fn(),
    catchFn = jest.fn;
  loginUser({})
    .then(thenFn)
    .catch(catchFn);
  expect(mockAxios.post).toHaveBeenCalled();
});
test("LoginUser error when promise does not resolve", () => {
  const data = {
    status: 400,
    response: {
      data: {
        error: "Mock Error"
      }
    }
  };
  const thenFn = jest.fn(),
    catchFn = jest.fn;
  loginUser({}).then(thenFn);
  mockAxios.mockError(data);
  expect(mockAxios.post).toHaveBeenCalled();
});
