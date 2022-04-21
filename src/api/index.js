import axios from "axios";
const baseUrl = "https://apiteste.medfy.com.br/dash";
const headers = {
  headers: {
    "Authorization": "Bearer bd4148f4067a9f87c3870d418672618b"
  }
}

export async function getPrestadores() {
  const response = await axios.get(`${baseUrl}//prestadores?size=15&perfil_id=0&perfil_cod`, headers);
  console.log(response)
  console.log(response.data.LISTA)
  return {lista: response.data.LISTA, total: response.data.LISTA_SIZE};
}
