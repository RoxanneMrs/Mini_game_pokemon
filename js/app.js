class Pokemon {

    // moule de mes pokemons
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    // fonction lucky pour savoir si mon pokemon est lucky 
    isLucky() {
        let randomLuck = Math.random();
        return randomLuck < this.luck; // true si c'est vrai

    }

    // gérer les attaques et les pvs de chaque pokemon après avoir subi une attaque
    // afficher les pvs 
    attackPokemon(adversaire) {
        console.log(this.name + " inflige " + (this.attack - adversaire.defense) + " dégats à " + adversaire.name);
        adversaire.hp -= (this.attack - adversaire.defense);
        console.log(adversaire.name + " a maintenant " + adversaire.hp + " points de vie ! ");
    }

}

let pikaPika = new Pokemon("Pikachu", 20, 8, 35, 0.4);
let drako = new Pokemon("Dracaufeu", 24, 6, 25, 0.6);

// tant que l'un des 2 n'est pas K.O
// si le pokemon est lucky, son attaque passera. Sinon, elle ratera
// afficher le résultat
while (pikaPika.hp > 0 && drako.hp > 0) {

    if(pikaPika.isLucky()) {
        pikaPika.attackPokemon(drako);
    } else {
        console.log(">>>>>> Attaque ratée de la part de " + pikaPika.name);
    }

    if (drako.hp > 0 && drako.isLucky()) {
        drako.attackPokemon(pikaPika);
    } else {
        console.log(">>>>>> Attaque ratée de la part de " + drako.name);
    }

}

// afficher un message une fois que l'un des 2 est K.O
if(pikaPika.hp > 0) {
    console.log("PIKAAACHHHHUUUUUUUUUUUUU est vainqueur !");
} else {
    console.log("DRACAUUUFEEEEUUUU est vainqueur !");
}