import { type Product } from "../../types/productTypes";

type ProducutListProps = {
  items: Product[];
};

const ProductItem = ({ items }: ProducutListProps) => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <ul>
        {items?.map((post: Product) => (
          <li key={post.id}>
            <span>{post.title}</span>
            <span>{post.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductItem;
