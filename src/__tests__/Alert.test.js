import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("test alert component", () => {
  test("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" success={false} />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });
  test("displays a success message", () => {
    const { getByText } = render(<Alert message="Success!!!!" />);

    expect(getByText(/Success/).textContent).toBe("Success!!!!");
  });
  test("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });

  test("test alert", () => {
    const alert = {
      message: "",
      isSuccess: false,
    };
    const { asFragment } = render(
      <Alert message={alert.message} success={alert.isSuccess} />
    );

    expect(asFragment).toMatchSnapshot();
  });
});
