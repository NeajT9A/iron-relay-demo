// Prototype balance: pilot gains, attack profiles and chassis values.
export const BALANCE={initialFocus:40,initialTension:15,maxPilotStat:100,focusOnHit:12,focusOnDodge:10,tensionOnDeal:12,tensionOnTake:15,baseAccuracy:92,distancePenalty:2,coverPenalty:22,minAccuracy:10,maxAccuracy:95,blockReduction:.25,dodgePenalty:20};
export const ATTACKS={
 slash:{id:'slash',name:'Taille franche',weapon:'Épée de récupération',kind:'melee',minRange:1,range:1,damage:10,accuracy:15,focus:0,tension:0,effects:[]},
 wrist:{id:'wrist',name:'Rafale de poignet',weapon:'Arme automatique de poignet',minRange:1,range:4,damage:6,accuracy:5,focus:0,tension:0,effects:[]},
 cleave:{id:'cleave',name:'Frappe décisive',weapon:'Épée de récupération',kind:'melee',minRange:1,range:1,damage:15,accuracy:5,focus:55,tension:40,effects:[]},
 snap:{id:'snap',name:'Tir réflexe',weapon:'Canon automatique 30 mm',minRange:1,range:5,damage:6,accuracy:10,focus:0,tension:0,effects:[]},
 burst:{id:'burst',name:'Rafale soutenue',weapon:'Canon automatique 30 mm',minRange:1,range:5,damage:9,accuracy:-10,focus:0,tension:35,effects:['Suppression']},
 lance:{id:'lance',name:'Lance cinétique',weapon:'Accélérateur dorsal',minRange:2,range:7,damage:13,accuracy:0,focus:70,tension:55,effects:['Rupture d’armure']},
 scatter:{id:'scatter',name:'Volée de proximité',weapon:'Fusil lourd à dispersion',minRange:1,range:3,damage:8,accuracy:5,focus:0,tension:0,effects:[]},
 cannon:{id:'cannon',name:'Obus de rupture',weapon:'Canon de siège 90 mm',terrainMultiplier:2,minRange:2,range:6,damage:10,accuracy:-10,focus:0,tension:0,effects:['Dégâts ×2 au terrain']},
 siege:{id:'siege',name:'Salve de siège',weapon:'Canon de siège 90 mm',minRange:2,range:7,damage:16,accuracy:-15,focus:0,tension:70,effects:['Fracture']},
 rifle:{id:'rifle',name:'Tir ajusté',weapon:'Fusil électromagnétique',minRange:2,range:9,damage:8,accuracy:10,focus:0,tension:0,effects:[]},
 needle:{id:'needle',name:'Tir de précision',weapon:'Fusil électromagnétique',minRange:2,range:9,damage:11,accuracy:20,focus:65,tension:0,effects:['Marquage']},
 horizon:{id:'horizon',name:'Ligne d’horizon',weapon:'Fusil électromagnétique',minRange:3,range:10,damage:15,accuracy:-5,focus:80,tension:50,effects:['Perforation']},
 carbine:{id:'carbine',name:'Tir de couverture',weapon:'Carabine 20 mm',minRange:1,range:5,damage:5,accuracy:15,focus:0,tension:0,effects:[]},
 double:{id:'double',name:'Double impact',weapon:'Carabine 20 mm',minRange:1,range:5,damage:7,accuracy:-5,focus:55,tension:0,effects:[]},
 overload:{id:'overload',name:'Décharge concentrée',weapon:'Projecteur à impulsion',minRange:2,range:6,damage:11,accuracy:0,focus:0,tension:60,effects:['Brouillage']}
};
export const POWERS={
 curved:{id:'curved',name:'Tir courbé',description:'Le prochain tir ignore obstacles, terrain gênant, furtivité liée au terrain et bord des toits. Conserve portée et prérequis.',target:'self',endsActivation:false},
 concentration:{id:'concentration',name:'Concentration',description:'Focus +25. Prépare les attaques de précision.',target:'self',endsActivation:false,focus:25},
 adrenaline:{id:'adrenaline',name:'Adrénaline',description:'Tension +25. Débloque les attaques de forte puissance.',target:'self',endsActivation:false,tension:25},
 overdrive:{id:'overdrive',name:'Surcadence',description:'Mobilité +3 pour le reste de la mission.',target:'self',endsActivation:false,mobility:3},
 shield:{id:'shield',name:'Forteresse',description:'Réduit les dégâts reçus de 3 jusqu’au prochain tour allié.',target:'self',endsActivation:true},
 composure:{id:'composure',name:'Sang-froid',description:'Focus +40, tension −15. La maîtrise avant la puissance.',target:'self',endsActivation:false,focus:40,tension:-15},
 repair:{id:'repair',name:'Réparation',description:'Restaure 9 HP à un allié à 3 cases, soi-même inclus.',target:'ally',endsActivation:true,healing:9,range:3}
};
ATTACKS.smoke={id:'smoke',name:'Grenade de fumée',weapon:'Lance-grenades fumigènes',kind:'smoke',minRange:1,range:5,damage:0,accuracy:0,focus:0,tension:0,effects:['5 cases gênantes en croix · 2 tours']};
export const CHASSIS={
 skirmisher:{hp:23,armor:1,evasion:20,mobility:5,attacks:['slash','wrist','cleave'],special:'overdrive'},
 assault:{hp:26,armor:2,evasion:10,mobility:4,attacks:['snap','burst','lance'],special:'overdrive'},
 bastion:{hp:38,armor:5,evasion:3,mobility:3,attacks:['scatter','cannon','siege'],special:'shield'},
 sniper:{hp:22,armor:1,evasion:16,mobility:4,attacks:['rifle','needle','horizon'],special:'composure'},
 support:{hp:25,armor:2,evasion:12,mobility:4,attacks:['carbine','double','overload'],special:'repair'}
};

// Picrochole's mass-produced automata: one weapon, no pilot powers.
Object.assign(ATTACKS,{
 pike:{id:'pike',name:'Coup de pique',weapon:'Pique mécanique',kind:'melee',minRange:1,range:1,damage:5,accuracy:5,focus:0,tension:0,effects:[]},
 musket:{id:'musket',name:'Tir de mousquet',weapon:'Mousquet à vapeur',minRange:1,range:5,damage:4,accuracy:-5,focus:0,tension:0,effects:[]},
 grenade:{id:'grenade',name:'Tir de grenade',weapon:'Lance-grenades',minRange:2,range:4,damage:6,accuracy:-10,focus:0,tension:0,effects:[]}
});
Object.assign(CHASSIS,{
 pikeman:{hp:10,armor:1,evasion:3,mobility:4,attacks:['pike'],automaton:true},
 musketeer:{hp:8,armor:0,evasion:5,mobility:3,attacks:['musket'],automaton:true},
 grenadier:{hp:11,armor:1,evasion:2,mobility:3,attacks:['grenade'],automaton:true}
});
