import style from "./searchinput.module.css";
export const SearchInput = (props) => {
  return (
    <div className={style.container}>
      <input
        type="text"
        className={style.input}
        placeholder="Digite o nome do planeta"
      />
      <button className={style.button}>Buscar</button>
    </div>
  );
};
