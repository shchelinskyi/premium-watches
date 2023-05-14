import {useContext} from "react";
import {ProductContext} from "../../../context/ProductContextProvider";
import st from "./ViewSwitcher.module.scss";
import cn from "classnames";


const ViewSwitcher = () => {
    const {viewType, setViewType} = useContext(ProductContext);


    return (
        <div className={st.switcherWrapper}>

            <button data-testid="btnCards" onClick={() => setViewType("cards")}
                    className={cn(st.btn, viewType === "cards" ? st.active : " ")}>
                cards
            </button>

            <button data-testid="btnList" onClick={() => setViewType("list")}
                    className={cn(st.btn, viewType === "list" ? st.active : " ")}>
                list
            </button>

        </div>
    )
}

export default ViewSwitcher;