import "./App.css";
// import { getActivityByType, getRandomActivity } from "../helpers/API";
import { useState } from "react";
// import { ActivityItem } from "./ActivityItem/ActivityItem";
// import { SelectActivity } from "./SelectActivity/SelectActivity";
// import { Form } from "./Form/Form";
import { addItem, deleteItem } from "../redux/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// const activitysArrey = [
//   "education",
//   "recreational",
//   "social",
//   "diy",
//   "charity",
//   "cooking",
//   "relaxation",
//   "music",
//   "busywork",
// ];

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("UAH");
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const bascket = useSelector((state) => state.bascket);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "currency":
        setCurrency(e.target.value);
        break;
      case "quantity":
        setQuantity(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addItem({ name, price, quantity, currency, id: nanoid() }));
    e.target.reset(); // обнуление формы
  };

  const handleDeleteItem = (e) => {
    console.log(e.currentTarget.dataset.id);
    dispatch(deleteItem(e.currentTarget.dataset.id));
  };

  // console.log("addItem", addItem());
  // const [activity, setActivity] = useState(null);
  // const [activityType, setActivityType] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await getRandomActivity();
  //       setActivity(response);
  //     } catch (error) {
  //       console.log("error.message", error.message);
  //     }
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   getRandomActivity()
  //     .then((res) => {
  //       setActivity(res);
  //     })
  //     .catch((error) => {
  //       console.log("error.message", error.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!activityType) return;
  //   const getData = async () => {
  //     try {
  //       const response = await getActivityByType(activityType);
  //       setActivity(response);
  //     } catch (error) {
  //       console.log("error.message", error.message);
  //     }
  //   };
  //   getData();
  // }, [activityType]);

  // useEffect(() => {
  // if (!activityType) {
  //   return;
  // }
  //   getActivityByType(activityType)
  //     .then((res) => {
  //       setActivity(res);
  //     })
  //     .catch((error) => {
  //       console.log("error.message", error.message);
  //     });
  // }, [activityType]);

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setActivityType(value);
  // };

  return (
    <div>
      <h1>ShopGOIT</h1>
      <form onSubmit={handleAddItem} action="">
        <input
          required // это значит обязательно заполнить поле ввода
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          required
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="price"
        />
        <select
          required
          defaultValue={"UAH"}
          onChange={handleChange}
          name="currency"
          id=""
        >
          <option value="USA">USA</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <input
          required
          onChange={handleChange}
          name="quantity"
          type="number"
          placeholder="quantity"
        />
        <button type="submit">ADD ITEM</button>
      </form>
      <ul>
        {bascket.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.currency}</p>
            <p>{item.quantity}</p>
            <button onClick={handleDeleteItem} data-id={item.id} type="button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    // <div>
    //   {activity && <ActivityItem activity={activity} />}
    //   <SelectActivity
    //     handleChange={handleChange}
    //     activitysArrey={activitysArrey}
    //   />
    //   <Form activitysArrey={activitysArrey} />
    // </div>
  );
}

export default App;
