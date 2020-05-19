const fastify = require("fastify")();
fastify.listen(3000)
const enemies = [{
    Name: "Tank",
    HP: 520,
    Atk: 100,
    Crit: 0.3,
    Critvalue: 100 * 0.6
}, {
    Name: "Samui",
    HP: 460,
    Atk: 120,
    Crit: 0.4,
    Critvalue: 120 * 0.55
}, {
    Name: "Samuei",
    HP: 530,
    Atk: 98,
    Crit: 0.6,
    Critvalue: 98 * 0.4
}, {
    Name: "mui",
    HP: 490,
    Atk: 90,
    Crit: 0.9,
    Critvalue: 90 * 0.2
}]
let player
let getEnemies
fastify.post("/arena", (request, response) => {
    player = {
        Name: request.body.name,
        HP: request.body.hp,
        Atk: request.body.Atk,
        Crit: request.body.Crit,
        Critvalue: request.body.Critvalue
    }
    response.send({
        msg: "Create Successful"
    })
})

fastify.get("/arena", (request, response) => {
    getEnemies = enemies[Math.floor(Math.random() * 4)];
    response.send({
        msg: getEnemies.Name
    })
})

fastify.get("/arena/fight", (request, response) => {
    let isEnemieLoose = getEnemies.HP > 0;
    let isPlayerLoose = player.HP > 0;

    while (isEnemieLoose && isPlayerLoose) {
        attack(player, getEnemies);
        console.log(player.HP)
        attack(getEnemies, player);
        console.log(getEnemies.HP)
        isEnemieLoose = getEnemies.HP > 0
        isPlayerLoose = player.HP > 0
    }

    if (isEnemieLoose) {
        response.send({
            msg: "Player Win"
        })
    } else {
        response.send({
            msg: "Enemie Win"
        })
    }
})

function attack(attacker, defender) {
    const randomEnemieCrit = Math.random();
    // console.log(attacker,defender)
    if (randomEnemieCrit < attacker.Crit) {
        defender.HP = defender.HP - attacker.Critvalue;
        console.log(attacker.Name + ' Use Critical attack to ' + defender.Name + ' HP ' + defender.HP)
    } else {
        defender.HP = defender.HP - attacker.Atk;
        console.log(attacker.Name + ' Use Player attack to ' + defender.Name + ' HP ' + defender.HP)
    }
}