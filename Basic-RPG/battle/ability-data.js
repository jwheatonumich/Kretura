abilityData =
{
    "flee":
    {
        "name":"Flee",
        //Current turn damage modifiers
        "selfAttackMultiplier":0, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "attack":
    {
        "name":"Attack",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "charge":
    {
        "name":"Charge",
        //Current turn damage modifiers
        "selfAttackMultiplier":1.2, "opponentAttackMultiplier":1, "selfDefenseMultiplier":0.8, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "berserk":
    {
        "name":"Berserk",
        //Current turn damage modifiers
        "selfAttackMultiplier":2, "opponentAttackMultiplier":1, "selfDefenseMultiplier":0, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "block":
    {
        "name":"Block",
        //Current turn damage modifiers
        "selfAttackMultiplier":0, "opponentAttackMultiplier":1, "selfDefenseMultiplier":2.0, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":true
    },

    "quickAttack":
    {
        "name":"Quick Attack",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":true,"skipAttack":false
    },

    "powerUp":
    {
        "name":"Power-up",
        //Current turn damage modifiers
        "selfAttackMultiplier":0, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":1.5, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":true
    },

    "powerDown":
    {
        "name":"Power-down",
        //Current turn damage modifiers
        "selfAttackMultiplier":0, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":0.75, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":true
    },

    "shield":
    {
        "name":"Shield",
        //Current turn damage modifiers
        "selfAttackMultiplier":0, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":5, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":true
    },

    "stun":
    {
        "name":"Stun",
        //Current turn damage modifiers
        "selfAttackMultiplier":.5, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":.5, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "poison":
    {
        "name":"Poison",
        //Current turn damage modifiers
        "selfAttackMultiplier":0, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":3, "leech":0, "priority":false,"skipAttack":true
    },

    "absorb":
    {
        "name":"Absorb",
        //Current turn damage modifiers
        "selfAttackMultiplier":0.5, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":1, "priority":false,"skipAttack":false
    },

    "stunned": //Gets used when player or enemy is stunned
    {
        "name":"Stunned",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":true
    },

    "rollout":
    {
        "name":"Roll Out",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":1.25, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "poisonJab":
    {
        "name":"Poison Jab",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":2, "leech":0, "priority":false,"skipAttack":false
    },

    "disarmingStrike":
    {
        "name":"Disarming Strike",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":0.9, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "webStrike":
    {
        "name":"Web Strike",
        //Current turn damage modifiers
        "selfAttackMultiplier":0.5, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0.5, "poison":0, "leech":0, "priority":true,"skipAttack":false
    },

    "honingStrike":
    {
        "name":"Honing Strike",
        //Current turn damage modifiers
        "selfAttackMultiplier":0.9, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":1.2, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false
    },

    "redLaser":
    {
        "name":"Red Laser",
        //Current turn damage modifiers
        "selfAttackMultiplier":1.5, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":false,
        //Costs
        "acorncoin":1
    },

    "heal":
    {
        "name":"Heal",
        //Current turn damage modifiers
        "selfAttackMultiplier":1, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0, "poison":0, "leech":0, "priority":false,"skipAttack":true, "heal":1,
        //Costs
        "leafcoin":1
    },

    "acornToss":
    {
        "name":"Acorn Toss",
        //Current turn damage modifiers
        "selfAttackMultiplier":1.4, "opponentAttackMultiplier":1, "selfDefenseMultiplier":1, "opponentDefenseMultiplier":1,
        //Multi-turn damage modifiers
        "selfAttack":null, "opponentAttack":null, "selfDefense":null, "opponentDefense":null,
        //Other efects
        "armor":0, "stun":0.25, "poison":0, "leech":0, "priority":false,"skipAttack":false,
        //Costs
        "acorncoin":1
    },
}