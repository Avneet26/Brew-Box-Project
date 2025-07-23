import { useCart } from "@/context/cartContext";

type propTypes={
    name: string;
}


export default function CartButton({name}: propTypes) {

    const { cart } = useCart() as { cart: any[] };

    return (
        <div>
            <button type="button" className="relative cursor-pointer inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-950 rounded-lg hover:bg-[#9e4b34] text-md focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                <span className="sr-only">Notifications</span>
                {name}
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    {cart.length}
                </div>
            </button>

        </div>
    )
}