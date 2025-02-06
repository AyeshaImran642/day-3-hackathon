import { CartProvider } from "@/context/cartcontext";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
