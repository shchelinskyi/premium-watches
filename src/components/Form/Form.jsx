import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {
    closeCartForm,
    emptyShoppingCart,
    openPurchaseModal,
    setOrderNumber
} from "../../redux/actions";
import st from './Form.module.scss';
import {PatternFormat} from "react-number-format";


const Form = () => {

    const products = useSelector((state) => state.products);
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const sum = useSelector((state) => state.cart.cartSum);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const firstName = JSON.parse(window.localStorage.getItem("firstName")) || "";
    const lastName = JSON.parse(window.localStorage.getItem("lastName")) || "";
    const age = JSON.parse(window.localStorage.getItem("age")) || "";
    const deliveryAddress = JSON.parse(window.localStorage.getItem("deliveryAddress")) || "";
    const tel = JSON.parse(window.localStorage.getItem("tel")) || "";


    const formik = useFormik({
        initialValues: {
            firstName,
            lastName,
            age,
            deliveryAddress,
            tel,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "The name must contain at least 2 characters")
                .max(50, "Must be 20 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .min(2, "The last name must contain at least 2 characters")
                .max(50, "Must be 20 characters or less")
                .required("Required"),
            age: Yup.number()
                .min(18, "The min age is 18 years old")
                .max(120, "The max age is 120 years old")
                .required("Required"),
            deliveryAddress: Yup.string()
                .min(10, "The address must contain at least 10 characters.")
                .max(100, "The address cannot be more than 100 characters").required("Required"),
            tel: Yup.string()
                .min(7, "The phone number must contain at least 7 characters.")
                .max(20, "The phone number cannot be more than 20 characters")
                .required("Required")
        }),
        onSubmit: (values, {resetForm}) => {

            const fullDataProducts = cartProducts.map(item => {
                const {article, name} = products.find(product => product.id === item.id);
                const newObj = {...item, article, name};
                return newObj;
            })

            const orderNumber = `${Date.now()}-${values.tel.replace(/\D/g, "")}`;

            const checkoutObj = {
                shipping_details: values,
                products: JSON.stringify(fullDataProducts),
                sum,
                orderNumber
            }

            console.table(checkoutObj);

            dispatch(setOrderNumber(orderNumber));
            resetForm();
            dispatch(closeCartForm());
            dispatch(emptyShoppingCart());
            navigate("/");
            dispatch(openPurchaseModal());
        }
    });

    useEffect(() => {
        window.localStorage.setItem("firstName", JSON.stringify(formik.values.firstName));
        window.localStorage.setItem("lastName", JSON.stringify(formik.values.lastName));
        window.localStorage.setItem("age", JSON.stringify(formik.values.age));
        window.localStorage.setItem("deliveryAddress", JSON.stringify(formik.values.deliveryAddress));
        window.localStorage.setItem("tel", JSON.stringify(formik.values.tel));
    }, [formik.values]);

    const close = () => {
        dispatch(closeCartForm());
    }

    return (
        <div className={st.formWrapper}>
            <form className={st.form} onSubmit={formik.handleSubmit}>

                <h2 className={st.formTitle}>SHIPPING DETAILS</h2>

                <div className={st.mainForm}>

                    <label htmlFor="firstName" className={st.formLabel}>
                        First name
                        <div>
                            <input className={st.inputForm} id="firstName" name="firstName" type="text"
                                   value={formik.values.firstName} placeholder="First name"
                                   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.firstName && formik.errors.firstName ?
                                <p className={st.error}>{formik.errors.firstName}</p> : null}
                        </div>
                    </label>

                    <label htmlFor="lastName" className={st.formLabel}>
                        Last name
                        <div>
                            <input className={st.inputForm} id="lastName" name="lastName" type="text"
                                   value={formik.values.lastName} placeholder="Last name"
                                   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.lastName && formik.errors.lastName ?
                                <p className={st.error}>{formik.errors.lastName}</p> : null}
                        </div>
                    </label>

                    <label htmlFor="age" className={st.formLabel}>
                        Age
                        <div>
                            <input className={st.inputForm} id="age" name="age" type="number"
                                   value={formik.values.age} placeholder="Age"
                                   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.age && formik.errors.age ?
                                <p className={st.error}>{formik.errors.age}</p> : null}
                        </div>
                    </label>

                    <label htmlFor="deliveryAddress" className={st.formLabel}>
                        Delivery Address
                        <div>
                            <input className={st.inputForm} id="deliveryAddress" name="deliveryAddress" type="text"
                                   value={formik.values.deliveryAddress} placeholder="Delivery Address"
                                   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.deliveryAddress && formik.errors.deliveryAddress ?
                                <p className={st.error}>{formik.errors.deliveryAddress}</p> : null}
                        </div>
                    </label>

                    <label htmlFor="tel" className={st.formLabel}>
                        Mobile number
                        <div>
                            <PatternFormat className={st.inputFormTel}
                                           id='tel'
                                           name='tel'
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.tel}
                                           placeholder="(###)###-##-##"
                                           format="(###) ###-##-##" allowEmptyFormatting mask="#"/>

                            {formik.touched.tel && formik.errors.tel ?
                                <p className={st.error}>{formik.errors.tel}</p> : null}
                        </div>
                    </label>

                    <button className={st.btnForm} type="submit">
                        <img className={st.cartImgBtn} src="./imgAll/cartBtn2.png" alt="cart"/>
                        COMPLETE PURCHASE
                    </button>
                </div>

                <button className={st.btnClose} onClick={close}>✖</button>
            </form>
        </div>
    );
}

export default Form;


