import "./ExpenseItem.css"
export const ExpenseItem = (props) => {
  return (
  <section className="sectionItem">
      <div className="containerParagraph">
  <div className="titlecontainer">
  <p className="date">{props.date.toString()}</p>
      <p className="titlepaper">{props.title}</p>
  </div>
      <p className="price">{props.price} som</p>
    </div>
  </section>
  );
};
