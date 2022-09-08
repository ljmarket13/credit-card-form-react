import React, { useState } from "react";
import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/lib/styles.scss";

const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

	const handleNumber = (e) => {
		setNumber(e.target.value);
	}

	const handleName = (e) => {
		setName(e.target.value);
	}

	const handleExpiry = e => {
		setExpiry(e.target.value);
	}

	const handleCvc = e => {
		setCvc(e.target.value);
	}

	const handleFocus = e => {
		setFocus(e.target.name);
	}

  return (
    <>
      <div className="card">
        <Cards
          number={number}
          name={name}
          // month={month}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <Cards
          number={number}
          name={name}
          // month={month}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
				
      </div>
      <form>
        <label htmlFor="number">Card Number</label>
        <input
          type="text"
          className="card-number"
          value={number}
          maxLength='16'
					name="number"
          onChange={handleNumber}
					onFocus={handleFocus}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="card-name"
          value={name}
					name="name"
          onChange={handleName}
					onFocus={handleFocus}
        />
        <label htmlFor="expire">Exp. Date(MM/YY)</label>
        <input
          type="text"
          className="card-expire"
          value={expiry}
					name="expire"
					maxLength='4'
          onChange={handleExpiry}
					onFocus={handleFocus}
        />
        <label htmlFor="cvc">CVC</label>
        <input
          type="text"
          className="card-cvc"
          value={cvc}
					name="cvc"
					maxLength='3'
					pattern="\d*"
          onChange={handleCvc}
					onFocus={handleFocus}
        />
      </form>
    </>
  );
};

export default CreditCard;
