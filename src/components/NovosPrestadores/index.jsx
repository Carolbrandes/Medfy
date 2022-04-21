import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { getPrestadores } from "../../api";

export default function NovosPrestadores() {
  const [colaboradores, setColaboradores] = useState([]);
  const [total, setTotal] = useState(0);

  const formatData = (data) => {
    const date = new Date(data);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  useEffect(() => {
    const asyncGetPrestadores = async () => {
      try {
        const response = await getPrestadores();
        setColaboradores(response.lista);
        setTotal(response.total - 1);
      } catch (error) {
        console.log(error);
      }
    };

    asyncGetPrestadores();
  }, []);


  return (
    <section className="section">
      <h2 className="tituloSection">
        Novos Prestadores <ArrowForwardIosIcon />
      </h2>

      {colaboradores?.length > 0 &&
        colaboradores.map(
          (
            { codigo, pr_nome_cracha, foto, perfil_desc, status, dt_aprovacao },
            index
          ) => (
            <div className={`${
              index !== total ? "divider" : ""
            }`}>
              <Stack
                key={codigo}
                className="colaboradorWrapper"
                direction="row"
                alignItems="center"
                spacing={2}
              >
                <Avatar alt={pr_nome_cracha} src={`${foto}`} />
                <div>
                  <h3>{pr_nome_cracha}</h3>
                  <p>{perfil_desc}</p>
                </div>

                <div className="dadosColaboradores">
                  <p className="flag ativo">
                    {status === "A" ? "Ativo" : "Provisório"}
                  </p>
                  <p className="dataCadastro">{formatData(dt_aprovacao)}</p>
                </div>
              </Stack>
            </div>
          )
        )}
    </section>
  );
}
