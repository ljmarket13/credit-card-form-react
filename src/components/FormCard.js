import React, { useState } from "react";
import useInput from "../hooks/input-hook";
import FrontCard from "./FrontCard";
import thankYou from "../images/icon-complete.svg";
import { AnimatePresence, motion } from "framer-motion";
import "./FormCard.scss";
import '../_mobile.scss';

const isNotEmpty = (value) => value.trim() !== "";

const variants = {
  isComplete: { opacity: 0, x: "-100%" },
  isNotComplete: { opacity: 1, x: 0 },
};

const FormCard = ({ onClick }) => {
  const [isComplete, setIsComplete] = useState(false);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: numberValue,
    isValid: numberIsValid,
    hasError: numberHasError,
    // valueChangeHandler: numberChangeHandler,
    numberFormatHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumber,
  } = useInput(isNotEmpty);

  const {
    value: monthValue,
    isValid: monthIsValid,
    hasError: monthHasError,
    valueChangeHandler: monthChangeHandler,
    inputBlurHandler: monthBlurHandler,
    reset: resetMonth,
  } = useInput(isNotEmpty);

  const {
    value: yearValue,
    isValid: yearIsValid,
    hasError: yearHasError,
    valueChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler,
    reset: resetYear,
  } = useInput(isNotEmpty);

  const {
    value: cvcValue,
    isValid: cvcIsValid,
    hasError: cvcHasError,
    valueChangeHandler: cvcChangeHandler,
    inputBlurHandler: cvcBlurHandler,
    reset: resetCvc,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    nameIsValid &&
    numberIsValid &&
    monthIsValid & yearIsValid &&
    cvcIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetName();
    resetNumber();
    resetMonth();
    resetYear();
    resetCvc();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const numberInputClasses = numberHasError
    ? "form-control invalid"
    : "form-control";
  const expInputClasses =
    monthHasError && yearHasError
      ? "form-control exp-input invalid"
      : "form-control exp-input";
  const cvcInputClasses = cvcHasError
    ? "form-control cvc invalid"
    : "form-control cvc";

  return (
    <div className="form-card">
      <FrontCard
        cardNumber={numberValue}
        name={nameValue}
        month={monthValue}
        year={yearValue}
        cvc={cvcValue}
      />

      <motion.div
        animate={isComplete ? "isComplete" : "isNotComplete"}
        variants={variants}
				className='form'>
        <form onSubmit={handleSubmit}>
          <div className={nameInputClasses}>
            <label htmlFor="name">cardholder name</label>
            <input
              type="text"
              className="card-name"
              value={nameValue}
              name="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p className="error-text">Please enter a name</p>}
          </div>
          <div className={numberInputClasses}>
            <label htmlFor="number">card number</label>
            <input
              type="text"
              className="card-number"
              maxLength="19"
              value={numberValue}
              name="number"
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
            />
            {numberHasError && (
              <p className="error-text">Please enter your Credit Card number</p>
            )}
          </div>

          <div className="exp-cvc">
            <div className="exp">
              <label htmlFor="expire">Exp. Date (MM/YY)</label>
              <div className={expInputClasses}>
                <input
                  type="text"
                  className="card-expire"
                  value={monthValue}
                  name="month"
                  maxLength="2"
                  onChange={monthChangeHandler}
                  onBlur={monthBlurHandler}
                />
                <input
                  type="text"
                  className="card-expire"
                  value={yearValue}
                  name="year"
                  maxLength="2"
                  onChange={yearChangeHandler}
                  onBlur={yearBlurHandler}
                />
              </div>
              {monthHasError && yearHasError && (
                <p className="error-text">Please enter the expiry date.</p>
              )}
            </div>
            <div className={cvcInputClasses}>
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                className="card-cvc"
                value={cvcValue}
                name="cvc"
                maxLength="3"
                pattern="\d*"
                onChange={cvcChangeHandler}
                onBlur={cvcBlurHandler}
              />
              {cvcHasError && (
                <p className="error-text">Please enter the CVC number.</p>
              )}
            </div>
          </div>

          <button
            disabled={!formIsValid}
            onClick={() => setIsComplete(!isComplete)}>
            Confirm
          </button>
        </form>
      </motion.div>
      {isComplete && (
        <AnimatePresence>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={variants}
            initial="hidden"
            animate={{x: -200, opacity: 1}}>
            <div className="modal-content">
              <img src={thankYou} alt="thankyou" />
              <h2>Thank you!</h2>
              <p>We've added your card details.</p>
              <button className="modal-btn" onClick={() => setIsComplete(!isComplete)}>
                Continue
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default FormCard;
