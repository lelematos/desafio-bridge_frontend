import { Button } from "@material-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import DisplayResults from "../components/display-results";
import { useGetDuodigito } from "../hooks/useRequest";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [calculatedDuodigito, setCalculatedDuodigito] = useState(undefined);
  const [inputValue, setInputValue] = useState(undefined);
  const [isInputValidated, setIsInputValidated] = useState(false);
  const [inputError, setInputError] = useState({
    hasError: false,
    message: undefined,
  });

  /* sabemos que os dados vindos da requisição à api seguem a seguinte estrutura:
    {
      encontrado: Boolean, 
      tempoDeProcessamento?: string,
      menorDuodigito?: number, 
      numeroDeIteracoes: number
    }
  */
  const { data, error } = useGetDuodigito(isInputValidated, "duodigitos/", {
    numero: inputValue,
  });

  const handleInputChange = (event) => {
    const clearInputErrors = () => {
      setInputError({ hasError: false, message: undefined });
    };
    calculatedDuodigito && setCalculatedDuodigito(undefined);
    isInputValidated && setIsInputValidated(false);
    inputError.hasError && clearInputErrors();
    setInputValue(event.target.value);
  };

  const handleSubmitToCalculateDuodigito = () => {
    const setInputErrorMessage = (message) => {
      setIsInputValidated(false);
      setInputError({
        hasError: true,
        message,
      });
    };

    if (!inputValue)
      return setInputErrorMessage(
        "Você precisa preencher o campo de entrada abaixo para podermos calcular seu duodígito."
      );
    if (inputValue < 100)
      return setInputErrorMessage(
        "O número escolhido ele deve ser maior do que 100, tente novamente."
      );
    setIsInputValidated(true);
  };

  useEffect(() => {
    if (!data || !isInputValidated) return;
    console.log(data.menorDuodigito);
    setCalculatedDuodigito(data.menorDuodigito);
  }, [data, isInputValidated]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio Bridge_</title>
        <meta name="description" content="Desenvolvido por Leandro de Matos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Calculadora de <a>Duodigitos</a>
          </h1>

          <p className={styles.description}>
            Digite um número maior do que{" "}
            <code className={styles.code}>100</code> para que a calculadora te
            retorne o{" "}
            <a className="text-secondary">
              menor número real duodigito múltiplo de X
            </a>{" "}
            (o valor inserido no campo de números abaixo).
          </p>
        </header>
        <div className={styles.formAndResults}>
          {inputError.message && (
            <div className={styles.inputError}>
              <p className="text-error">{inputError.message}</p>
            </div>
          )}
          <div className={styles.grid}>
            <input
              onChange={handleInputChange}
              value={inputValue}
              placeholder="1000"
              type="number"
              className={
                inputError.hasError ? styles.inputWithError : styles.input
              }
            />
            <Button onClick={handleSubmitToCalculateDuodigito}>Enviar</Button>
          </div>
          {data && (
            <DisplayResults
              finded={data.encontrado}
              timeToProcess={data.tempoDeProcessamento}
              duodigito={calculatedDuodigito}
              iterations={data.numeroDeIteracoes}
            />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/lelematos">
          Desenvolvido por Leandro de Matos Castro e Silva
        </a>
      </footer>
    </div>
  );
};

export default Home;
