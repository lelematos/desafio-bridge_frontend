import moment from "moment";
import styles from "../../styles/DisplayResults.module.css";

const DisplayResults = (props) => {
  const classeIndicadoresDeResultado = props.finded
    ? styles.sucessoIndicador
    : styles.erroIndicador;
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.indicador}>
          <p className={styles.tituloIndicador}>
            Foi possível encontrar um Duodigito?
          </p>
          <p className={classeIndicadoresDeResultado}>
            {props.finded ? "Sim" : "Não"}
          </p>
        </div>
        <div className={styles.indicador}>
          <p className={styles.tituloIndicador}>Quanto tempo demorou?</p>
          <p className={classeIndicadoresDeResultado}>
            {moment.duration(props.timeToProcess).milliseconds()}ms
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.indicador}>
          <p className={styles.tituloIndicador}>
            Qual foi o menor multiplo <br />
            duodigito encontrado?
          </p>
          <p className={classeIndicadoresDeResultado}>
            {props.duodigito ?? "-"}
          </p>
        </div>
        <div className={styles.indicador}>
          <p className={styles.tituloIndicador}>
            Quantas iterações foram necessárias?
          </p>
          <p className={classeIndicadoresDeResultado}>{props.iterations}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayResults;
