import { render, screen } from "@testing-library/react";
import { formatDate, formatDollar } from "@/utils/helper";
import { Table, Product } from "../ProductList";

jest.mock("react-feather", () => ({
  MoreVertical: jest.fn(() => <div>Vertical dot</div>),
}));

const sampleProductList: Product[] = [
  {
    category: "Electronics",
    description: "Smartphone",
    id: 1,
    location: "https://example.com/image1.jpg",
    name: "iPhone",
    price: 999,
    purchaseDate: "2021-01-01",
  },
  {
    category: "Furniture",
    description: "Chair",
    id: 2,
    location: "https://example.com/image2.jpg",
    name: "Office Chair",
    price: 199,
    purchaseDate: "2021-02-01",
  },
];

describe("<Table />", () => {
  it("renders table headers correctly", () => {
    render(<Table productList={sampleProductList} />);
    const headers = [
      "Name",
      "Location",
      "Purchase Date",
      "Category",
      "Description",
      "Price",
    ];
    headers.forEach((header) => {
      expect(
        screen.getByRole("columnheader", { name: header })
      ).toBeInTheDocument();
    });
  });

  it("renders table rows correctly", () => {
    render(<Table productList={sampleProductList} />);
    sampleProductList.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByAltText(product.name)).toHaveAttribute(
        "src",
        product.location
      );
      expect(
        screen.getByText(formatDate(product.purchaseDate))
      ).toBeInTheDocument();
      expect(screen.getByText(product.category)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(formatDollar(product.price))).toBeInTheDocument();
    });
    expect(screen.getAllByText("Vertical dot").length).toEqual(2);
  });
});
