async function getEndereco(cep){
  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if(!response.ok){
      alert(`Requisição mal sucessida`)
    }

    const data = await response.json();

    console.log(`A rua encontrada foi: ${data.logradouro}`)

  }
  catch(error){
    console.log("Erro ao buscar o cep informado: ", error)
  }
}

getEndereco("14051030");