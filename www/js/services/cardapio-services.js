app.service('CardapioServices', function() {

    //mock bebidas
    var bebidas = [
        {id: 1, nome: 'Vinho Tinto Brasil', preco: 40.00},
        {id: 2, nome: 'Cerveja Especial', preco: 23.00},
        {id: 3, nome: 'Wisky 18 anos', preco: 200.00}
    ];

    //mock petiscos
    var petiscos = [
        {id: 1, nome: 'Filé ao molho madeira', preco: 60.00},
        {id: 2, nome: 'Camarão à paulista', preco: 21.00},
        {id: 3, nome: 'Lagosta assada', preco: 100.89}
    ];

    //mock sucos
    var sucos = [
        {id: 1, nome: 'Laranja', preco: 2.50},
        {id: 2, nome: 'Melancia', preco: 2.00},
        {id: 3, nome: 'Especial', preco: 3.50}
    ];

    this.getBebidas = function() {
        return bebidas;
    }

    this.getPetiscos = function() {
        return petiscos;
    }

    this.getSucos = function() {
        return sucos;
    }

});