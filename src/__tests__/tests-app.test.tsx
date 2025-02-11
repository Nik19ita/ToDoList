import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";


describe("Тесты приложения", () => {
  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  };

  

  it("тест, проверяющий что title равен todos", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('title')).toHaveTextContent('todos')
  });

  it("тест, проверяющий что при вводе текста в инпут, появялется текст и кнопка для добавления", () => {
    const { getByTestId } = renderComponent();
    fireEvent.change(getByTestId('input'), { target: { value: "Сделать тест" } });
    expect(getByTestId('input')).toHaveValue("Сделать тест")
    expect(getByTestId('button-add')).toBeInTheDocument()
  });

  it("тест, проверяющий, что после добавления на странице появляются новые дела", () => {
    const { getByTestId } = renderComponent();
    fireEvent.change(getByTestId('input'), { target: { value: "Сделать тест" } });
    fireEvent.click(getByTestId('button-add'))
    fireEvent.change(getByTestId('input'), { target: { value: "Сделать еше один тест" } });
    fireEvent.click(getByTestId('button-add'))
    expect(getByTestId('list').childElementCount).toBe(2)
  });

  
  it("тест, проверяющий, что при нажатии кнопки Completed, отображаются несделанные дела", () => {
    const { getByTestId, getAllByTestId } = renderComponent();
    fireEvent.change(getByTestId('input'), { target: { value: "Сделать тест" } });
    fireEvent.click(getByTestId('button-add'))
    fireEvent.change(getByTestId('input'), { target: { value: "Сделать еше один тест" } });
    fireEvent.click(getByTestId('button-add'))
    fireEvent.click(getByTestId('button-active'))
    expect(getAllByTestId('item-paragraf')[0]).not.toHaveClass('completed')
    expect(getAllByTestId('item-paragraf')[1]).not.toHaveClass('completed')
  });
});
