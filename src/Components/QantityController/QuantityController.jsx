    import React from 'react'
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
    import style from "../../Styles/DishDetail.module.css";
    const QuantityController = ({ quantity, onChange, showOrderButton = false, onOrder }) => {
    const handleQuantityChange = (amount) => {
        const newQty = quantity + amount;
        if (newQty >= 1) onChange(newQty);
    };

    return (
        <div className={style.actionButtons}>
        <FontAwesomeIcon
            icon={faMinus}
            onClick={() => handleQuantityChange(-1)}
            className={style.number}
        />
        <input
            type="text"
            value={String(quantity).padStart(2, "0")}
            readOnly
            className={style.quantityValue}
            name= 'text'
        />
        <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleQuantityChange(1)}
            className={style.number}
        />
        {showOrderButton && (
            <button className={style.orderBtn} onClick={onOrder}>ORDER</button>
        )}
        </div>
    );
    };


    export default QuantityController
