import CartCounter from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter page",
  description: "Counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Hello Page Counter</h1>
      <span>Productos en carrito</span>
      <CartCounter value={10} />
    </div>
  );
}
