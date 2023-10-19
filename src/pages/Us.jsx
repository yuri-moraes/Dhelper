import React from "react";
import Nav from "../components/Nav";
import { styles } from "../utils/styles";

const Us = () => {
  return (
    <>
      <Nav />

      <div className={`h-5/6 w-screen ${styles.rowCenter}`}>
        <div
          className={`${styles.border} ${styles.rowCenter} items-center w-3/5 bg-white h-full p-12 gap-48`}
        >
          <div className={`${styles.column}`}>
            <img
              src="https://picsum.photos/180/180"
              className="rounded-[100px] mb-10 mr-0"
              alt="Tiago_Perfil"
            />
            <h2 className="text-black text-center	">
              CEO & Full Stack-Developer
            </h2>
          </div>
          <div className={`${styles.column}`}>
            <img
              src="https://picsum.photos/180/180"
              className="rounded-[100px]  mb-10"
              alt="Ranyel_Perfil"
            />
            <h2 className="text-black text-center	">CEO & Back-End Developer</h2>
          </div>
        </div>
        <div className="mt-12 w-10/12">
          <h3 className="font-black text-center">
            Somos uma empresa autônoma que estava em busca de uma ideia que
            poderia ajudar uma minoria trazendo mais acessibilidade há essas
            pessoas. Pensando em problemas atuais da sociedade nossa equipe
            (Tiago e Ranyel) decidiu que nosso site teria o objetivo de ajudar e
            deixar mais acessível a vida de indivíduos com deficiência. Com esse
            propósito, surgiu o DHelper, onde você pode pesquisar lugares
            acessíveis evitando a frustração de ir a um local que não possui a
            estrutura e preparo adequado em Curitiba.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Us;
