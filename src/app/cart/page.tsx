import Header from "@/component/Header";
import { useCart } from "@/context/cartContext";

type cartItemType = {
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
};

export default function Cart() {

    const { cart, setCart } = useCart();

    return (
        <div>
            <Header showLinks={true} noBackground={false}/>

            <section className="cart-container">
                <h1>Your Cart</h1>
                <div className="cart-container">
                    {
                        cart.map((cartItem:cartItemType) => (
                            <li key={cartItem.name}>{cartItem.name}</li>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}