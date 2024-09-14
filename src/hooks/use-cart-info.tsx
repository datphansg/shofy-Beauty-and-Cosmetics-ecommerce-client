import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from '@/redux/store'; // Ensure correct import of RootState

const useCartInfo = () => {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const cart_products = useSelector((state: RootState) => state.cart.cart_products || []); // Access cart_products correctly

    useEffect(() => {
        const cart = cart_products.reduce((cartTotal, cartItem) => {
            const { price, orderQuantity } = cartItem;
            const itemTotal = price.market * orderQuantity;
            cartTotal.total += itemTotal;
            cartTotal.quantity += orderQuantity;

            return cartTotal;
        }, {
            total: 0,
            quantity: 0,
        });
        setQuantity(cart.quantity);
        setTotal(cart.total);
    }, [cart_products]);

    return {
        quantity,
        total,
        setTotal,
    };
}

export default useCartInfo;
