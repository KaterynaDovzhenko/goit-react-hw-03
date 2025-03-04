import css from "./SearchBar.module.css";
export default function SearchBar({ value, onSearch }) {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by Name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}
