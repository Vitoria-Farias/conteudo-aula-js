// Criação de método
const casa = {
    portas: 5,
    janelas: 6,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Snoopy",
            raca: "Dachshund",
            latir: function () {
                return this.nome + " disse: É nois cachorro, tamo junto au au";
            }
        },
    },
}

console.log(casa.pets.cachorro.latir());