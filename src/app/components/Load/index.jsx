const load =()=>{
    return(
        <Image
        src={HerImg}
        width={480}
        height={480} // Adicionando a altura para evitar layout shift
        alt="Image of the psichollogist"
        className="max-h-[480px] rounded-md"
        priority // Carregar esta imagem com prioridade
      />
    )
}

export default load