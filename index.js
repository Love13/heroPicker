const startButton = document.getElementById("startButton");
const instructions = document.getElementById("instructions")
const selects = document.getElementById("selects")

startButton.addEventListener("click", function(startButtonClickEvent) {

    startButtonClickEvent.preventDefault();

    console.log('User clicked the start button!');

    instructions.classList.add("hidden");
    selects.classList.remove("hidden");

    window.resizeTo(400, 400)

});

//DOM Message Variables
let firstHeroMsg  = document.getElementById('firstHeroText')
let secondHeroMsg  = document.getElementById('secondHeroText')
let thirdHeroMsg  = document.getElementById('thirdHeroText')
let fourthHeroMsg  = document.getElementById('fourthHeroText')
let fifthHeroMsg  = document.getElementById('fifthHeroText')

//DOM Select Variables
var a = document.getElementById("selectFirstHero");
var b = document.getElementById("selectSecondHero");
var c = document.getElementById("selectThirdHero");
var d = document.getElementById("selectFourthHero");
var e = document.getElementById("selectFifthHero");

//Assign selects to vars
var firstHero = a.options[a.selectedIndex].value;
var secondHero = b.options[b.selectedIndex].value;
var thirdHero = c.options[c.selectedIndex].value;
var fourthHero = d.options[d.selectedIndex].value;
var fifthHero = e.options[e.selectedIndex].value;

console.log("the hero selected is " + firstHero);
console.log("the hero selected is " + secondHero);
console.log("the hero selected is " + thirdHero);
console.log("the hero selected is " + fourthHero);
console.log("the hero selected is " + fifthHero);

// var firstHero = a. //a.options[a.selectedIndex].value
const hero1Select = document.querySelector('#selectFirstHero')
const hero2Select = document.querySelector('#selectSecondHero')
const hero3Select = document.querySelector('#selectThirdHero')
const hero4Select = document.querySelector('#selectFourthHero')
const hero5Select = document.querySelector('#selectFifthHero')

hero1Select.onchange = e => handleChange(e.target)
hero2Select.onchange = e2 => handle2Change(e2.target)
hero3Select.onchange = e3 => handle3Change(e3.target)
hero4Select.onchange = e4 => handle4Change(e4.target)
hero5Select.onchange = e5 => handle5Change(e5.target)

//first hero "else if"
const handleChange = (el) => {
	console.log(`Changed to character ${el.value}`)
    if (el.value === "none") {
        firstHeroMsg.textContent = "Counters will appear when a hero is selected.";
    } else if (el.value === "abbadon" ) {
        firstHeroMsg.textContent = "Anti-Mage : 48.92% | Slark : 52.05% | Undying : 45.69% | Outworld Devourer : 57.45% | Enchantress 51.61%";
    } else if (el.value === "alchemist") {
        firstHeroMsg.textContent = "Bloodseeker: 45.50% | Monkey King: 53.29% | Meepo: 45.92% | Razor: 56.29 | Slark: 50.12%";
    } else if (el.value === "ancientapparition") {
        firstHeroMsg.textContent = "Huskar: 61.19% | Necrophos: 52.32% | Morphing: 60.27% | Underlord: 52.41% | Bristleback: 54.57%";
    } else if (el.value === "anti-mage") {
        firstHeroMsg.textContent = "Meepo: 41.81% | Outworld Devourer: 52.87% | Phantom Assassin: 45.91% | Troll Warlord: 49.15% | Legion Commander: 49.73%";
    } else if (el.value === "arcwarden") {
        firstHeroMsg.textContent = "Outworld Devourer: 60.49% | Techies: 54.17% | Venomancer: 53.43% | Disruptor: 55.20% | Templar Assassin: 58.54%";
    } else if (el.value === "axe") {
        firstHeroMsg.textContent = "Death Prophet: 59.44% | Venomancer: 52.13% | Outworld Devourer: 58.04% | Timbersaw: 57.77% | Batrider: 61.31%";
    } else if (el.value === "bane") {
        firstHeroMsg.textContent = "Enigma: 41.39% | Dark Seer: 42.89% | Chaos Knight: 37.93% | Meepo: 40.37% | Visage: 42.48%";
    } else if (el.value === "batrider") {
        firstHeroMsg.textContent = "Death Prophet: 44.53% | Night Stalker: 40.04% | Weaver: 36.48% | Queen of Pain: 41.62% | Dazzle: 39.19%";
    } else if (el.value === "beastmaster") {
        firstHeroMsg.textContent = "Death Prophet: 48.20% | Queen of Pain: 45.90% | Viper: 44.81% | Puck: 52.69% | Underlord: 39.14%";
    } else if (el.value === "bloodseeker") {
        firstHeroMsg.textContent = "Tinker: 50.25% | Techies: 51.08% | Storm Spirit: 48.31% | Puck: 61.59% | Lone Druid: 64.12%";
    } else if (el.value === "bountyhunter") {
        firstHeroMsg.textContent = "Puck: 52.57% | Naga Siren: 47.76% | Beastmaster: 45.76% | Chaos Knight: 37.75% | Phantom Lancer: 43.50%";
    } else if (el.value === "brewmaster") {
        firstHeroMsg.textContent = "Dazzle: 47.21% | Weaver: 45.85% | Meepo: 45.85% | Dark Seer: 47.79% | Timbersaw: 52.61%";
    } else if (el.value === "bristleback") {
        firstHeroMsg.textContent = "Slark: 47.54% | Viper: 50.04% | Silencer: 43.44% | Legion Commander: 50.14% | Keeper of the Light: 49.87%";
    } else if (el.value === "broodmother") {
        firstHeroMsg.textContent = "Meepo: 39.94% | Batrider: 52.21% | Dark Seer: 44.24% | Earthshaker: 43.66% | Monkey King";
    } else if (el.value === "centaurwarrunner") {
        firstHeroMsg.textContent = "Lifestealer: 56.81% | Bristleback: 52.01% | Lycan: 54.16% | Bloodseeker: 51.40% | Necrophos: 49.93%";
    } else if (el.value === "chaosknight") {
        firstHeroMsg.textContent = "Medusa: 52.13% | Elder Titan: 46.84% | Underlord: 45.90% | Enigma: 49.62% | Sven: 50.31%";
    } else if (el.value === "chen") {
        firstHeroMsg.textContent = "Beastmaster: 38.52% | Lone Druid: 49.25% | Underlord: 35.20% | Outworld Devourer: 45.16% | Faceless Void: 41.34%";
    } else if (el.value === "clinkz") {
        firstHeroMsg.textContent = "Puck: 59.13% | Bounty Hunter: 53.26% | Slardar: 51.10% | Broodmother: 47.51% | Phantom Lancer: 49.24%";
    } else if (el.value === "clockwerk") {
        firstHeroMsg.textContent = "Anti-Mage: 42.65% | Broodmother: 43.52% | Chen: 52.08% | Phantom Lancer: 46.29% | Huskar: 49.40%";
    } else if (el.value === "crystalmaiden") {
        firstHeroMsg.textContent = "Io: 62.93% | Earth Spirit: 58.00% | Lifestealer: 58.34% | Gyrocopter: 61.94% | Magnus: 57.15%";
    } else if (el.value === "darkseer") {
        firstHeroMsg.textContent = "Oracle: 48.18% | Anti-Mage: 43.64% | Elder Titan: 42.79% | Nature's Prophet: 54.97% | Underlord: 43.40%";
    } else if (el.value === "darkwillow") {
        firstHeroMsg.textContent = "Naga Siren: 51.80% | Pugna: 49.75% | Oracle: 50.09% | Beastmaster: 51.97% | Venomancer: 48.86%";
    } else if (el.value === "dazzle") {
        firstHeroMsg.textContent = "Ancient Apparition: 43.44% | Phantom Lancer: 47.53% | Gyrocopter: 55.13% | Tinker: 49.48% | Morphling: 52.07";
    } else if (el.value === "deathprophet") {
        firstHeroMsg.textContent ="Medusa: 40.12% | Sniper: 40.12% | Shadow Fiend: 43.56% | Elder Titan: 36.33% | Dark Seer: 40.32%";
    } else if (el.value === "disruptor") {
        firstHeroMsg.textContent = "Huskar: 47.00% | Enchantress: 46.26% | Lifestealer: 50.83% | Arc Warden: 46.72% | Wraith King: 38.15%";
    } else if (el.value === "doom") {
        firstHeroMsg.textContent = "Meepo: 40.73% | Broodmother: 43.36% | Chaos Knight: 39.41% | Bounty Hunter: 48.71% | Enchantress: 45.49%";
    } else if (el.value === "dragonknight") {
        firstHeroMsg.textContent = "Slark: 48.45% | Outworld Devourer: 53.99% | Underlord: 43.63% | Necrophos: 43.37% | Death Prophet: 56.34%";
    } else if (el.value === "drowranger") {
        firstHeroMsg.textContent = "Phantom Lancer: 49.62% | Phantom Assassin: 48.93 | Tinker: 51.93% | Bounty Hunter: 55.29% | Slark: 51.64%";
    } else if (el.value === "earthspirit") {
        firstHeroMsg.textContent = "Lycan: 41.09% | Lone Druid: 50.98% | Death Prophet: 49.02% | Razor: 48.09% | Leshrac: 46.77%";
    } else if (el.value === "earthshaker") {
        firstHeroMsg.textContent = "Tiny: 57.67% | Io: 61.66 | Lifestealer: 55.09% | Puck: 61.32% | Earth Spirit: 56.83%";
    } else if (el.value === "eldertitan") {
        firstHeroMsg.textContent = "Lifestealer: 55.93% | Clinkz: 48.53% | Templar Assassin: 57.74% | Drow Ranger: 48.53% | Ember Spirit: 53.13%";
    } else if (el.value === "emberspirit") {
        firstHeroMsg.textContent = "Huskar: 44.79% | Outworld Devourer: 51.46% | Lifestealer: 50.79 | Oracle: 49.50 | Drow Ranger: 42.52%";
    } else if (el.value === "enchantress") {
        firstHeroMsg.textContent = "Phantom Assassin: 44.54% | Phantom Assassin: 46.28% | Tinker: 48.44% | Pugna: 50.22% | Arc Warden: 48.20%";
    } else if (el.value === "enigma") {
        firstHeroMsg.textContent = "Spectre: 37.74% | Medusa: 49.15% | Sniper: 48.13% | Riki: 39.08% | Drow Ranger: 45.86%";
    } else if (el.value === "facelessvoid") {
        firstHeroMsg.textContent = "Meepo: 42.03% | Naga Siren: 52.44% | Chaos Knight: 41.00% | Enchantress: 47.29% | Wraith King: 38.30%";
    } else if (el.value === "grimstroke") {
        firstHeroMsg.textContent = "Io: 58.27% | Puck: 57.76% | Gyrocopter: 54.85% | Razor: 53.69 | Nature's Prophet: 55.66%";
    } else if (el.value === "gyrocopter") {
        firstHeroMsg.textContent = "Spectre: 31.16% | Clockwerk: 38.99% | Underlord: 35.95% | Zeus: 34.11% | Silencer: 37.20%";
    } else if (el.value === "huskar") {
        firstHeroMsg.textContent = "Chaos Knight: 36.40% | Phantom Lancer: 43.11% | Troll Warlord: 45.39% | Ancient Apparition: 39.28% | Viper: 46.10%";
    } else if (el.value === "invoker") {
        firstHeroMsg.textContent = "Puck: 58.74% | Templar Assassin: 54.72% | Io: 60.16% | Lone Druid: 61.53% | Broodmother: 46.19%";
    } else if (el.value === "io") {
        firstHeroMsg.textContent = "Lone Druid: 37.88% | Beastmaster: 33.75% | Leshrac: 35.40% | Lycan: 33.13% | Chen: 39.68%";
    } else if (el.value === "jackiro") {
        firstHeroMsg.textContent = "Lifestealer: 53.64% | Clinkz: 46.10% | Juggernaut: 47.79% | Weaver: 46.69% | Huskar: 51.02%";
    } else if (el.value === "juggernaut") {
        firstHeroMsg.textContent = "Morphling: 51.84% | Io: 59.98% | Lone Druid: 60.98% | Death Prophet: 57.31% | Ursa: 42.25%";
    } else if (el.value === "keeperofthelight") {
        firstHeroMsg.textContent = "Phantom Assassin: 44.87% | Lifestealer: 51.06% | Huskar: 48.38% | Naga Siren: 51.75% | Storm Spirit: 45.81%";
    } else if (el.value === "kunka") {
        firstHeroMsg.textContent = "Lifestealer: 50.15% | Death Prophet: 54.28% | Outworld Devourer: 52.60% | Winter Wyvern: 48.21% | Juggernaut: 45.39";
    } else if (el.value === "legioncommander") {
        firstHeroMsg.textContent = "Winter Wyvern: 46.95% | Troll Warlord: 47.49% | Oracle: 49.32% | Medusa: 47.51% | Dazzle: 45.79%";
    } else if (el.value === "leshrac") {
        firstHeroMsg.textContent = "Lifestealer: 46.89% | Pugna: 44.86% | Medusa: 44.03% | Bristleback: 40.88% | Undying: 37.04%";
    } else if (el.value === "lich") {
        firstHeroMsg.textContent = "Huskar: 53.74% | Pugna: 54.56% | Weaver: 50.15% | Anti-Mage: 50.26% | Oracle: 56.13%";
    } else if (el.value === "lifestealer") {
        firstHeroMsg.textContent = "Ursa: 35.44 | Troll Warlord: 43.18% | Medusa: 43.21% | Phantom Assassin: 40.44| Templar Assassin: 47.96%";
    } else if (el.value === "lina") {
        firstHeroMsg.textContent = "Templar Asassin: 48.14% | Clockwerk: 40.45% | Pugna: 44.47% | Spectre: 32.73% | Gyrocopter: 49.46%";
    } else if (el.value === "lion") {
        firstHeroMsg.textContent = "Pugna: 50.45% | Tiny: 55.60% | Death Prophet: 56.08% | Io: 59.25% | Gyrcopter: 55.74%";
    } else if (el.value === "lonedruid") {
        firstHeroMsg.textContent = "Death Prophet: 41.82% | Beastmaster: 38.26% | Leshrac: 40.46% | Batrider: 44.45% | Gyrocopter: 43.85%";
    } else if (el.value === "luna") {
        firstHeroMsg.textContent = "Spectre: 38.47% | Bristleback: 45.63% | Clockwerk: 46.61% | Shadow Demon: 50.43% | Zeus: 40.93%";
    } else if (el.value === "lycan") {
        firstHeroMsg.textContent = "Bristleback: 41.55% | Naga Siren: 49.05% | Trolll Warlord: 45.95% | Beastmaster: 48.31% | Sven: 43.76%";
    } else if (el.value === "magnus") {
        firstHeroMsg.textContent = "Spectre: 35.78% | Enigma: 44.18% | Sniper: 45.41% | Alchemist: 43.04% | Wraith King: 34.42%";
    } else if (el.value === "medusa") {
        firstHeroMsg.textContent = "Keeper of the Light: 45.97% | Sniper: 45.06% | Nyx Assassin: 44.81% | Anti-Mage: 43.19% | Broodmother: 44.75%"
    } else if (el.value === "monkeyking") {
        firstHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "meepo") {
        firstHeroMsg.textContent = "Sven: 45.31% | Leshrac: 51.15% | Winter Wyvern: 48.63% | Earhtshaker: 45.99% | Lone Druid: 58.25%";
    } else if (el.value === "mirana") {
        firstHeroMsg.textContent = "Bounty Hunter: 53.26% | Puck: 60.50% | Lone Druid: 62.52% | Techies: 51.72% | Io: 62.01%"; 
    } else if (el.value === "monkeyking") {
        firstHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "morphling") {
        firstHeroMsg.textContent = "Axe: 38.26% | Outworld Devourer: 48.57% | Ancient Apparition: 39.45% | Zeus: 36.43% | Techies: 45.03%";
    } else if (el.value === "nagasiren") {
        firstHeroMsg.textContent = "Visage: 50.04% | Lycan: 51.19% | Broodmother: 48.54% | Io: 58.55% | Techies: 50.03%";
    } else if (el.value === "naturesprophet") {
        firstHeroMsg.textContent = "Tidehunter: 49.97% | Io: 55.36% | Warlock: 40.22% | Visage: 42.86% | Winter Wyvern: 46.08%";
    } else if (el.value === "Necrophos") {
        firstHeroMsg.textContent = "Spectre: 50.91% | Bristleback: 56.84% | Centaur Warrunner: 50.53% | Spirit Breaker: 53.23% | Dragon Knight: 56.46%";
    } else if (el.value === "nightstalker") {
        firstHeroMsg.textContent = "Keeper of the Light: 51.86 | Lone Druid: 61.26% | Nyx Assassin: 49.07% | Clinkz: 48.00% | Storm Spirit: 48.56%";
    } else if (el.value === "nyxassassin") {
        firstHeroMsg.textContent = "Lycan: 45.23% | Broodmother: 47.14% | Lifestealer: 51.52% | Templar Assassin: 53.33% | Juggernaut: 46.21%";
    } else if (el.value === "ogremagi") {
        firstHeroMsg.textContent = "Phantom Lancer: 51.13% | Oracle: 54.84% | Io: 60.82% | Meepo: 46.53% | Chen: 58.49%";
    } else if (el.value === "omniknight") {
        firstHeroMsg.textContent = "Razor: 52.90% | Enigma: 45.41% | Outworld Devourer: 52.18% | Dark Seer: 47.52% | Weaver: 46.72%";
    } else if (el.value === "oracle") {
        firstHeroMsg.textContent = "Razor: 49.27: Enchantress: 47.13% | Chaos Knight: 37.55% | Bristleback: 42.77% | Shadow Demon: 46.89%";
    } else if (el.value === "outworlddevourer") {
        firstHeroMsg.textContent = "Pugna: 41.33 | Tinker: 43.06% | Phantom Assassin: 39.83% | Arc Warden: 43.84% | Sniper: 42.65%";
    } else if (el.value === "pangolier") {
        firstHeroMsg.textContent = "Bloodseeker: 39.50% | Faceless Void 42.87% | Naga Siren: 48.40% | Juggernaut: 41.25% | Centaur Warrunner: 35.78%";
    } else if (el.value === "phantomassassin") {
        firstHeroMsg.textContent = "Morphling 52.18% | Puck: 61.06% | Razor: 57.44% | Tinker: 50.83% | Timbersaw: 55.29%";
    } else if (el.value === "phantomlancer") {
        firstHeroMsg.textContent = "Timbersaw: 48.17% | Dark Seer: 44.30% | Ember Spirit: 44.98% | Leshrac: 50.08: Axe:40.41";
    } else if (el.value === "phoenix") {
        firstHeroMsg.textContent = "Huskar: 50.80% | Anti-Mage: 47.00% | Oracle: 54.21% | Io: 59.74% | Arc Warden: 52.70%";
    } else if (el.value === "puck") {
        firstHeroMsg.textContent = "Dragon Knight: 35.67% | Medusa: 39.19% | Spectre: 34.39% | Riki: 29.49% | Underlord: 34.40%";
    } else if (el.value === "pudge") {
        firstHeroMsg.textContent = "Lone Druid: 63.45% | Death Prophet: 59.71% | Puck: 63.38% | Io: 61.87% | Nature's Prophet: 61.87%";
    } else if (el.value === "pugna") {
        firstHeroMsg.textContent = "Huskar: 44.42% | Anti-Mage: 40.51% | Pudge: 40.69% | Lycan: 43.84% | Sniper: 44.97%";
    } else if (el.value === "queenofpain") {
        firstHeroMsg.textContent = "Medusa: 44.82% | Huskar: 45.44 | Meepo: 40.44 | Riki: 37.25 | 54.99";
    } else if (el.value === "razor") {
        firstHeroMsg.textContent = "Spectre: 37.93% | Chaos Knight: 35.14% | Enchantress: 45.16% | Weaver: 41.75% | Phantom Lancer: 42.56%";
    } else if (el.value === "riki") {
        firstHeroMsg.textContent = "Bounty Hunter: 57.85% | Slardar: 58.56% | Lone Druid: 68.53% | Techies: 56.51% | Naga Siren: 61.71%";
    } else if (el.value === "rubick") {
        firstHeroMsg.textContent = "Lycan: 42.81% | Templar Assassin: 49.59% | Lifestealer: 47.94% | Enchantress: 47.30% | Bristleback: 42.64%";
    } else if (el.value === "sandking") {
        firstHeroMsg.textContent = "Zeus: 37.04% | Elder Titan: 40.54% | Phoenix: 40.12% | Underlord: 40.30% | Bristleback: 42.59%";
    } else if (el.value === "shadowdemon") {
        firstHeroMsg.textContent = "Phantom Laner: 44.59% | Ember Spirit: 44.80% | Lycan: 44.19% | Timbersaw: 49.43% | Weaver: 44.86%";
    } else if (el.value === "shadowfiend") {
        firstHeroMsg.textContent = "Templar Assassin: 49.93% | Zeus: 37.46% | Tinker: 45.96% | Techies: 46.24% | Pudge: 41.40%";
    } else if (el.value === "shadowshaman") {
        firstHeroMsg.textContent = "Meepo: 46.75% | Phantom Lancer: 52.00% | Lone Druid: 64.80% | Arc Warden: 43.55% | Visage: 46.78%";
    } else if (el.value === "silencer") {
        firstHeroMsg.textContent = "Broodmother: 46.90% | Lycan: 48.71% | Lone Druid: 62.26% | Phantom Lancer: 50.54% | Io: 59.30%";
    } else if (el.value === "skywrathmage") {
        firstHeroMsg.textContent = "Chaos Knight: 40.23% | Pugna: 49.91% | Wraith King: 43.55% | Huskar: 49.80% | Centaur Warrunner: 40.36%";
    } else if (el.value === "slardar") {
        firstHeroMsg.textContent = "Terrorblade: 40.51% | Tidehunter: 44.57% | Venomancer: 46.94% | Enigma: 44.27% | Phantom Lancer: 46.86%";
    } else if (el.value === "slark") {
        firstHeroMsg.textContent = "Puck: 57.25% | Storm Spirit: 46.19% | Faceless Void: 47.05% | Lion: 47.54% | Necrophos: 42.75%";
    } else if (el.value === "sniper") {
        firstHeroMsg.textContent = "Morphling: 49.15% | Strom Spirit: 44.90% | Nature Prophet: 56.32% | Lone Druid: 61.48% | Spectre: 41.45%";
    } else if (el.value === "spectre") {
        firstHeroMsg.textContent = "Undying: 42.08% | Lifestealer: 52.70% | Viper: 51.04% | Anti-Mage: 46.53% | Broodmother: 47.79%";
    } else if (el.value === "spiritbreaker") {
        firstHeroMsg.textContent = "Underlord: 47.29% | Necrophos: 47.05% | Dark Willow: 53.72% | Puck: 63.58% | Ember Spirit: 52.77%";
    } else if (el.value === "stormspirit") {
        firstHeroMsg.textContent = "Anti-Mage: 42.82% | Meepo: 41.49% | Huskar: 48.78% | Medusa: 49.38% | Earth Spirit: 52.64%";
    } else if (el.value === "sven") {
        firstHeroMsg.textContent = "Medusa: 49.54% | Troll Warlord: 49.86% | Spectre: 45.51% | Phoenix: 45.62% | Gyrocopter: 56.86%";
    } else if (el.value === "techies") {
        firstHeroMsg.textContent = "Pudge: 41.63% | Spectre: 40.51% | Templar Assassin: 51.19% | Anti-Mage: 42.77% | Wraith King: 41.43%";
    } else if (el.value === "templarassassin") {
        firstHeroMsg.textContent = "Phantom Lancer: 39.30% | Venomancer: 40.14% | Dark Seer: 40.36% | Naga Siren: 45.70% | Batrider: 47.79%";
    } else if (el.value === "terrorblade") {
        firstHeroMsg.textContent = "Timbersaw: 53.55% | Tinker: 51.40% | Zeus: 44.60% | Axe: 46.15% | Lone Druid: 62.58%";
    } else if (el.value === "tinker") {
        firstHeroMsg.textContent = "Pudge: 41.80% | Lifestealer: 50.02% | Spectre: 41.07% | Pugna: 48.88% | Clockwerk: 44.79";
    } else if (el.value === "tiny") {
        firstHeroMsg.textContent = "Lifestealer: 42.79% | Huskar: 41.81% | Templar Assassin: 46.54% | Doom: 44.76% | Razor:47.75%";
    } else if (el.value === "treantprotector") {
        firstHeroMsg.textContent = "Visage: 44.79% | Slark: 49.68% | Huskar: 51.83% | Oracle: 52.81% | Batrider: 58.00%";
    } else if (el.value === "trollwarlord") {
        firstHeroMsg.textContent = "Axe: 41.92% | Gyrocopter: 54.00% | Windranger: 48.76% | Tinker: 48:38% | Batrider: 54.74%";
    } else if (el.value === "tusk") {
        firstHeroMsg.textContent = "Underlord: 39.65% | Templar Assassin: 49.16% | Lycan: 42.91% | Medusa: 45.13 | Naga Siren: 49.33%";
    } else if (el.value === "underlord") {
        firstHeroMsg.textContent = "Ursa: 43.88% | Broodmother: 48.11% | Sniper: 49.92% | Anti-Mage: 47.18% | Huskar: 51.74%";
    } else if (el.value === "undying") {
        firstHeroMsg.textContent = "Anti-Mage: 47.35% | Medusa: 52.02% | Meepo: 46.97% | Phantom Lancer: 51.66% | Ember Spirit: 52.02%";
    } else if (el.value === "ursa") {
        firstHeroMsg.textContent = "Razor: 56.72% | Phantom Lancer: 51.25% | Venomancer: 52.51% | Lone Druid: 64.58% | Templar Assassin: 58.50%";
    } else if (el.value === "vengefulspirit") {
        firstHeroMsg.textContent = "Terrorblade: 46.67% | Phantom Lancer: 52.19% | Meepo: 48.36% | Naga Siren: 58.74% | Winter Wyvern: 53.62%";
    } else if (el.value === "venomancer") {
        firstHeroMsg.textContent = "Huskar: 56.99% | Anti-Mage: 42.88% | Arc Warden: 47.14% | Dark Seer: 46.74% | Broodmother: 44.50";
    } else if (el.value === "viper") {
        firstHeroMsg.textContent = "Chaos Knight: 37.62% | Terrorblade: 39.94% | Phantom Lancer: 45.48% | Juggernaut: 43.43% | Pudge: 42.22%";
    } else if (e.value === "visage") {
        firstHeroMsg.textContent = "Medusa: 50.32% | Bristleback: 48.56% | Sniper: 50.40% | Axe: 45.58% | Drow Ranger: 48.32%";
    } else if (el.value === "warlock") {
        firstHeroMsg.textContent = "Broodmother: 48.04% | Huskar: 53.66% | Brewmasther: 49.81% | Drow Ranger: 49.36% | Clinkz: 51.54%";
    } else if (el.value === "weaver") {
        firstHeroMsg.textContent = "Faceless Void: 45.63% | Techies: 48.77% | Puck: 58.75% | Bounty Hunter: 52.35% | Drow Ranger: 45.39%";
    } else if (el.value === "windranger") {
        firstHeroMsg.textContent = "Puck: 56.96% | Spectre: 41.60% | Centuar Warunner: 37.03% | Bristleback: 44.96% | Ember Spirit: 46.84%";
    } else if (el.value === "winterwyvern") {
        firstHeroMsg.textContent = "Timbersaw: 49.99% | Anti-Mage: 43.81% | Pugna: 50.07% | Tinker: 49.27% | Huskar: 49.86%" 
    } else if (el.value === "witchdoctor") {
        firstHeroMsg.textContent = "Morphling: 50.11% | Phantom Lancer: 48.19% | Broodmother: 46.03% | Chen: 54.64% | Riki: 40.35%"
    } else if (el.value === "wraithking") {
        firstHeroMsg.textContent = "Phantom Lancer: 49.44% | Underlord: 46.41% | Undying: 45.41% | Anti-Mage: 48.28% | Timbersaw: 56.29%"
    } else if (el.value === "zeus") {
        firstHeroMsg.textContent = "Huskar: 52.07 | Broodmother: 58.20% | Anti-Mage: 48.13% | Lifestealer: 56.21% | Lycan: 50.67";
    }
}


// 2nd hero "else if"
const handle2Change = (el) => {
	console.log(`Changed to character ${el.value}`)
    if (el.value === "none") {
        secondHeroMsg.textContent = "Counters will appear when a hero is selected.";
    } else if (el.value === "abbadon" ) {
        secondHeroMsg.textContent = "Anti-Mage : 48.92% | Slark : 52.05% | Undying : 45.69% | Outworld Devourer : 57.45% | Enchantress 51.61%";
    } else if (el.value === "alchemist") {
        secondHeroMsg.textContent = "Bloodseeker: 45.50% | Monkey King: 53.29% | Meepo: 45.92% | Razor: 56.29 | Slark: 50.12%";
    } else if (el.value === "ancientapparition") {
        secondHeroMsg.textContent = "Huskar: 61.19% | Necrophos: 52.32% | Morphing: 60.27% | Underlord: 52.41% | Bristleback: 54.57%";
    } else if (el.value === "anti-mage") {
        secondHeroMsg.textContent = "Meepo: 41.81% | Outworld Devourer: 52.87% | Phantom Assassin: 45.91% | Troll Warlord: 49.15% | Legion Commander: 49.73%";
    } else if (el.value === "arcwarden") {
        secondHeroMsg.textContent = "Outworld Devourer: 60.49% | Techies: 54.17% | Venomancer: 53.43% | Disruptor: 55.20% | Templar Assassin: 58.54%";
    } else if (el.value === "axe") {
        secondHeroMsg.textContent = "Death Prophet: 59.44% | Venomancer: 52.13% | Outworld Devourer: 58.04% | Timbersaw: 57.77% | Batrider: 61.31%";
    } else if (el.value === "bane") {
        secondHeroMsg.textContent = "Enigma: 41.39% | Dark Seer: 42.89% | Chaos Knight: 37.93% | Meepo: 40.37% | Visage: 42.48%";
    } else if (el.value === "batrider") {
        secondHeroMsg.textContent = "Death Prophet: 44.53% | Night Stalker: 40.04% | Weaver: 36.48% | Queen of Pain: 41.62% | Dazzle: 39.19%";
    } else if (el.value === "beastmaster") {
        secondHeroMsg.textContent = "Death Prophet: 48.20% | Queen of Pain: 45.90% | Viper: 44.81% | Puck: 52.69% | Underlord: 39.14%";
    } else if (el.value === "bloodseeker") {
        secondHeroMsg.textContent = "Tinker: 50.25% | Techies: 51.08% | Storm Spirit: 48.31% | Puck: 61.59% | Lone Druid: 64.12%";
    } else if (el.value === "bountyhunter") {
        secondHeroMsg.textContent = "Puck: 52.57% | Naga Siren: 47.76% | Beastmaster: 45.76% | Chaos Knight: 37.75% | Phantom Lancer: 43.50%";
    } else if (el.value === "brewmaster") {
        secondHeroMsg.textContent = "Dazzle: 47.21% | Weaver: 45.85% | Meepo: 45.85% | Dark Seer: 47.79% | Timbersaw: 52.61%";
    } else if (el.value === "bristleback") {
        secondHeroMsg.textContent = "Slark: 47.54% | Viper: 50.04% | Silencer: 43.44% | Legion Commander: 50.14% | Keeper of the Light: 49.87%";
    } else if (el.value === "broodmother") {
        secondHeroMsg.textContent = "Meepo: 39.94% | Batrider: 52.21% | Dark Seer: 44.24% | Earthshaker: 43.66% | Monkey King";
    } else if (el.value === "centaurwarrunner") {
        secondHeroMsg.textContent = "Lifestealer: 56.81% | Bristleback: 52.01% | Lycan: 54.16% | Bloodseeker: 51.40% | Necrophos: 49.93%";
    } else if (el.value === "chaosknight") {
        secondHeroMsg.textContent = "Medusa: 52.13% | Elder Titan: 46.84% | Underlord: 45.90% | Enigma: 49.62% | Sven: 50.31%";
    } else if (el.value === "chen") {
        secondHeroMsg.textContent = "Beastmaster: 38.52% | Lone Druid: 49.25% | Underlord: 35.20% | Outworld Devourer: 45.16% | Faceless Void: 41.34%";
    } else if (el.value === "clinkz") {
        secondHeroMsg.textContent = "Puck: 59.13% | Bounty Hunter: 53.26% | Slardar: 51.10% | Broodmother: 47.51% | Phantom Lancer: 49.24%";
    } else if (el.value === "clockwerk") {
        secondHeroMsg.textContent = "Anti-Mage: 42.65% | Broodmother: 43.52% | Chen: 52.08% | Phantom Lancer: 46.29% | Huskar: 49.40%";
    } else if (el.value === "crystalmaiden") {
        secondHeroMsg.textContent = "Io: 62.93% | Earth Spirit: 58.00% | Lifestealer: 58.34% | Gyrocopter: 61.94% | Magnus: 57.15%";
    } else if (el.value === "darkseer") {
        secondHeroMsg.textContent = "Oracle: 48.18% | Anti-Mage: 43.64% | Elder Titan: 42.79% | Nature's Prophet: 54.97% | Underlord: 43.40%";
    } else if (el.value === "darkwillow") {
        secondHeroMsg.textContent = "Naga Siren: 51.80% | Pugna: 49.75% | Oracle: 50.09% | Beastmaster: 51.97% | Venomancer: 48.86%";
    } else if (el.value === "dazzle") {
        secondHeroMsg.textContent = "Ancient Apparition: 43.44% | Phantom Lancer: 47.53% | Gyrocopter: 55.13% | Tinker: 49.48% | Morphling: 52.07";
    } else if (el.value === "deathprophet") {
        secondHeroMsg.textContent ="Medusa: 40.12% | Sniper: 40.12% | Shadow Fiend: 43.56% | Elder Titan: 36.33% | Dark Seer: 40.32%";
    } else if (el.value === "disruptor") {
        secondHeroMsg.textContent = "Huskar: 47.00% | Enchantress: 46.26% | Lifestealer: 50.83% | Arc Warden: 46.72% | Wraith King: 38.15%";
    } else if (el.value === "doom") {
        secondHeroMsg.textContent = "Meepo: 40.73% | Broodmother: 43.36% | Chaos Knight: 39.41% | Bounty Hunter: 48.71% | Enchantress: 45.49%";
    } else if (el.value === "dragonknight") {
        secondHeroMsg.textContent = "Slark: 48.45% | Outworld Devourer: 53.99% | Underlord: 43.63% | Necrophos: 43.37% | Death Prophet: 56.34%";
    } else if (el.value === "drowranger") {
        secondHeroMsg.textContent = "Phantom Lancer: 49.62% | Phantom Assassin: 48.93 | Tinker: 51.93% | Bounty Hunter: 55.29% | Slark: 51.64%";
    } else if (el.value === "earthspirit") {
        secondHeroMsg.textContent = "Lycan: 41.09% | Lone Druid: 50.98% | Death Prophet: 49.02% | Razor: 48.09% | Leshrac: 46.77%";
    } else if (el.value === "earthshaker") {
        secondHeroMsg.textContent = "Tiny: 57.67% | Io: 61.66 | Lifestealer: 55.09% | Puck: 61.32% | Earth Spirit: 56.83%";
    } else if (el.value === "eldertitan") {
        secondHeroMsg.textContent = "Lifestealer: 55.93% | Clinkz: 48.53% | Templar Assassin: 57.74% | Drow Ranger: 48.53% | Ember Spirit: 53.13%";
    } else if (el.value === "emberspirit") {
        secondHeroMsg.textContent = "Huskar: 44.79% | Outworld Devourer: 51.46% | Lifestealer: 50.79 | Oracle: 49.50 | Drow Ranger: 42.52%";
    } else if (el.value === "enchantress") {
        secondHeroMsg.textContent = "Phantom Assassin: 44.54% | Phantom Assassin: 46.28% | Tinker: 48.44% | Pugna: 50.22% | Arc Warden: 48.20%";
    } else if (el.value === "enigma") {
        secondHeroMsg.textContent = "Spectre: 37.74% | Medusa: 49.15% | Sniper: 48.13% | Riki: 39.08% | Drow Ranger: 45.86%";
    } else if (el.value === "facelessvoid") {
        secondHeroMsg.textContent = "Meepo: 42.03% | Naga Siren: 52.44% | Chaos Knight: 41.00% | Enchantress: 47.29% | Wraith King: 38.30%";
    } else if (el.value === "grimstroke") {
        secondHeroMsg.textContent = "Io: 58.27% | Puck: 57.76% | Gyrocopter: 54.85% | Razor: 53.69 | Nature's Prophet: 55.66%";
    } else if (el.value === "gyrocopter") {
        secondHeroMsg.textContent = "Spectre: 31.16% | Clockwerk: 38.99% | Underlord: 35.95% | Zeus: 34.11% | Silencer: 37.20%";
    } else if (el.value === "huskar") {
        secondHeroMsg.textContent = "Chaos Knight: 36.40% | Phantom Lancer: 43.11% | Troll Warlord: 45.39% | Ancient Apparition: 39.28% | Viper: 46.10%";
    } else if (el.value === "invoker") {
        secondHeroMsg.textContent = "Puck: 58.74% | Templar Assassin: 54.72% | Io: 60.16% | Lone Druid: 61.53% | Broodmother: 46.19%";
    } else if (el.value === "io") {
        secondHeroMsg.textContent = "Lone Druid: 37.88% | Beastmaster: 33.75% | Leshrac: 35.40% | Lycan: 33.13% | Chen: 39.68%";
    } else if (el.value === "jackiro") {
        secondHeroMsg.textContent = "Lifestealer: 53.64% | Clinkz: 46.10% | Juggernaut: 47.79% | Weaver: 46.69% | Huskar: 51.02%";
    } else if (el.value === "juggernaut") {
        secondHeroMsg.textContent = "Morphling: 51.84% | Io: 59.98% | Lone Druid: 60.98% | Death Prophet: 57.31% | Ursa: 42.25%";
    } else if (el.value === "keeperofthelight") {
        secondHeroMsg.textContent = "Phantom Assassin: 44.87% | Lifestealer: 51.06% | Huskar: 48.38% | Naga Siren: 51.75% | Storm Spirit: 45.81%";
    } else if (el.value === "kunka") {
        secondHeroMsg.textContent = "Lifestealer: 50.15% | Death Prophet: 54.28% | Outworld Devourer: 52.60% | Winter Wyvern: 48.21% | Juggernaut: 45.39";
    } else if (el.value === "legioncommander") {
        secondHeroMsg.textContent = "Winter Wyvern: 46.95% | Troll Warlord: 47.49% | Oracle: 49.32% | Medusa: 47.51% | Dazzle: 45.79%";
    } else if (el.value === "leshrac") {
        secondHeroMsg.textContent = "Lifestealer: 46.89% | Pugna: 44.86% | Medusa: 44.03% | Bristleback: 40.88% | Undying: 37.04%";
    } else if (el.value === "lich") {
        secondHeroMsg.textContent = "Huskar: 53.74% | Pugna: 54.56% | Weaver: 50.15% | Anti-Mage: 50.26% | Oracle: 56.13%";
    } else if (el.value === "lifestealer") {
        secondHeroMsg.textContent = "Ursa: 35.44 | Troll Warlord: 43.18% | Medusa: 43.21% | Phantom Assassin: 40.44| Templar Assassin: 47.96%";
    } else if (el.value === "lina") {
        secondHeroMsg.textContent = "Templar Asassin: 48.14% | Clockwerk: 40.45% | Pugna: 44.47% | Spectre: 32.73% | Gyrocopter: 49.46%";
    } else if (el.value === "lion") {
        secondHeroMsg.textContent = "Pugna: 50.45% | Tiny: 55.60% | Death Prophet: 56.08% | Io: 59.25% | Gyrcopter: 55.74%";
    } else if (el.value === "lonedruid") {
        secondHeroMsg.textContent = "Death Prophet: 41.82% | Beastmaster: 38.26% | Leshrac: 40.46% | Batrider: 44.45% | Gyrocopter: 43.85%";
    } else if (el.value === "luna") {
        secondHeroMsg.textContent = "Spectre: 38.47% | Bristleback: 45.63% | Clockwerk: 46.61% | Shadow Demon: 50.43% | Zeus: 40.93%";
    } else if (el.value === "lycan") {
        secondHeroMsg.textContent = "Bristleback: 41.55% | Naga Siren: 49.05% | Trolll Warlord: 45.95% | Beastmaster: 48.31% | Sven: 43.76%";
    } else if (el.value === "magnus") {
        secondHeroMsg.textContent = "Spectre: 35.78% | Enigma: 44.18% | Sniper: 45.41% | Alchemist: 43.04% | Wraith King: 34.42%";
    } else if (el.value === "medusa") {
        secondHeroMsg.textContent = "Keeper of the Light: 45.97% | Sniper: 45.06% | Nyx Assassin: 44.81% | Anti-Mage: 43.19% | Broodmother: 44.75%"
    } else if (el.value === "monkeyking") {
        secondHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "meepo") {
        secondHeroMsg.textContent = "Sven: 45.31% | Leshrac: 51.15% | Winter Wyvern: 48.63% | Earhtshaker: 45.99% | Lone Druid: 58.25%";
    } else if (el.value === "mirana") {
        secondHeroMsg.textContent = "Bounty Hunter: 53.26% | Puck: 60.50% | Lone Druid: 62.52% | Techies: 51.72% | Io: 62.01%"; 
    } else if (el.value === "monkeyking") {
        secondHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "morphling") {
        secondHeroMsg.textContent = "Axe: 38.26% | Outworld Devourer: 48.57% | Ancient Apparition: 39.45% | Zeus: 36.43% | Techies: 45.03%";
    } else if (el.value === "nagasiren") {
        secondHeroMsg.textContent = "Visage: 50.04% | Lycan: 51.19% | Broodmother: 48.54% | Io: 58.55% | Techies: 50.03%";
    } else if (el.value === "naturesprophet") {
        secondHeroMsg.textContent = "Tidehunter: 49.97% | Io: 55.36% | Warlock: 40.22% | Visage: 42.86% | Winter Wyvern: 46.08%";
    } else if (el.value === "Necrophos") {
        secondHeroMsg.textContent = "Spectre: 50.91% | Bristleback: 56.84% | Centaur Warrunner: 50.53% | Spirit Breaker: 53.23% | Dragon Knight: 56.46%";
    } else if (el.value === "nightstalker") {
        secondHeroMsg.textContent = "Keeper of the Light: 51.86 | Lone Druid: 61.26% | Nyx Assassin: 49.07% | Clinkz: 48.00% | Storm Spirit: 48.56%";
    } else if (el.value === "nyxassassin") {
        secondHeroMsg.textContent = "Lycan: 45.23% | Broodmother: 47.14% | Lifestealer: 51.52% | Templar Assassin: 53.33% | Juggernaut: 46.21%";
    } else if (el.value === "ogremagi") {
        secondHeroMsg.textContent = "Phantom Lancer: 51.13% | Oracle: 54.84% | Io: 60.82% | Meepo: 46.53% | Chen: 58.49%";
    } else if (el.value === "omniknight") {
        secondHeroMsg.textContent = "Razor: 52.90% | Enigma: 45.41% | Outworld Devourer: 52.18% | Dark Seer: 47.52% | Weaver: 46.72%";
    } else if (el.value === "oracle") {
        secondHeroMsg.textContent = "Razor: 49.27: Enchantress: 47.13% | Chaos Knight: 37.55% | Bristleback: 42.77% | Shadow Demon: 46.89%";
    } else if (el.value === "outworlddevourer") {
        secondHeroMsg.textContent = "Pugna: 41.33 | Tinker: 43.06% | Phantom Assassin: 39.83% | Arc Warden: 43.84% | Sniper: 42.65%";
    } else if (el.value === "pangolier") {
        secondHeroMsg.textContent = "Bloodseeker: 39.50% | Faceless Void 42.87% | Naga Siren: 48.40% | Juggernaut: 41.25% | Centaur Warrunner: 35.78%";
    } else if (el.value === "phantomassassin") {
        secondHeroMsg.textContent = "Morphling 52.18% | Puck: 61.06% | Razor: 57.44% | Tinker: 50.83% | Timbersaw: 55.29%";
    } else if (el.value === "phantomlancer") {
        secondHeroMsg.textContent = "Timbersaw: 48.17% | Dark Seer: 44.30% | Ember Spirit: 44.98% | Leshrac: 50.08: Axe:40.41";
    } else if (el.value === "phoenix") {
        secondHeroMsg.textContent = "Huskar: 50.80% | Anti-Mage: 47.00% | Oracle: 54.21% | Io: 59.74% | Arc Warden: 52.70%";
    } else if (el.value === "puck") {
        secondHeroMsg.textContent = "Dragon Knight: 35.67% | Medusa: 39.19% | Spectre: 34.39% | Riki: 29.49% | Underlord: 34.40%";
    } else if (el.value === "pudge") {
        secondHeroMsg.textContent = "Lone Druid: 63.45% | Death Prophet: 59.71% | Puck: 63.38% | Io: 61.87% | Nature's Prophet: 61.87%";
    } else if (el.value === "pugna") {
        secondHeroMsg.textContent = "Huskar: 44.42% | Anti-Mage: 40.51% | Pudge: 40.69% | Lycan: 43.84% | Sniper: 44.97%";
    } else if (el.value === "queenofpain") {
        secondHeroMsg.textContent = "Medusa: 44.82% | Huskar: 45.44 | Meepo: 40.44 | Riki: 37.25 | 54.99";
    } else if (el.value === "razor") {
        secondHeroMsg.textContent = "Spectre: 37.93% | Chaos Knight: 35.14% | Enchantress: 45.16% | Weaver: 41.75% | Phantom Lancer: 42.56%";
    } else if (el.value === "riki") {
        secondHeroMsg.textContent = "Bounty Hunter: 57.85% | Slardar: 58.56% | Lone Druid: 68.53% | Techies: 56.51% | Naga Siren: 61.71%";
    } else if (el.value === "rubick") {
        secondHeroMsg.textContent = "Lycan: 42.81% | Templar Assassin: 49.59% | Lifestealer: 47.94% | Enchantress: 47.30% | Bristleback: 42.64%";
    } else if (el.value === "sandking") {
        secondHeroMsg.textContent = "Zeus: 37.04% | Elder Titan: 40.54% | Phoenix: 40.12% | Underlord: 40.30% | Bristleback: 42.59%";
    } else if (el.value === "shadowdemon") {
        secondHeroMsg.textContent = "Phantom Laner: 44.59% | Ember Spirit: 44.80% | Lycan: 44.19% | Timbersaw: 49.43% | Weaver: 44.86%";
    } else if (el.value === "shadowfiend") {
        secondHeroMsg.textContent = "Templar Assassin: 49.93% | Zeus: 37.46% | Tinker: 45.96% | Techies: 46.24% | Pudge: 41.40%";
    } else if (el.value === "shadowshaman") {
        secondHeroMsg.textContent = "Meepo: 46.75% | Phantom Lancer: 52.00% | Lone Druid: 64.80% | Arc Warden: 43.55% | Visage: 46.78%";
    } else if (el.value === "silencer") {
        secondHeroMsg.textContent = "Broodmother: 46.90% | Lycan: 48.71% | Lone Druid: 62.26% | Phantom Lancer: 50.54% | Io: 59.30%";
    } else if (el.value === "skywrathmage") {
        secondHeroMsg.textContent = "Chaos Knight: 40.23% | Pugna: 49.91% | Wraith King: 43.55% | Huskar: 49.80% | Centaur Warrunner: 40.36%";
    } else if (el.value === "slardar") {
        secondHeroMsg.textContent = "Terrorblade: 40.51% | Tidehunter: 44.57% | Venomancer: 46.94% | Enigma: 44.27% | Phantom Lancer: 46.86%";
    } else if (el.value === "slark") {
        secondHeroMsg.textContent = "Puck: 57.25% | Storm Spirit: 46.19% | Faceless Void: 47.05% | Lion: 47.54% | Necrophos: 42.75%";
    } else if (el.value === "sniper") {
        secondHeroMsg.textContent = "Morphling: 49.15% | Strom Spirit: 44.90% | Nature Prophet: 56.32% | Lone Druid: 61.48% | Spectre: 41.45%";
    } else if (el.value === "spectre") {
        secondHeroMsg.textContent = "Undying: 42.08% | Lifestealer: 52.70% | Viper: 51.04% | Anti-Mage: 46.53% | Broodmother: 47.79%";
    } else if (el.value === "spiritbreaker") {
        secondHeroMsg.textContent = "Underlord: 47.29% | Necrophos: 47.05% | Dark Willow: 53.72% | Puck: 63.58% | Ember Spirit: 52.77%";
    } else if (el.value === "stormspirit") {
        secondHeroMsg.textContent = "Anti-Mage: 42.82% | Meepo: 41.49% | Huskar: 48.78% | Medusa: 49.38% | Earth Spirit: 52.64%";
    } else if (el.value === "sven") {
        secondHeroMsg.textContent = "Medusa: 49.54% | Troll Warlord: 49.86% | Spectre: 45.51% | Phoenix: 45.62% | Gyrocopter: 56.86%";
    } else if (el.value === "techies") {
        secondHeroMsg.textContent = "Pudge: 41.63% | Spectre: 40.51% | Templar Assassin: 51.19% | Anti-Mage: 42.77% | Wraith King: 41.43%";
    } else if (el.value === "templarassassin") {
        secondHeroMsg.textContent = "Phantom Lancer: 39.30% | Venomancer: 40.14% | Dark Seer: 40.36% | Naga Siren: 45.70% | Batrider: 47.79%";
    } else if (el.value === "terrorblade") {
        secondHeroMsg.textContent = "Timbersaw: 53.55% | Tinker: 51.40% | Zeus: 44.60% | Axe: 46.15% | Lone Druid: 62.58%";
    } else if (el.value === "tinker") {
        secondHeroMsg.textContent = "Pudge: 41.80% | Lifestealer: 50.02% | Spectre: 41.07% | Pugna: 48.88% | Clockwerk: 44.79";
    } else if (el.value === "tiny") {
        secondHeroMsg.textContent = "Lifestealer: 42.79% | Huskar: 41.81% | Templar Assassin: 46.54% | Doom: 44.76% | Razor:47.75%";
    } else if (el.value === "treantprotector") {
        secondHeroMsg.textContent = "Visage: 44.79% | Slark: 49.68% | Huskar: 51.83% | Oracle: 52.81% | Batrider: 58.00%";
    } else if (el.value === "trollwarlord") {
        secondHeroMsg.textContent = "Axe: 41.92% | Gyrocopter: 54.00% | Windranger: 48.76% | Tinker: 48:38% | Batrider: 54.74%";
    } else if (el.value === "tusk") {
        secondHeroMsg.textContent = "Underlord: 39.65% | Templar Assassin: 49.16% | Lycan: 42.91% | Medusa: 45.13 | Naga Siren: 49.33%";
    } else if (el.value === "underlord") {
        secondHeroMsg.textContent = "Ursa: 43.88% | Broodmother: 48.11% | Sniper: 49.92% | Anti-Mage: 47.18% | Huskar: 51.74%";
    } else if (el.value === "undying") {
        secondHeroMsg.textContent = "Anti-Mage: 47.35% | Medusa: 52.02% | Meepo: 46.97% | Phantom Lancer: 51.66% | Ember Spirit: 52.02%";
    } else if (el.value === "ursa") {
        secondHeroMsg.textContent = "Razor: 56.72% | Phantom Lancer: 51.25% | Venomancer: 52.51% | Lone Druid: 64.58% | Templar Assassin: 58.50%";
    } else if (el.value === "vengefulspirit") {
        secondHeroMsg.textContent = "Terrorblade: 46.67% | Phantom Lancer: 52.19% | Meepo: 48.36% | Naga Siren: 58.74% | Winter Wyvern: 53.62%";
    } else if (el.value === "venomancer") {
        secondHeroMsg.textContent = "Huskar: 56.99% | Anti-Mage: 42.88% | Arc Warden: 47.14% | Dark Seer: 46.74% | Broodmother: 44.50";
    } else if (el.value === "viper") {
        secondHeroMsg.textContent = "Chaos Knight: 37.62% | Terrorblade: 39.94% | Phantom Lancer: 45.48% | Juggernaut: 43.43% | Pudge: 42.22%";
    } else if (e.value === "visage") {
        secondHeroMsg.textContent = "Medusa: 50.32% | Bristleback: 48.56% | Sniper: 50.40% | Axe: 45.58% | Drow Ranger: 48.32%";
    } else if (el.value === "warlock") {
        secondHeroMsg.textContent = "Broodmother: 48.04% | Huskar: 53.66% | Brewmasther: 49.81% | Drow Ranger: 49.36% | Clinkz: 51.54%";
    } else if (el.value === "weaver") {
        secondHeroMsg.textContent = "Faceless Void: 45.63% | Techies: 48.77% | Puck: 58.75% | Bounty Hunter: 52.35% | Drow Ranger: 45.39%";
    } else if (el.value === "windranger") {
        secondHeroMsg.textContent = "Puck: 56.96% | Spectre: 41.60% | Centuar Warunner: 37.03% | Bristleback: 44.96% | Ember Spirit: 46.84%";
    } else if (el.value === "winterwyvern") {
        secondHeroMsg.textContent = "Timbersaw: 49.99% | Anti-Mage: 43.81% | Pugna: 50.07% | Tinker: 49.27% | Huskar: 49.86%" 
    } else if (el.value === "witchdoctor") {
        secondHeroMsg.textContent = "Morphling: 50.11% | Phantom Lancer: 48.19% | Broodmother: 46.03% | Chen: 54.64% | Riki: 40.35%"
    } else if (el.value === "wraithking") {
        secondHeroMsg.textContent = "Phantom Lancer: 49.44% | Underlord: 46.41% | Undying: 45.41% | Anti-Mage: 48.28% | Timbersaw: 56.29%"
    } else if (el.value === "zeus") {
        secondHeroMsg.textContent = "Huskar: 52.07 | Broodmother: 58.20% | Anti-Mage: 48.13% | Lifestealer: 56.21% | Lycan: 50.67";
    }
}

// Third hero "else if"
const handle3Change = (el) => {
	console.log(`Changed to character ${el.value}`)
    if (el.value === "none") {
        thirdHeroMsg.textContent = "Counters will appear when a hero is selected.";
    } else if (el.value === "abbadon" ) {
        thirdHeroMsg.textContent = "Anti-Mage : 48.92% | Slark : 52.05% | Undying : 45.69% | Outworld Devourer : 57.45% | Enchantress 51.61%";
    } else if (el.value === "alchemist") {
        thirdHeroMsg.textContent = "Bloodseeker: 45.50% | Monkey King: 53.29% | Meepo: 45.92% | Razor: 56.29 | Slark: 50.12%";
    } else if (el.value === "ancientapparition") {
        thirdHeroMsg.textContent = "Huskar: 61.19% | Necrophos: 52.32% | Morphing: 60.27% | Underlord: 52.41% | Bristleback: 54.57%";
    } else if (el.value === "anti-mage") {
        thirdHeroMsg.textContent = "Meepo: 41.81% | Outworld Devourer: 52.87% | Phantom Assassin: 45.91% | Troll Warlord: 49.15% | Legion Commander: 49.73%";
    } else if (el.value === "arcwarden") {
        thirdHeroMsg.textContent = "Outworld Devourer: 60.49% | Techies: 54.17% | Venomancer: 53.43% | Disruptor: 55.20% | Templar Assassin: 58.54%";
    } else if (el.value === "axe") {
        thirdHeroMsg.textContent = "Death Prophet: 59.44% | Venomancer: 52.13% | Outworld Devourer: 58.04% | Timbersaw: 57.77% | Batrider: 61.31%";
    } else if (el.value === "bane") {
        thirdHeroMsg.textContent = "Enigma: 41.39% | Dark Seer: 42.89% | Chaos Knight: 37.93% | Meepo: 40.37% | Visage: 42.48%";
    } else if (el.value === "batrider") {
        thirdHeroMsg.textContent = "Death Prophet: 44.53% | Night Stalker: 40.04% | Weaver: 36.48% | Queen of Pain: 41.62% | Dazzle: 39.19%";
    } else if (el.value === "beastmaster") {
        thirdHeroMsg.textContent = "Death Prophet: 48.20% | Queen of Pain: 45.90% | Viper: 44.81% | Puck: 52.69% | Underlord: 39.14%";
    } else if (el.value === "bloodseeker") {
        thirdHeroMsg.textContent = "Tinker: 50.25% | Techies: 51.08% | Storm Spirit: 48.31% | Puck: 61.59% | Lone Druid: 64.12%";
    } else if (el.value === "bountyhunter") {
        thirdHeroMsg.textContent = "Puck: 52.57% | Naga Siren: 47.76% | Beastmaster: 45.76% | Chaos Knight: 37.75% | Phantom Lancer: 43.50%";
    } else if (el.value === "brewmaster") {
        thirdHeroMsg.textContent = "Dazzle: 47.21% | Weaver: 45.85% | Meepo: 45.85% | Dark Seer: 47.79% | Timbersaw: 52.61%";
    } else if (el.value === "bristleback") {
        thirdHeroMsg.textContent = "Slark: 47.54% | Viper: 50.04% | Silencer: 43.44% | Legion Commander: 50.14% | Keeper of the Light: 49.87%";
    } else if (el.value === "broodmother") {
        thirdHeroMsg.textContent = "Meepo: 39.94% | Batrider: 52.21% | Dark Seer: 44.24% | Earthshaker: 43.66% | Monkey King";
    } else if (el.value === "centaurwarrunner") {
        thirdHeroMsg.textContent = "Lifestealer: 56.81% | Bristleback: 52.01% | Lycan: 54.16% | Bloodseeker: 51.40% | Necrophos: 49.93%";
    } else if (el.value === "chaosknight") {
        thirdHeroMsg.textContent = "Medusa: 52.13% | Elder Titan: 46.84% | Underlord: 45.90% | Enigma: 49.62% | Sven: 50.31%";
    } else if (el.value === "chen") {
        thirdHeroMsg.textContent = "Beastmaster: 38.52% | Lone Druid: 49.25% | Underlord: 35.20% | Outworld Devourer: 45.16% | Faceless Void: 41.34%";
    } else if (el.value === "clinkz") {
        thirdHeroMsg.textContent = "Puck: 59.13% | Bounty Hunter: 53.26% | Slardar: 51.10% | Broodmother: 47.51% | Phantom Lancer: 49.24%";
    } else if (el.value === "clockwerk") {
        thirdHeroMsg.textContent = "Anti-Mage: 42.65% | Broodmother: 43.52% | Chen: 52.08% | Phantom Lancer: 46.29% | Huskar: 49.40%";
    } else if (el.value === "crystalmaiden") {
        thirdHeroMsg.textContent = "Io: 62.93% | Earth Spirit: 58.00% | Lifestealer: 58.34% | Gyrocopter: 61.94% | Magnus: 57.15%";
    } else if (el.value === "darkseer") {
        thirdHeroMsg.textContent = "Oracle: 48.18% | Anti-Mage: 43.64% | Elder Titan: 42.79% | Nature's Prophet: 54.97% | Underlord: 43.40%";
    } else if (el.value === "darkwillow") {
        thirdHeroMsg.textContent = "Naga Siren: 51.80% | Pugna: 49.75% | Oracle: 50.09% | Beastmaster: 51.97% | Venomancer: 48.86%";
    } else if (el.value === "dazzle") {
        thirdHeroMsg.textContent = "Ancient Apparition: 43.44% | Phantom Lancer: 47.53% | Gyrocopter: 55.13% | Tinker: 49.48% | Morphling: 52.07";
    } else if (el.value === "deathprophet") {
        thirdHeroMsg.textContent ="Medusa: 40.12% | Sniper: 40.12% | Shadow Fiend: 43.56% | Elder Titan: 36.33% | Dark Seer: 40.32%";
    } else if (el.value === "disruptor") {
        thirdHeroMsg.textContent = "Huskar: 47.00% | Enchantress: 46.26% | Lifestealer: 50.83% | Arc Warden: 46.72% | Wraith King: 38.15%";
    } else if (el.value === "doom") {
        thirdHeroMsg.textContent = "Meepo: 40.73% | Broodmother: 43.36% | Chaos Knight: 39.41% | Bounty Hunter: 48.71% | Enchantress: 45.49%";
    } else if (el.value === "dragonknight") {
        thirdHeroMsg.textContent = "Slark: 48.45% | Outworld Devourer: 53.99% | Underlord: 43.63% | Necrophos: 43.37% | Death Prophet: 56.34%";
    } else if (el.value === "drowranger") {
        thirdHeroMsg.textContent = "Phantom Lancer: 49.62% | Phantom Assassin: 48.93 | Tinker: 51.93% | Bounty Hunter: 55.29% | Slark: 51.64%";
    } else if (el.value === "earthspirit") {
        thirdHeroMsg.textContent = "Lycan: 41.09% | Lone Druid: 50.98% | Death Prophet: 49.02% | Razor: 48.09% | Leshrac: 46.77%";
    } else if (el.value === "earthshaker") {
        thirdHeroMsg.textContent = "Tiny: 57.67% | Io: 61.66 | Lifestealer: 55.09% | Puck: 61.32% | Earth Spirit: 56.83%";
    } else if (el.value === "eldertitan") {
        thirdHeroMsg.textContent = "Lifestealer: 55.93% | Clinkz: 48.53% | Templar Assassin: 57.74% | Drow Ranger: 48.53% | Ember Spirit: 53.13%";
    } else if (el.value === "emberspirit") {
        thirdHeroMsg.textContent = "Huskar: 44.79% | Outworld Devourer: 51.46% | Lifestealer: 50.79 | Oracle: 49.50 | Drow Ranger: 42.52%";
    } else if (el.value === "enchantress") {
        thirdHeroMsg.textContent = "Phantom Assassin: 44.54% | Phantom Assassin: 46.28% | Tinker: 48.44% | Pugna: 50.22% | Arc Warden: 48.20%";
    } else if (el.value === "enigma") {
        thirdHeroMsg.textContent = "Spectre: 37.74% | Medusa: 49.15% | Sniper: 48.13% | Riki: 39.08% | Drow Ranger: 45.86%";
    } else if (el.value === "facelessvoid") {
        thirdHeroMsg.textContent = "Meepo: 42.03% | Naga Siren: 52.44% | Chaos Knight: 41.00% | Enchantress: 47.29% | Wraith King: 38.30%";
    } else if (el.value === "grimstroke") {
        thirdHeroMsg.textContent = "Io: 58.27% | Puck: 57.76% | Gyrocopter: 54.85% | Razor: 53.69 | Nature's Prophet: 55.66%";
    } else if (el.value === "gyrocopter") {
        thirdHeroMsg.textContent = "Spectre: 31.16% | Clockwerk: 38.99% | Underlord: 35.95% | Zeus: 34.11% | Silencer: 37.20%";
    } else if (el.value === "huskar") {
        thirdHeroMsg.textContent = "Chaos Knight: 36.40% | Phantom Lancer: 43.11% | Troll Warlord: 45.39% | Ancient Apparition: 39.28% | Viper: 46.10%";
    } else if (el.value === "invoker") {
        thirdHeroMsg.textContent = "Puck: 58.74% | Templar Assassin: 54.72% | Io: 60.16% | Lone Druid: 61.53% | Broodmother: 46.19%";
    } else if (el.value === "io") {
        thirdHeroMsg.textContent = "Lone Druid: 37.88% | Beastmaster: 33.75% | Leshrac: 35.40% | Lycan: 33.13% | Chen: 39.68%";
    } else if (el.value === "jackiro") {
        thirdHeroMsg.textContent = "Lifestealer: 53.64% | Clinkz: 46.10% | Juggernaut: 47.79% | Weaver: 46.69% | Huskar: 51.02%";
    } else if (el.value === "juggernaut") {
        thirdHeroMsg.textContent = "Morphling: 51.84% | Io: 59.98% | Lone Druid: 60.98% | Death Prophet: 57.31% | Ursa: 42.25%";
    } else if (el.value === "keeperofthelight") {
        thirdHeroMsg.textContent = "Phantom Assassin: 44.87% | Lifestealer: 51.06% | Huskar: 48.38% | Naga Siren: 51.75% | Storm Spirit: 45.81%";
    } else if (el.value === "kunka") {
        thirdHeroMsg.textContent = "Lifestealer: 50.15% | Death Prophet: 54.28% | Outworld Devourer: 52.60% | Winter Wyvern: 48.21% | Juggernaut: 45.39";
    } else if (el.value === "legioncommander") {
        thirdHeroMsg.textContent = "Winter Wyvern: 46.95% | Troll Warlord: 47.49% | Oracle: 49.32% | Medusa: 47.51% | Dazzle: 45.79%";
    } else if (el.value === "leshrac") {
        thirdHeroMsg.textContent = "Lifestealer: 46.89% | Pugna: 44.86% | Medusa: 44.03% | Bristleback: 40.88% | Undying: 37.04%";
    } else if (el.value === "lich") {
        thirdHeroMsg.textContent = "Huskar: 53.74% | Pugna: 54.56% | Weaver: 50.15% | Anti-Mage: 50.26% | Oracle: 56.13%";
    } else if (el.value === "lifestealer") {
        thirdHeroMsg.textContent = "Ursa: 35.44 | Troll Warlord: 43.18% | Medusa: 43.21% | Phantom Assassin: 40.44| Templar Assassin: 47.96%";
    } else if (el.value === "lina") {
        thirdHeroMsg.textContent = "Templar Asassin: 48.14% | Clockwerk: 40.45% | Pugna: 44.47% | Spectre: 32.73% | Gyrocopter: 49.46%";
    } else if (el.value === "lion") {
        thirdHeroMsg.textContent = "Pugna: 50.45% | Tiny: 55.60% | Death Prophet: 56.08% | Io: 59.25% | Gyrcopter: 55.74%";
    } else if (el.value === "lonedruid") {
        thirdHeroMsg.textContent = "Death Prophet: 41.82% | Beastmaster: 38.26% | Leshrac: 40.46% | Batrider: 44.45% | Gyrocopter: 43.85%";
    } else if (el.value === "luna") {
        thirdHeroMsg.textContent = "Spectre: 38.47% | Bristleback: 45.63% | Clockwerk: 46.61% | Shadow Demon: 50.43% | Zeus: 40.93%";
    } else if (el.value === "lycan") {
        thirdHeroMsg.textContent = "Bristleback: 41.55% | Naga Siren: 49.05% | Trolll Warlord: 45.95% | Beastmaster: 48.31% | Sven: 43.76%";
    } else if (el.value === "magnus") {
        thirdHeroMsg.textContent = "Spectre: 35.78% | Enigma: 44.18% | Sniper: 45.41% | Alchemist: 43.04% | Wraith King: 34.42%";
    } else if (el.value === "medusa") {
        thirdHeroMsg.textContent = "Keeper of the Light: 45.97% | Sniper: 45.06% | Nyx Assassin: 44.81% | Anti-Mage: 43.19% | Broodmother: 44.75%"
    } else if (el.value === "monkeyking") {
        thirdHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "meepo") {
        thirdHeroMsg.textContent = "Sven: 45.31% | Leshrac: 51.15% | Winter Wyvern: 48.63% | Earhtshaker: 45.99% | Lone Druid: 58.25%";
    } else if (el.value === "mirana") {
        thirdHeroMsg.textContent = "Bounty Hunter: 53.26% | Puck: 60.50% | Lone Druid: 62.52% | Techies: 51.72% | Io: 62.01%"; 
    } else if (el.value === "monkeyking") {
        thirdHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "morphling") {
        thirdHeroMsg.textContent = "Axe: 38.26% | Outworld Devourer: 48.57% | Ancient Apparition: 39.45% | Zeus: 36.43% | Techies: 45.03%";
    } else if (el.value === "nagasiren") {
        thirdHeroMsg.textContent = "Visage: 50.04% | Lycan: 51.19% | Broodmother: 48.54% | Io: 58.55% | Techies: 50.03%";
    } else if (el.value === "naturesprophet") {
        thirdHeroMsg.textContent = "Tidehunter: 49.97% | Io: 55.36% | Warlock: 40.22% | Visage: 42.86% | Winter Wyvern: 46.08%";
    } else if (el.value === "Necrophos") {
        thirdHeroMsg.textContent = "Spectre: 50.91% | Bristleback: 56.84% | Centaur Warrunner: 50.53% | Spirit Breaker: 53.23% | Dragon Knight: 56.46%";
    } else if (el.value === "nightstalker") {
        thirdHeroMsg.textContent = "Keeper of the Light: 51.86 | Lone Druid: 61.26% | Nyx Assassin: 49.07% | Clinkz: 48.00% | Storm Spirit: 48.56%";
    } else if (el.value === "nyxassassin") {
        thirdHeroMsg.textContent = "Lycan: 45.23% | Broodmother: 47.14% | Lifestealer: 51.52% | Templar Assassin: 53.33% | Juggernaut: 46.21%";
    } else if (el.value === "ogremagi") {
        thirdHeroMsg.textContent = "Phantom Lancer: 51.13% | Oracle: 54.84% | Io: 60.82% | Meepo: 46.53% | Chen: 58.49%";
    } else if (el.value === "omniknight") {
        thirdHeroMsg.textContent = "Razor: 52.90% | Enigma: 45.41% | Outworld Devourer: 52.18% | Dark Seer: 47.52% | Weaver: 46.72%";
    } else if (el.value === "oracle") {
        thirdHeroMsg.textContent = "Razor: 49.27: Enchantress: 47.13% | Chaos Knight: 37.55% | Bristleback: 42.77% | Shadow Demon: 46.89%";
    } else if (el.value === "outworlddevourer") {
        thirdHeroMsg.textContent = "Pugna: 41.33 | Tinker: 43.06% | Phantom Assassin: 39.83% | Arc Warden: 43.84% | Sniper: 42.65%";
    } else if (el.value === "pangolier") {
        thirdHeroMsg.textContent = "Bloodseeker: 39.50% | Faceless Void 42.87% | Naga Siren: 48.40% | Juggernaut: 41.25% | Centaur Warrunner: 35.78%";
    } else if (el.value === "phantomassassin") {
        thirdHeroMsg.textContent = "Morphling 52.18% | Puck: 61.06% | Razor: 57.44% | Tinker: 50.83% | Timbersaw: 55.29%";
    } else if (el.value === "phantomlancer") {
        thirdHeroMsg.textContent = "Timbersaw: 48.17% | Dark Seer: 44.30% | Ember Spirit: 44.98% | Leshrac: 50.08: Axe:40.41";
    } else if (el.value === "phoenix") {
        thirdHeroMsg.textContent = "Huskar: 50.80% | Anti-Mage: 47.00% | Oracle: 54.21% | Io: 59.74% | Arc Warden: 52.70%";
    } else if (el.value === "puck") {
        thirdHeroMsg.textContent = "Dragon Knight: 35.67% | Medusa: 39.19% | Spectre: 34.39% | Riki: 29.49% | Underlord: 34.40%";
    } else if (el.value === "pudge") {
        thirdHeroMsg.textContent = "Lone Druid: 63.45% | Death Prophet: 59.71% | Puck: 63.38% | Io: 61.87% | Nature's Prophet: 61.87%";
    } else if (el.value === "pugna") {
        thirdHeroMsg.textContent = "Huskar: 44.42% | Anti-Mage: 40.51% | Pudge: 40.69% | Lycan: 43.84% | Sniper: 44.97%";
    } else if (el.value === "queenofpain") {
        thirdHeroMsg.textContent = "Medusa: 44.82% | Huskar: 45.44 | Meepo: 40.44 | Riki: 37.25 | 54.99";
    } else if (el.value === "razor") {
        thirdHeroMsg.textContent = "Spectre: 37.93% | Chaos Knight: 35.14% | Enchantress: 45.16% | Weaver: 41.75% | Phantom Lancer: 42.56%";
    } else if (el.value === "riki") {
        thirdHeroMsg.textContent = "Bounty Hunter: 57.85% | Slardar: 58.56% | Lone Druid: 68.53% | Techies: 56.51% | Naga Siren: 61.71%";
    } else if (el.value === "rubick") {
        thirdHeroMsg.textContent = "Lycan: 42.81% | Templar Assassin: 49.59% | Lifestealer: 47.94% | Enchantress: 47.30% | Bristleback: 42.64%";
    } else if (el.value === "sandking") {
        thirdHeroMsg.textContent = "Zeus: 37.04% | Elder Titan: 40.54% | Phoenix: 40.12% | Underlord: 40.30% | Bristleback: 42.59%";
    } else if (el.value === "shadowdemon") {
        thirdHeroMsg.textContent = "Phantom Laner: 44.59% | Ember Spirit: 44.80% | Lycan: 44.19% | Timbersaw: 49.43% | Weaver: 44.86%";
    } else if (el.value === "shadowfiend") {
        thirdHeroMsg.textContent = "Templar Assassin: 49.93% | Zeus: 37.46% | Tinker: 45.96% | Techies: 46.24% | Pudge: 41.40%";
    } else if (el.value === "shadowshaman") {
        thirdHeroMsg.textContent = "Meepo: 46.75% | Phantom Lancer: 52.00% | Lone Druid: 64.80% | Arc Warden: 43.55% | Visage: 46.78%";
    } else if (el.value === "silencer") {
        thirdHeroMsg.textContent = "Broodmother: 46.90% | Lycan: 48.71% | Lone Druid: 62.26% | Phantom Lancer: 50.54% | Io: 59.30%";
    } else if (el.value === "skywrathmage") {
        thirdHeroMsg.textContent = "Chaos Knight: 40.23% | Pugna: 49.91% | Wraith King: 43.55% | Huskar: 49.80% | Centaur Warrunner: 40.36%";
    } else if (el.value === "slardar") {
        thirdHeroMsg.textContent = "Terrorblade: 40.51% | Tidehunter: 44.57% | Venomancer: 46.94% | Enigma: 44.27% | Phantom Lancer: 46.86%";
    } else if (el.value === "slark") {
        thirdHeroMsg.textContent = "Puck: 57.25% | Storm Spirit: 46.19% | Faceless Void: 47.05% | Lion: 47.54% | Necrophos: 42.75%";
    } else if (el.value === "sniper") {
        thirdHeroMsg.textContent = "Morphling: 49.15% | Strom Spirit: 44.90% | Nature Prophet: 56.32% | Lone Druid: 61.48% | Spectre: 41.45%";
    } else if (el.value === "spectre") {
        thirdHeroMsg.textContent = "Undying: 42.08% | Lifestealer: 52.70% | Viper: 51.04% | Anti-Mage: 46.53% | Broodmother: 47.79%";
    } else if (el.value === "spiritbreaker") {
        thirdHeroMsg.textContent = "Underlord: 47.29% | Necrophos: 47.05% | Dark Willow: 53.72% | Puck: 63.58% | Ember Spirit: 52.77%";
    } else if (el.value === "stormspirit") {
        thirdHeroMsg.textContent = "Anti-Mage: 42.82% | Meepo: 41.49% | Huskar: 48.78% | Medusa: 49.38% | Earth Spirit: 52.64%";
    } else if (el.value === "sven") {
        thirdHeroMsg.textContent = "Medusa: 49.54% | Troll Warlord: 49.86% | Spectre: 45.51% | Phoenix: 45.62% | Gyrocopter: 56.86%";
    } else if (el.value === "techies") {
        thirdHeroMsg.textContent = "Pudge: 41.63% | Spectre: 40.51% | Templar Assassin: 51.19% | Anti-Mage: 42.77% | Wraith King: 41.43%";
    } else if (el.value === "templarassassin") {
        thirdHeroMsg.textContent = "Phantom Lancer: 39.30% | Venomancer: 40.14% | Dark Seer: 40.36% | Naga Siren: 45.70% | Batrider: 47.79%";
    } else if (el.value === "terrorblade") {
        thirdHeroMsg.textContent = "Timbersaw: 53.55% | Tinker: 51.40% | Zeus: 44.60% | Axe: 46.15% | Lone Druid: 62.58%";
    } else if (el.value === "tinker") {
        thirdHeroMsg.textContent = "Pudge: 41.80% | Lifestealer: 50.02% | Spectre: 41.07% | Pugna: 48.88% | Clockwerk: 44.79";
    } else if (el.value === "tiny") {
        thirdHeroMsg.textContent = "Lifestealer: 42.79% | Huskar: 41.81% | Templar Assassin: 46.54% | Doom: 44.76% | Razor:47.75%";
    } else if (el.value === "treantprotector") {
        thirdHeroMsg.textContent = "Visage: 44.79% | Slark: 49.68% | Huskar: 51.83% | Oracle: 52.81% | Batrider: 58.00%";
    } else if (el.value === "trollwarlord") {
        thirdHeroMsg.textContent = "Axe: 41.92% | Gyrocopter: 54.00% | Windranger: 48.76% | Tinker: 48:38% | Batrider: 54.74%";
    } else if (el.value === "tusk") {
        thirdHeroMsg.textContent = "Underlord: 39.65% | Templar Assassin: 49.16% | Lycan: 42.91% | Medusa: 45.13 | Naga Siren: 49.33%";
    } else if (el.value === "underlord") {
        thirdHeroMsg.textContent = "Ursa: 43.88% | Broodmother: 48.11% | Sniper: 49.92% | Anti-Mage: 47.18% | Huskar: 51.74%";
    } else if (el.value === "undying") {
        thirdHeroMsg.textContent = "Anti-Mage: 47.35% | Medusa: 52.02% | Meepo: 46.97% | Phantom Lancer: 51.66% | Ember Spirit: 52.02%";
    } else if (el.value === "ursa") {
        thirdHeroMsg.textContent = "Razor: 56.72% | Phantom Lancer: 51.25% | Venomancer: 52.51% | Lone Druid: 64.58% | Templar Assassin: 58.50%";
    } else if (el.value === "vengefulspirit") {
        thirdHeroMsg.textContent = "Terrorblade: 46.67% | Phantom Lancer: 52.19% | Meepo: 48.36% | Naga Siren: 58.74% | Winter Wyvern: 53.62%";
    } else if (el.value === "venomancer") {
        thirdHeroMsg.textContent = "Huskar: 56.99% | Anti-Mage: 42.88% | Arc Warden: 47.14% | Dark Seer: 46.74% | Broodmother: 44.50";
    } else if (el.value === "viper") {
        thirdHeroMsg.textContent = "Chaos Knight: 37.62% | Terrorblade: 39.94% | Phantom Lancer: 45.48% | Juggernaut: 43.43% | Pudge: 42.22%";
    } else if (e.value === "visage") {
        thirdHeroMsg.textContent = "Medusa: 50.32% | Bristleback: 48.56% | Sniper: 50.40% | Axe: 45.58% | Drow Ranger: 48.32%";
    } else if (el.value === "warlock") {
        thirdHeroMsg.textContent = "Broodmother: 48.04% | Huskar: 53.66% | Brewmasther: 49.81% | Drow Ranger: 49.36% | Clinkz: 51.54%";
    } else if (el.value === "weaver") {
        thirdHeroMsg.textContent = "Faceless Void: 45.63% | Techies: 48.77% | Puck: 58.75% | Bounty Hunter: 52.35% | Drow Ranger: 45.39%";
    } else if (el.value === "windranger") {
        thirdHeroMsg.textContent = "Puck: 56.96% | Spectre: 41.60% | Centuar Warunner: 37.03% | Bristleback: 44.96% | Ember Spirit: 46.84%";
    } else if (el.value === "winterwyvern") {
        thirdHeroMsg.textContent = "Timbersaw: 49.99% | Anti-Mage: 43.81% | Pugna: 50.07% | Tinker: 49.27% | Huskar: 49.86%" 
    } else if (el.value === "witchdoctor") {
        thirdHeroMsg.textContent = "Morphling: 50.11% | Phantom Lancer: 48.19% | Broodmother: 46.03% | Chen: 54.64% | Riki: 40.35%"
    } else if (el.value === "wraithking") {
        thirdHeroMsg.textContent = "Phantom Lancer: 49.44% | Underlord: 46.41% | Undying: 45.41% | Anti-Mage: 48.28% | Timbersaw: 56.29%"
    } else if (el.value === "zeus") {
        thirdHeroMsg.textContent = "Huskar: 52.07 | Broodmother: 58.20% | Anti-Mage: 48.13% | Lifestealer: 56.21% | Lycan: 50.67";
    }
}

// fouth hero "else if"
const handle4Change = (el) => {
	console.log(`Changed to character ${el.value}`)
    if (el.value === "none") {
        fourthHeroMsg.textContent = "Counters will appear when a hero is selected.";
    } else if (el.value === "abbadon" ) {
        fourthHeroMsg.textContent = "Anti-Mage : 48.92% | Slark : 52.05% | Undying : 45.69% | Outworld Devourer : 57.45% | Enchantress 51.61%";
    } else if (el.value === "alchemist") {
        fourthHeroMsg.textContent = "Bloodseeker: 45.50% | Monkey King: 53.29% | Meepo: 45.92% | Razor: 56.29 | Slark: 50.12%";
    } else if (el.value === "ancientapparition") {
        fourthHeroMsg.textContent = "Huskar: 61.19% | Necrophos: 52.32% | Morphing: 60.27% | Underlord: 52.41% | Bristleback: 54.57%";
    } else if (el.value === "anti-mage") {
        fourthHeroMsg.textContent = "Meepo: 41.81% | Outworld Devourer: 52.87% | Phantom Assassin: 45.91% | Troll Warlord: 49.15% | Legion Commander: 49.73%";
    } else if (el.value === "arcwarden") {
        fourthHeroMsg.textContent = "Outworld Devourer: 60.49% | Techies: 54.17% | Venomancer: 53.43% | Disruptor: 55.20% | Templar Assassin: 58.54%";
    } else if (el.value === "axe") {
        fourthHeroMsg.textContent = "Death Prophet: 59.44% | Venomancer: 52.13% | Outworld Devourer: 58.04% | Timbersaw: 57.77% | Batrider: 61.31%";
    } else if (el.value === "bane") {
        fourthHeroMsg.textContent = "Enigma: 41.39% | Dark Seer: 42.89% | Chaos Knight: 37.93% | Meepo: 40.37% | Visage: 42.48%";
    } else if (el.value === "batrider") {
        fourthHeroMsg.textContent = "Death Prophet: 44.53% | Night Stalker: 40.04% | Weaver: 36.48% | Queen of Pain: 41.62% | Dazzle: 39.19%";
    } else if (el.value === "beastmaster") {
        fourthHeroMsg.textContent = "Death Prophet: 48.20% | Queen of Pain: 45.90% | Viper: 44.81% | Puck: 52.69% | Underlord: 39.14%";
    } else if (el.value === "bloodseeker") {
        fourthHeroMsg.textContent = "Tinker: 50.25% | Techies: 51.08% | Storm Spirit: 48.31% | Puck: 61.59% | Lone Druid: 64.12%";
    } else if (el.value === "bountyhunter") {
        fourthHeroMsg.textContent = "Puck: 52.57% | Naga Siren: 47.76% | Beastmaster: 45.76% | Chaos Knight: 37.75% | Phantom Lancer: 43.50%";
    } else if (el.value === "brewmaster") {
        fourthHeroMsg.textContent = "Dazzle: 47.21% | Weaver: 45.85% | Meepo: 45.85% | Dark Seer: 47.79% | Timbersaw: 52.61%";
    } else if (el.value === "bristleback") {
        fourthHeroMsg.textContent = "Slark: 47.54% | Viper: 50.04% | Silencer: 43.44% | Legion Commander: 50.14% | Keeper of the Light: 49.87%";
    } else if (el.value === "broodmother") {
        fourthHeroMsg.textContent = "Meepo: 39.94% | Batrider: 52.21% | Dark Seer: 44.24% | Earthshaker: 43.66% | Monkey King";
    } else if (el.value === "centaurwarrunner") {
        fourthHeroMsg.textContent = "Lifestealer: 56.81% | Bristleback: 52.01% | Lycan: 54.16% | Bloodseeker: 51.40% | Necrophos: 49.93%";
    } else if (el.value === "chaosknight") {
        fourthHeroMsg.textContent = "Medusa: 52.13% | Elder Titan: 46.84% | Underlord: 45.90% | Enigma: 49.62% | Sven: 50.31%";
    } else if (el.value === "chen") {
        fourthHeroMsg.textContent = "Beastmaster: 38.52% | Lone Druid: 49.25% | Underlord: 35.20% | Outworld Devourer: 45.16% | Faceless Void: 41.34%";
    } else if (el.value === "clinkz") {
        fourthHeroMsg.textContent = "Puck: 59.13% | Bounty Hunter: 53.26% | Slardar: 51.10% | Broodmother: 47.51% | Phantom Lancer: 49.24%";
    } else if (el.value === "clockwerk") {
        fourthHeroMsg.textContent = "Anti-Mage: 42.65% | Broodmother: 43.52% | Chen: 52.08% | Phantom Lancer: 46.29% | Huskar: 49.40%";
    } else if (el.value === "crystalmaiden") {
        fourthHeroMsg.textContent = "Io: 62.93% | Earth Spirit: 58.00% | Lifestealer: 58.34% | Gyrocopter: 61.94% | Magnus: 57.15%";
    } else if (el.value === "darkseer") {
        fourthHeroMsg.textContent = "Oracle: 48.18% | Anti-Mage: 43.64% | Elder Titan: 42.79% | Nature's Prophet: 54.97% | Underlord: 43.40%";
    } else if (el.value === "darkwillow") {
        fourthHeroMsg.textContent = "Naga Siren: 51.80% | Pugna: 49.75% | Oracle: 50.09% | Beastmaster: 51.97% | Venomancer: 48.86%";
    } else if (el.value === "dazzle") {
        fourthHeroMsg.textContent = "Ancient Apparition: 43.44% | Phantom Lancer: 47.53% | Gyrocopter: 55.13% | Tinker: 49.48% | Morphling: 52.07";
    } else if (el.value === "deathprophet") {
        fourthHeroMsg.textContent ="Medusa: 40.12% | Sniper: 40.12% | Shadow Fiend: 43.56% | Elder Titan: 36.33% | Dark Seer: 40.32%";
    } else if (el.value === "disruptor") {
        fourthHeroMsg.textContent = "Huskar: 47.00% | Enchantress: 46.26% | Lifestealer: 50.83% | Arc Warden: 46.72% | Wraith King: 38.15%";
    } else if (el.value === "doom") {
        fourthHeroMsg.textContent = "Meepo: 40.73% | Broodmother: 43.36% | Chaos Knight: 39.41% | Bounty Hunter: 48.71% | Enchantress: 45.49%";
    } else if (el.value === "dragonknight") {
        fourthHeroMsg.textContent = "Slark: 48.45% | Outworld Devourer: 53.99% | Underlord: 43.63% | Necrophos: 43.37% | Death Prophet: 56.34%";
    } else if (el.value === "drowranger") {
        fourthHeroMsg.textContent = "Phantom Lancer: 49.62% | Phantom Assassin: 48.93 | Tinker: 51.93% | Bounty Hunter: 55.29% | Slark: 51.64%";
    } else if (el.value === "earthspirit") {
        fourthHeroMsg.textContent = "Lycan: 41.09% | Lone Druid: 50.98% | Death Prophet: 49.02% | Razor: 48.09% | Leshrac: 46.77%";
    } else if (el.value === "earthshaker") {
        fourthHeroMsg.textContent = "Tiny: 57.67% | Io: 61.66 | Lifestealer: 55.09% | Puck: 61.32% | Earth Spirit: 56.83%";
    } else if (el.value === "eldertitan") {
        fourthHeroMsg.textContent = "Lifestealer: 55.93% | Clinkz: 48.53% | Templar Assassin: 57.74% | Drow Ranger: 48.53% | Ember Spirit: 53.13%";
    } else if (el.value === "emberspirit") {
        fourthHeroMsg.textContent = "Huskar: 44.79% | Outworld Devourer: 51.46% | Lifestealer: 50.79 | Oracle: 49.50 | Drow Ranger: 42.52%";
    } else if (el.value === "enchantress") {
        fourthHeroMsg.textContent = "Phantom Assassin: 44.54% | Phantom Assassin: 46.28% | Tinker: 48.44% | Pugna: 50.22% | Arc Warden: 48.20%";
    } else if (el.value === "enigma") {
        fourthHeroMsg.textContent = "Spectre: 37.74% | Medusa: 49.15% | Sniper: 48.13% | Riki: 39.08% | Drow Ranger: 45.86%";
    } else if (el.value === "facelessvoid") {
        fourthHeroMsg.textContent = "Meepo: 42.03% | Naga Siren: 52.44% | Chaos Knight: 41.00% | Enchantress: 47.29% | Wraith King: 38.30%";
    } else if (el.value === "grimstroke") {
        fourthHeroMsg.textContent = "Io: 58.27% | Puck: 57.76% | Gyrocopter: 54.85% | Razor: 53.69 | Nature's Prophet: 55.66%";
    } else if (el.value === "gyrocopter") {
        fourthHeroMsg.textContent = "Spectre: 31.16% | Clockwerk: 38.99% | Underlord: 35.95% | Zeus: 34.11% | Silencer: 37.20%";
    } else if (el.value === "huskar") {
        fourthHeroMsg.textContent = "Chaos Knight: 36.40% | Phantom Lancer: 43.11% | Troll Warlord: 45.39% | Ancient Apparition: 39.28% | Viper: 46.10%";
    } else if (el.value === "invoker") {
        fourthHeroMsg.textContent = "Puck: 58.74% | Templar Assassin: 54.72% | Io: 60.16% | Lone Druid: 61.53% | Broodmother: 46.19%";
    } else if (el.value === "io") {
        fourthHeroMsg.textContent = "Lone Druid: 37.88% | Beastmaster: 33.75% | Leshrac: 35.40% | Lycan: 33.13% | Chen: 39.68%";
    } else if (el.value === "jackiro") {
        fourthHeroMsg.textContent = "Lifestealer: 53.64% | Clinkz: 46.10% | Juggernaut: 47.79% | Weaver: 46.69% | Huskar: 51.02%";
    } else if (el.value === "juggernaut") {
        fourthHeroMsg.textContent = "Morphling: 51.84% | Io: 59.98% | Lone Druid: 60.98% | Death Prophet: 57.31% | Ursa: 42.25%";
    } else if (el.value === "keeperofthelight") {
        fourthHeroMsg.textContent = "Phantom Assassin: 44.87% | Lifestealer: 51.06% | Huskar: 48.38% | Naga Siren: 51.75% | Storm Spirit: 45.81%";
    } else if (el.value === "kunka") {
        fourthHeroMsg.textContent = "Lifestealer: 50.15% | Death Prophet: 54.28% | Outworld Devourer: 52.60% | Winter Wyvern: 48.21% | Juggernaut: 45.39";
    } else if (el.value === "legioncommander") {
        fourthHeroMsg.textContent = "Winter Wyvern: 46.95% | Troll Warlord: 47.49% | Oracle: 49.32% | Medusa: 47.51% | Dazzle: 45.79%";
    } else if (el.value === "leshrac") {
        fourthHeroMsg.textContent = "Lifestealer: 46.89% | Pugna: 44.86% | Medusa: 44.03% | Bristleback: 40.88% | Undying: 37.04%";
    } else if (el.value === "lich") {
        fourthHeroMsg.textContent = "Huskar: 53.74% | Pugna: 54.56% | Weaver: 50.15% | Anti-Mage: 50.26% | Oracle: 56.13%";
    } else if (el.value === "lifestealer") {
        fourthHeroMsg.textContent = "Ursa: 35.44 | Troll Warlord: 43.18% | Medusa: 43.21% | Phantom Assassin: 40.44| Templar Assassin: 47.96%";
    } else if (el.value === "lina") {
        fourthHeroMsg.textContent = "Templar Asassin: 48.14% | Clockwerk: 40.45% | Pugna: 44.47% | Spectre: 32.73% | Gyrocopter: 49.46%";
    } else if (el.value === "lion") {
        fourthHeroMsg.textContent = "Pugna: 50.45% | Tiny: 55.60% | Death Prophet: 56.08% | Io: 59.25% | Gyrcopter: 55.74%";
    } else if (el.value === "lonedruid") {
        fourthHeroMsg.textContent = "Death Prophet: 41.82% | Beastmaster: 38.26% | Leshrac: 40.46% | Batrider: 44.45% | Gyrocopter: 43.85%";
    } else if (el.value === "luna") {
        fourthHeroMsg.textContent = "Spectre: 38.47% | Bristleback: 45.63% | Clockwerk: 46.61% | Shadow Demon: 50.43% | Zeus: 40.93%";
    } else if (el.value === "lycan") {
        fourthHeroMsg.textContent = "Bristleback: 41.55% | Naga Siren: 49.05% | Trolll Warlord: 45.95% | Beastmaster: 48.31% | Sven: 43.76%";
    } else if (el.value === "magnus") {
        fourthHeroMsg.textContent = "Spectre: 35.78% | Enigma: 44.18% | Sniper: 45.41% | Alchemist: 43.04% | Wraith King: 34.42%";
    } else if (el.value === "medusa") {
        fourthHeroMsg.textContent = "Keeper of the Light: 45.97% | Sniper: 45.06% | Nyx Assassin: 44.81% | Anti-Mage: 43.19% | Broodmother: 44.75%"
    } else if (el.value === "monkeyking") {
        fourthHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "meepo") {
        fourthHeroMsg.textContent = "Sven: 45.31% | Leshrac: 51.15% | Winter Wyvern: 48.63% | Earhtshaker: 45.99% | Lone Druid: 58.25%";
    } else if (el.value === "mirana") {
        fourthHeroMsg.textContent = "Bounty Hunter: 53.26% | Puck: 60.50% | Lone Druid: 62.52% | Techies: 51.72% | Io: 62.01%"; 
    } else if (el.value === "monkeyking") {
        fourthHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "morphling") {
        fourthHeroMsg.textContent = "Axe: 38.26% | Outworld Devourer: 48.57% | Ancient Apparition: 39.45% | Zeus: 36.43% | Techies: 45.03%";
    } else if (el.value === "nagasiren") {
        fourthHeroMsg.textContent = "Visage: 50.04% | Lycan: 51.19% | Broodmother: 48.54% | Io: 58.55% | Techies: 50.03%";
    } else if (el.value === "naturesprophet") {
        fourthHeroMsg.textContent = "Tidehunter: 49.97% | Io: 55.36% | Warlock: 40.22% | Visage: 42.86% | Winter Wyvern: 46.08%";
    } else if (el.value === "Necrophos") {
        fourthHeroMsg.textContent = "Spectre: 50.91% | Bristleback: 56.84% | Centaur Warrunner: 50.53% | Spirit Breaker: 53.23% | Dragon Knight: 56.46%";
    } else if (el.value === "nightstalker") {
        fourthHeroMsg.textContent = "Keeper of the Light: 51.86 | Lone Druid: 61.26% | Nyx Assassin: 49.07% | Clinkz: 48.00% | Storm Spirit: 48.56%";
    } else if (el.value === "nyxassassin") {
        fourthHeroMsg.textContent = "Lycan: 45.23% | Broodmother: 47.14% | Lifestealer: 51.52% | Templar Assassin: 53.33% | Juggernaut: 46.21%";
    } else if (el.value === "ogremagi") {
        fourthHeroMsg.textContent = "Phantom Lancer: 51.13% | Oracle: 54.84% | Io: 60.82% | Meepo: 46.53% | Chen: 58.49%";
    } else if (el.value === "omniknight") {
        fourthHeroMsg.textContent = "Razor: 52.90% | Enigma: 45.41% | Outworld Devourer: 52.18% | Dark Seer: 47.52% | Weaver: 46.72%";
    } else if (el.value === "oracle") {
        fourthHeroMsg.textContent = "Razor: 49.27: Enchantress: 47.13% | Chaos Knight: 37.55% | Bristleback: 42.77% | Shadow Demon: 46.89%";
    } else if (el.value === "outworlddevourer") {
        fourthHeroMsg.textContent = "Pugna: 41.33 | Tinker: 43.06% | Phantom Assassin: 39.83% | Arc Warden: 43.84% | Sniper: 42.65%";
    } else if (el.value === "pangolier") {
        fourthHeroMsg.textContent = "Bloodseeker: 39.50% | Faceless Void 42.87% | Naga Siren: 48.40% | Juggernaut: 41.25% | Centaur Warrunner: 35.78%";
    } else if (el.value === "phantomassassin") {
        fourthHeroMsg.textContent = "Morphling 52.18% | Puck: 61.06% | Razor: 57.44% | Tinker: 50.83% | Timbersaw: 55.29%";
    } else if (el.value === "phantomlancer") {
        fourthHeroMsg.textContent = "Timbersaw: 48.17% | Dark Seer: 44.30% | Ember Spirit: 44.98% | Leshrac: 50.08: Axe:40.41";
    } else if (el.value === "phoenix") {
        fourthHeroMsg.textContent = "Huskar: 50.80% | Anti-Mage: 47.00% | Oracle: 54.21% | Io: 59.74% | Arc Warden: 52.70%";
    } else if (el.value === "puck") {
        fourthHeroMsg.textContent = "Dragon Knight: 35.67% | Medusa: 39.19% | Spectre: 34.39% | Riki: 29.49% | Underlord: 34.40%";
    } else if (el.value === "pudge") {
        fourthHeroMsg.textContent = "Lone Druid: 63.45% | Death Prophet: 59.71% | Puck: 63.38% | Io: 61.87% | Nature's Prophet: 61.87%";
    } else if (el.value === "pugna") {
        fourthHeroMsg.textContent = "Huskar: 44.42% | Anti-Mage: 40.51% | Pudge: 40.69% | Lycan: 43.84% | Sniper: 44.97%";
    } else if (el.value === "queenofpain") {
        fourthHeroMsg.textContent = "Medusa: 44.82% | Huskar: 45.44 | Meepo: 40.44 | Riki: 37.25 | 54.99";
    } else if (el.value === "razor") {
        fourthHeroMsg.textContent = "Spectre: 37.93% | Chaos Knight: 35.14% | Enchantress: 45.16% | Weaver: 41.75% | Phantom Lancer: 42.56%";
    } else if (el.value === "riki") {
        fourthHeroMsg.textContent = "Bounty Hunter: 57.85% | Slardar: 58.56% | Lone Druid: 68.53% | Techies: 56.51% | Naga Siren: 61.71%";
    } else if (el.value === "rubick") {
        fourthHeroMsg.textContent = "Lycan: 42.81% | Templar Assassin: 49.59% | Lifestealer: 47.94% | Enchantress: 47.30% | Bristleback: 42.64%";
    } else if (el.value === "sandking") {
        fourthHeroMsg.textContent = "Zeus: 37.04% | Elder Titan: 40.54% | Phoenix: 40.12% | Underlord: 40.30% | Bristleback: 42.59%";
    } else if (el.value === "shadowdemon") {
        fourthHeroMsg.textContent = "Phantom Laner: 44.59% | Ember Spirit: 44.80% | Lycan: 44.19% | Timbersaw: 49.43% | Weaver: 44.86%";
    } else if (el.value === "shadowfiend") {
        fourthHeroMsg.textContent = "Templar Assassin: 49.93% | Zeus: 37.46% | Tinker: 45.96% | Techies: 46.24% | Pudge: 41.40%";
    } else if (el.value === "shadowshaman") {
        fourthHeroMsg.textContent = "Meepo: 46.75% | Phantom Lancer: 52.00% | Lone Druid: 64.80% | Arc Warden: 43.55% | Visage: 46.78%";
    } else if (el.value === "silencer") {
        fourthHeroMsg.textContent = "Broodmother: 46.90% | Lycan: 48.71% | Lone Druid: 62.26% | Phantom Lancer: 50.54% | Io: 59.30%";
    } else if (el.value === "skywrathmage") {
        fourthHeroMsg.textContent = "Chaos Knight: 40.23% | Pugna: 49.91% | Wraith King: 43.55% | Huskar: 49.80% | Centaur Warrunner: 40.36%";
    } else if (el.value === "slardar") {
        fourthHeroMsg.textContent = "Terrorblade: 40.51% | Tidehunter: 44.57% | Venomancer: 46.94% | Enigma: 44.27% | Phantom Lancer: 46.86%";
    } else if (el.value === "slark") {
        fourthHeroMsg.textContent = "Puck: 57.25% | Storm Spirit: 46.19% | Faceless Void: 47.05% | Lion: 47.54% | Necrophos: 42.75%";
    } else if (el.value === "sniper") {
        fourthHeroMsg.textContent = "Morphling: 49.15% | Strom Spirit: 44.90% | Nature Prophet: 56.32% | Lone Druid: 61.48% | Spectre: 41.45%";
    } else if (el.value === "spectre") {
        fourthHeroMsg.textContent = "Undying: 42.08% | Lifestealer: 52.70% | Viper: 51.04% | Anti-Mage: 46.53% | Broodmother: 47.79%";
    } else if (el.value === "spiritbreaker") {
        fourthHeroMsg.textContent = "Underlord: 47.29% | Necrophos: 47.05% | Dark Willow: 53.72% | Puck: 63.58% | Ember Spirit: 52.77%";
    } else if (el.value === "stormspirit") {
        fourthHeroMsg.textContent = "Anti-Mage: 42.82% | Meepo: 41.49% | Huskar: 48.78% | Medusa: 49.38% | Earth Spirit: 52.64%";
    } else if (el.value === "sven") {
        fourthHeroMsg.textContent = "Medusa: 49.54% | Troll Warlord: 49.86% | Spectre: 45.51% | Phoenix: 45.62% | Gyrocopter: 56.86%";
    } else if (el.value === "techies") {
        fourthHeroMsg.textContent = "Pudge: 41.63% | Spectre: 40.51% | Templar Assassin: 51.19% | Anti-Mage: 42.77% | Wraith King: 41.43%";
    } else if (el.value === "templarassassin") {
        fourthHeroMsg.textContent = "Phantom Lancer: 39.30% | Venomancer: 40.14% | Dark Seer: 40.36% | Naga Siren: 45.70% | Batrider: 47.79%";
    } else if (el.value === "terrorblade") {
        fourthHeroMsg.textContent = "Timbersaw: 53.55% | Tinker: 51.40% | Zeus: 44.60% | Axe: 46.15% | Lone Druid: 62.58%";
    } else if (el.value === "tinker") {
        fourthHeroMsg.textContent = "Pudge: 41.80% | Lifestealer: 50.02% | Spectre: 41.07% | Pugna: 48.88% | Clockwerk: 44.79";
    } else if (el.value === "tiny") {
        fourthHeroMsg.textContent = "Lifestealer: 42.79% | Huskar: 41.81% | Templar Assassin: 46.54% | Doom: 44.76% | Razor:47.75%";
    } else if (el.value === "treantprotector") {
        fourthHeroMsg.textContent = "Visage: 44.79% | Slark: 49.68% | Huskar: 51.83% | Oracle: 52.81% | Batrider: 58.00%";
    } else if (el.value === "trollwarlord") {
        fourthHeroMsg.textContent = "Axe: 41.92% | Gyrocopter: 54.00% | Windranger: 48.76% | Tinker: 48:38% | Batrider: 54.74%";
    } else if (el.value === "tusk") {
        fourthHeroMsg.textContent = "Underlord: 39.65% | Templar Assassin: 49.16% | Lycan: 42.91% | Medusa: 45.13 | Naga Siren: 49.33%";
    } else if (el.value === "underlord") {
        fourthHeroMsg.textContent = "Ursa: 43.88% | Broodmother: 48.11% | Sniper: 49.92% | Anti-Mage: 47.18% | Huskar: 51.74%";
    } else if (el.value === "undying") {
        fourthHeroMsg.textContent = "Anti-Mage: 47.35% | Medusa: 52.02% | Meepo: 46.97% | Phantom Lancer: 51.66% | Ember Spirit: 52.02%";
    } else if (el.value === "ursa") {
        fourthHeroMsg.textContent = "Razor: 56.72% | Phantom Lancer: 51.25% | Venomancer: 52.51% | Lone Druid: 64.58% | Templar Assassin: 58.50%";
    } else if (el.value === "vengefulspirit") {
        fourthHeroMsg.textContent = "Terrorblade: 46.67% | Phantom Lancer: 52.19% | Meepo: 48.36% | Naga Siren: 58.74% | Winter Wyvern: 53.62%";
    } else if (el.value === "venomancer") {
        fourthHeroMsg.textContent = "Huskar: 56.99% | Anti-Mage: 42.88% | Arc Warden: 47.14% | Dark Seer: 46.74% | Broodmother: 44.50";
    } else if (el.value === "viper") {
        fourthHeroMsg.textContent = "Chaos Knight: 37.62% | Terrorblade: 39.94% | Phantom Lancer: 45.48% | Juggernaut: 43.43% | Pudge: 42.22%";
    } else if (e.value === "visage") {
        fourthHeroMsg.textContent = "Medusa: 50.32% | Bristleback: 48.56% | Sniper: 50.40% | Axe: 45.58% | Drow Ranger: 48.32%";
    } else if (el.value === "warlock") {
        fourthHeroMsg.textContent = "Broodmother: 48.04% | Huskar: 53.66% | Brewmasther: 49.81% | Drow Ranger: 49.36% | Clinkz: 51.54%";
    } else if (el.value === "weaver") {
        fourthHeroMsg.textContent = "Faceless Void: 45.63% | Techies: 48.77% | Puck: 58.75% | Bounty Hunter: 52.35% | Drow Ranger: 45.39%";
    } else if (el.value === "windranger") {
        fourthHeroMsg.textContent = "Puck: 56.96% | Spectre: 41.60% | Centuar Warunner: 37.03% | Bristleback: 44.96% | Ember Spirit: 46.84%";
    } else if (el.value === "winterwyvern") {
        fourthHeroMsg.textContent = "Timbersaw: 49.99% | Anti-Mage: 43.81% | Pugna: 50.07% | Tinker: 49.27% | Huskar: 49.86%" 
    } else if (el.value === "witchdoctor") {
        fourthHeroMsg.textContent = "Morphling: 50.11% | Phantom Lancer: 48.19% | Broodmother: 46.03% | Chen: 54.64% | Riki: 40.35%"
    } else if (el.value === "wraithking") {
        fourthHeroMsg.textContent = "Phantom Lancer: 49.44% | Underlord: 46.41% | Undying: 45.41% | Anti-Mage: 48.28% | Timbersaw: 56.29%"
    } else if (el.value === "zeus") {
        fourthHeroMsg.textContent = "Huskar: 52.07 | Broodmother: 58.20% | Anti-Mage: 48.13% | Lifestealer: 56.21% | Lycan: 50.67";
    }
}

//fifth hero "else is"
const handle5Change = (el) => {
	console.log(`Changed to character ${el.value}`)
    if (el.value === "none") {
        fifthHeroMsg.textContent = "Counters will appear when a hero is selected.";
    } else if (el.value === "abbadon" ) {
        fifthHeroMsg.textContent = "Anti-Mage : 48.92% | Slark : 52.05% | Undying : 45.69% | Outworld Devourer : 57.45% | Enchantress 51.61%";
    } else if (el.value === "alchemist") {
        fifthHeroMsg.textContent = "Bloodseeker: 45.50% | Monkey King: 53.29% | Meepo: 45.92% | Razor: 56.29 | Slark: 50.12%";
    } else if (el.value === "ancientapparition") {
        fifthHeroMsg.textContent = "Huskar: 61.19% | Necrophos: 52.32% | Morphing: 60.27% | Underlord: 52.41% | Bristleback: 54.57%";
    } else if (el.value === "anti-mage") {
        fifthHeroMsg.textContent = "Meepo: 41.81% | Outworld Devourer: 52.87% | Phantom Assassin: 45.91% | Troll Warlord: 49.15% | Legion Commander: 49.73%";
    } else if (el.value === "arcwarden") {
        fifthHeroMsg.textContent = "Outworld Devourer: 60.49% | Techies: 54.17% | Venomancer: 53.43% | Disruptor: 55.20% | Templar Assassin: 58.54%";
    } else if (el.value === "axe") {
        fifthHeroMsg.textContent = "Death Prophet: 59.44% | Venomancer: 52.13% | Outworld Devourer: 58.04% | Timbersaw: 57.77% | Batrider: 61.31%";
    } else if (el.value === "bane") {
        fifthHeroMsg.textContent = "Enigma: 41.39% | Dark Seer: 42.89% | Chaos Knight: 37.93% | Meepo: 40.37% | Visage: 42.48%";
    } else if (el.value === "batrider") {
        fifthHeroMsg.textContent = "Death Prophet: 44.53% | Night Stalker: 40.04% | Weaver: 36.48% | Queen of Pain: 41.62% | Dazzle: 39.19%";
    } else if (el.value === "beastmaster") {
        fifthHeroMsg.textContent = "Death Prophet: 48.20% | Queen of Pain: 45.90% | Viper: 44.81% | Puck: 52.69% | Underlord: 39.14%";
    } else if (el.value === "bloodseeker") {
        fifthHeroMsg.textContent = "Tinker: 50.25% | Techies: 51.08% | Storm Spirit: 48.31% | Puck: 61.59% | Lone Druid: 64.12%";
    } else if (el.value === "bountyhunter") {
        fifthHeroMsg.textContent = "Puck: 52.57% | Naga Siren: 47.76% | Beastmaster: 45.76% | Chaos Knight: 37.75% | Phantom Lancer: 43.50%";
    } else if (el.value === "brewmaster") {
        fifthHeroMsg.textContent = "Dazzle: 47.21% | Weaver: 45.85% | Meepo: 45.85% | Dark Seer: 47.79% | Timbersaw: 52.61%";
    } else if (el.value === "bristleback") {
        fifthHeroMsg.textContent = "Slark: 47.54% | Viper: 50.04% | Silencer: 43.44% | Legion Commander: 50.14% | Keeper of the Light: 49.87%";
    } else if (el.value === "broodmother") {
        fifthHeroMsg.textContent = "Meepo: 39.94% | Batrider: 52.21% | Dark Seer: 44.24% | Earthshaker: 43.66% | Monkey King";
    } else if (el.value === "centaurwarrunner") {
        fifthHeroMsg.textContent = "Lifestealer: 56.81% | Bristleback: 52.01% | Lycan: 54.16% | Bloodseeker: 51.40% | Necrophos: 49.93%";
    } else if (el.value === "chaosknight") {
        fifthHeroMsg.textContent = "Medusa: 52.13% | Elder Titan: 46.84% | Underlord: 45.90% | Enigma: 49.62% | Sven: 50.31%";
    } else if (el.value === "chen") {
        fifthHeroMsg.textContent = "Beastmaster: 38.52% | Lone Druid: 49.25% | Underlord: 35.20% | Outworld Devourer: 45.16% | Faceless Void: 41.34%";
    } else if (el.value === "clinkz") {
        fifthHeroMsg.textContent = "Puck: 59.13% | Bounty Hunter: 53.26% | Slardar: 51.10% | Broodmother: 47.51% | Phantom Lancer: 49.24%";
    } else if (el.value === "clockwerk") {
        fifthHeroMsg.textContent = "Anti-Mage: 42.65% | Broodmother: 43.52% | Chen: 52.08% | Phantom Lancer: 46.29% | Huskar: 49.40%";
    } else if (el.value === "crystalmaiden") {
        fifthHeroMsg.textContent = "Io: 62.93% | Earth Spirit: 58.00% | Lifestealer: 58.34% | Gyrocopter: 61.94% | Magnus: 57.15%";
    } else if (el.value === "darkseer") {
        fifthHeroMsg.textContent = "Oracle: 48.18% | Anti-Mage: 43.64% | Elder Titan: 42.79% | Nature's Prophet: 54.97% | Underlord: 43.40%";
    } else if (el.value === "darkwillow") {
        fifthHeroMsg.textContent = "Naga Siren: 51.80% | Pugna: 49.75% | Oracle: 50.09% | Beastmaster: 51.97% | Venomancer: 48.86%";
    } else if (el.value === "dazzle") {
        fifthHeroMsg.textContent = "Ancient Apparition: 43.44% | Phantom Lancer: 47.53% | Gyrocopter: 55.13% | Tinker: 49.48% | Morphling: 52.07";
    } else if (el.value === "deathprophet") {
        fifthHeroMsg.textContent ="Medusa: 40.12% | Sniper: 40.12% | Shadow Fiend: 43.56% | Elder Titan: 36.33% | Dark Seer: 40.32%";
    } else if (el.value === "disruptor") {
        fifthHeroMsg.textContent = "Huskar: 47.00% | Enchantress: 46.26% | Lifestealer: 50.83% | Arc Warden: 46.72% | Wraith King: 38.15%";
    } else if (el.value === "doom") {
        fifthHeroMsg.textContent = "Meepo: 40.73% | Broodmother: 43.36% | Chaos Knight: 39.41% | Bounty Hunter: 48.71% | Enchantress: 45.49%";
    } else if (el.value === "dragonknight") {
        fifthHeroMsg.textContent = "Slark: 48.45% | Outworld Devourer: 53.99% | Underlord: 43.63% | Necrophos: 43.37% | Death Prophet: 56.34%";
    } else if (el.value === "drowranger") {
        fifthHeroMsg.textContent = "Phantom Lancer: 49.62% | Phantom Assassin: 48.93 | Tinker: 51.93% | Bounty Hunter: 55.29% | Slark: 51.64%";
    } else if (el.value === "earthspirit") {
        fifthHeroMsg.textContent = "Lycan: 41.09% | Lone Druid: 50.98% | Death Prophet: 49.02% | Razor: 48.09% | Leshrac: 46.77%";
    } else if (el.value === "earthshaker") {
        fifthHeroMsg.textContent = "Tiny: 57.67% | Io: 61.66 | Lifestealer: 55.09% | Puck: 61.32% | Earth Spirit: 56.83%";
    } else if (el.value === "eldertitan") {
        fifthHeroMsg.textContent = "Lifestealer: 55.93% | Clinkz: 48.53% | Templar Assassin: 57.74% | Drow Ranger: 48.53% | Ember Spirit: 53.13%";
    } else if (el.value === "emberspirit") {
        fifthHeroMsg.textContent = "Huskar: 44.79% | Outworld Devourer: 51.46% | Lifestealer: 50.79 | Oracle: 49.50 | Drow Ranger: 42.52%";
    } else if (el.value === "enchantress") {
        fifthHeroMsg.textContent = "Phantom Assassin: 44.54% | Phantom Assassin: 46.28% | Tinker: 48.44% | Pugna: 50.22% | Arc Warden: 48.20%";
    } else if (el.value === "enigma") {
        fifthHeroMsg.textContent = "Spectre: 37.74% | Medusa: 49.15% | Sniper: 48.13% | Riki: 39.08% | Drow Ranger: 45.86%";
    } else if (el.value === "facelessvoid") {
        fifthHeroMsg.textContent = "Meepo: 42.03% | Naga Siren: 52.44% | Chaos Knight: 41.00% | Enchantress: 47.29% | Wraith King: 38.30%";
    } else if (el.value === "grimstroke") {
        fifthHeroMsg.textContent = "Io: 58.27% | Puck: 57.76% | Gyrocopter: 54.85% | Razor: 53.69 | Nature's Prophet: 55.66%";
    } else if (el.value === "gyrocopter") {
        fifthHeroMsg.textContent = "Spectre: 31.16% | Clockwerk: 38.99% | Underlord: 35.95% | Zeus: 34.11% | Silencer: 37.20%";
    } else if (el.value === "huskar") {
        fifthHeroMsg.textContent = "Chaos Knight: 36.40% | Phantom Lancer: 43.11% | Troll Warlord: 45.39% | Ancient Apparition: 39.28% | Viper: 46.10%";
    } else if (el.value === "invoker") {
        fifthHeroMsg.textContent = "Puck: 58.74% | Templar Assassin: 54.72% | Io: 60.16% | Lone Druid: 61.53% | Broodmother: 46.19%";
    } else if (el.value === "io") {
        fifthHeroMsg.textContent = "Lone Druid: 37.88% | Beastmaster: 33.75% | Leshrac: 35.40% | Lycan: 33.13% | Chen: 39.68%";
    } else if (el.value === "jackiro") {
        fifthHeroMsg.textContent = "Lifestealer: 53.64% | Clinkz: 46.10% | Juggernaut: 47.79% | Weaver: 46.69% | Huskar: 51.02%";
    } else if (el.value === "juggernaut") {
        fifthHeroMsg.textContent = "Morphling: 51.84% | Io: 59.98% | Lone Druid: 60.98% | Death Prophet: 57.31% | Ursa: 42.25%";
    } else if (el.value === "keeperofthelight") {
        fifthHeroMsg.textContent = "Phantom Assassin: 44.87% | Lifestealer: 51.06% | Huskar: 48.38% | Naga Siren: 51.75% | Storm Spirit: 45.81%";
    } else if (el.value === "kunka") {
        fifthHeroMsg.textContent = "Lifestealer: 50.15% | Death Prophet: 54.28% | Outworld Devourer: 52.60% | Winter Wyvern: 48.21% | Juggernaut: 45.39";
    } else if (el.value === "legioncommander") {
        fifthHeroMsg.textContent = "Winter Wyvern: 46.95% | Troll Warlord: 47.49% | Oracle: 49.32% | Medusa: 47.51% | Dazzle: 45.79%";
    } else if (el.value === "leshrac") {
        fifthHeroMsg.textContent = "Lifestealer: 46.89% | Pugna: 44.86% | Medusa: 44.03% | Bristleback: 40.88% | Undying: 37.04%";
    } else if (el.value === "lich") {
        fifthHeroMsg.textContent = "Huskar: 53.74% | Pugna: 54.56% | Weaver: 50.15% | Anti-Mage: 50.26% | Oracle: 56.13%";
    } else if (el.value === "lifestealer") {
        fifthHeroMsg.textContent = "Ursa: 35.44 | Troll Warlord: 43.18% | Medusa: 43.21% | Phantom Assassin: 40.44| Templar Assassin: 47.96%";
    } else if (el.value === "lina") {
        fifthHeroMsg.textContent = "Templar Asassin: 48.14% | Clockwerk: 40.45% | Pugna: 44.47% | Spectre: 32.73% | Gyrocopter: 49.46%";
    } else if (el.value === "lion") {
        fifthHeroMsg.textContent = "Pugna: 50.45% | Tiny: 55.60% | Death Prophet: 56.08% | Io: 59.25% | Gyrcopter: 55.74%";
    } else if (el.value === "lonedruid") {
        fifthHeroMsg.textContent = "Death Prophet: 41.82% | Beastmaster: 38.26% | Leshrac: 40.46% | Batrider: 44.45% | Gyrocopter: 43.85%";
    } else if (el.value === "luna") {
        fifthHeroMsg.textContent = "Spectre: 38.47% | Bristleback: 45.63% | Clockwerk: 46.61% | Shadow Demon: 50.43% | Zeus: 40.93%";
    } else if (el.value === "lycan") {
        fifthHeroMsg.textContent = "Bristleback: 41.55% | Naga Siren: 49.05% | Trolll Warlord: 45.95% | Beastmaster: 48.31% | Sven: 43.76%";
    } else if (el.value === "magnus") {
        fifthHeroMsg.textContent = "Spectre: 35.78% | Enigma: 44.18% | Sniper: 45.41% | Alchemist: 43.04% | Wraith King: 34.42%";
    } else if (el.value === "medusa") {
        fifthHeroMsg.textContent = "Keeper of the Light: 45.97% | Sniper: 45.06% | Nyx Assassin: 44.81% | Anti-Mage: 43.19% | Broodmother: 44.75%"
    } else if (el.value === "monkeyking") {
        fifthHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "meepo") {
        fifthHeroMsg.textContent = "Sven: 45.31% | Leshrac: 51.15% | Winter Wyvern: 48.63% | Earhtshaker: 45.99% | Lone Druid: 58.25%";
    } else if (el.value === "mirana") {
        fifthHeroMsg.textContent = "Bounty Hunter: 53.26% | Puck: 60.50% | Lone Druid: 62.52% | Techies: 51.72% | Io: 62.01%"; 
    } else if (el.value === "monkeyking") {
        fifthHeroMsg.textContent = "Batrider: 51.18% | Windranger: 46.36% | Tinker: 45.18% | Zues: 36.56% | Bounty Hunter: 48.50%";
    } else if (el.value === "morphling") {
        fifthHeroMsg.textContent = "Axe: 38.26% | Outworld Devourer: 48.57% | Ancient Apparition: 39.45% | Zeus: 36.43% | Techies: 45.03%";
    } else if (el.value === "nagasiren") {
        fifthHeroMsg.textContent = "Visage: 50.04% | Lycan: 51.19% | Broodmother: 48.54% | Io: 58.55% | Techies: 50.03%";
    } else if (el.value === "naturesprophet") {
        fifthHeroMsg.textContent = "Tidehunter: 49.97% | Io: 55.36% | Warlock: 40.22% | Visage: 42.86% | Winter Wyvern: 46.08%";
    } else if (el.value === "Necrophos") {
        fifthHeroMsg.textContent = "Spectre: 50.91% | Bristleback: 56.84% | Centaur Warrunner: 50.53% | Spirit Breaker: 53.23% | Dragon Knight: 56.46%";
    } else if (el.value === "nightstalker") {
        fifthHeroMsg.textContent = "Keeper of the Light: 51.86 | Lone Druid: 61.26% | Nyx Assassin: 49.07% | Clinkz: 48.00% | Storm Spirit: 48.56%";
    } else if (el.value === "nyxassassin") {
        fifthHeroMsg.textContent = "Lycan: 45.23% | Broodmother: 47.14% | Lifestealer: 51.52% | Templar Assassin: 53.33% | Juggernaut: 46.21%";
    } else if (el.value === "ogremagi") {
        fifthHeroMsg.textContent = "Phantom Lancer: 51.13% | Oracle: 54.84% | Io: 60.82% | Meepo: 46.53% | Chen: 58.49%";
    } else if (el.value === "omniknight") {
        fifthHeroMsg.textContent = "Razor: 52.90% | Enigma: 45.41% | Outworld Devourer: 52.18% | Dark Seer: 47.52% | Weaver: 46.72%";
    } else if (el.value === "oracle") {
        fifthHeroMsg.textContent = "Razor: 49.27: Enchantress: 47.13% | Chaos Knight: 37.55% | Bristleback: 42.77% | Shadow Demon: 46.89%";
    } else if (el.value === "outworlddevourer") {
        fifthHeroMsg.textContent = "Pugna: 41.33 | Tinker: 43.06% | Phantom Assassin: 39.83% | Arc Warden: 43.84% | Sniper: 42.65%";
    } else if (el.value === "pangolier") {
        fifthHeroMsg.textContent = "Bloodseeker: 39.50% | Faceless Void 42.87% | Naga Siren: 48.40% | Juggernaut: 41.25% | Centaur Warrunner: 35.78%";
    } else if (el.value === "phantomassassin") {
        fifthHeroMsg.textContent = "Morphling 52.18% | Puck: 61.06% | Razor: 57.44% | Tinker: 50.83% | Timbersaw: 55.29%";
    } else if (el.value === "phantomlancer") {
        fifthHeroMsg.textContent = "Timbersaw: 48.17% | Dark Seer: 44.30% | Ember Spirit: 44.98% | Leshrac: 50.08: Axe:40.41";
    } else if (el.value === "phoenix") {
        fifthHeroMsg.textContent = "Huskar: 50.80% | Anti-Mage: 47.00% | Oracle: 54.21% | Io: 59.74% | Arc Warden: 52.70%";
    } else if (el.value === "puck") {
        fifthHeroMsg.textContent = "Dragon Knight: 35.67% | Medusa: 39.19% | Spectre: 34.39% | Riki: 29.49% | Underlord: 34.40%";
    } else if (el.value === "pudge") {
        fifthHeroMsg.textContent = "Lone Druid: 63.45% | Death Prophet: 59.71% | Puck: 63.38% | Io: 61.87% | Nature's Prophet: 61.87%";
    } else if (el.value === "pugna") {
        fifthHeroMsg.textContent = "Huskar: 44.42% | Anti-Mage: 40.51% | Pudge: 40.69% | Lycan: 43.84% | Sniper: 44.97%";
    } else if (el.value === "queenofpain") {
        fifthHeroMsg.textContent = "Medusa: 44.82% | Huskar: 45.44 | Meepo: 40.44 | Riki: 37.25 | 54.99";
    } else if (el.value === "razor") {
        fifthHeroMsg.textContent = "Spectre: 37.93% | Chaos Knight: 35.14% | Enchantress: 45.16% | Weaver: 41.75% | Phantom Lancer: 42.56%";
    } else if (el.value === "riki") {
        fifthHeroMsg.textContent = "Bounty Hunter: 57.85% | Slardar: 58.56% | Lone Druid: 68.53% | Techies: 56.51% | Naga Siren: 61.71%";
    } else if (el.value === "rubick") {
        fifthHeroMsg.textContent = "Lycan: 42.81% | Templar Assassin: 49.59% | Lifestealer: 47.94% | Enchantress: 47.30% | Bristleback: 42.64%";
    } else if (el.value === "sandking") {
        fifthHeroMsg.textContent = "Zeus: 37.04% | Elder Titan: 40.54% | Phoenix: 40.12% | Underlord: 40.30% | Bristleback: 42.59%";
    } else if (el.value === "shadowdemon") {
        fifthHeroMsg.textContent = "Phantom Laner: 44.59% | Ember Spirit: 44.80% | Lycan: 44.19% | Timbersaw: 49.43% | Weaver: 44.86%";
    } else if (el.value === "shadowfiend") {
        fifthHeroMsg.textContent = "Templar Assassin: 49.93% | Zeus: 37.46% | Tinker: 45.96% | Techies: 46.24% | Pudge: 41.40%";
    } else if (el.value === "shadowshaman") {
        fifthHeroMsg.textContent = "Meepo: 46.75% | Phantom Lancer: 52.00% | Lone Druid: 64.80% | Arc Warden: 43.55% | Visage: 46.78%";
    } else if (el.value === "silencer") {
        fifthHeroMsg.textContent = "Broodmother: 46.90% | Lycan: 48.71% | Lone Druid: 62.26% | Phantom Lancer: 50.54% | Io: 59.30%";
    } else if (el.value === "skywrathmage") {
        fifthHeroMsg.textContent = "Chaos Knight: 40.23% | Pugna: 49.91% | Wraith King: 43.55% | Huskar: 49.80% | Centaur Warrunner: 40.36%";
    } else if (el.value === "slardar") {
        fifthHeroMsg.textContent = "Terrorblade: 40.51% | Tidehunter: 44.57% | Venomancer: 46.94% | Enigma: 44.27% | Phantom Lancer: 46.86%";
    } else if (el.value === "slark") {
        fifthHeroMsg.textContent = "Puck: 57.25% | Storm Spirit: 46.19% | Faceless Void: 47.05% | Lion: 47.54% | Necrophos: 42.75%";
    } else if (el.value === "sniper") {
        fifthHeroMsg.textContent = "Morphling: 49.15% | Strom Spirit: 44.90% | Nature Prophet: 56.32% | Lone Druid: 61.48% | Spectre: 41.45%";
    } else if (el.value === "spectre") {
        fifthHeroMsg.textContent = "Undying: 42.08% | Lifestealer: 52.70% | Viper: 51.04% | Anti-Mage: 46.53% | Broodmother: 47.79%";
    } else if (el.value === "spiritbreaker") {
        fifthHeroMsg.textContent = "Underlord: 47.29% | Necrophos: 47.05% | Dark Willow: 53.72% | Puck: 63.58% | Ember Spirit: 52.77%";
    } else if (el.value === "stormspirit") {
        fifthHeroMsg.textContent = "Anti-Mage: 42.82% | Meepo: 41.49% | Huskar: 48.78% | Medusa: 49.38% | Earth Spirit: 52.64%";
    } else if (el.value === "sven") {
        fifthHeroMsg.textContent = "Medusa: 49.54% | Troll Warlord: 49.86% | Spectre: 45.51% | Phoenix: 45.62% | Gyrocopter: 56.86%";
    } else if (el.value === "techies") {
        fifthHeroMsg.textContent = "Pudge: 41.63% | Spectre: 40.51% | Templar Assassin: 51.19% | Anti-Mage: 42.77% | Wraith King: 41.43%";
    } else if (el.value === "templarassassin") {
        fifthHeroMsg.textContent = "Phantom Lancer: 39.30% | Venomancer: 40.14% | Dark Seer: 40.36% | Naga Siren: 45.70% | Batrider: 47.79%";
    } else if (el.value === "terrorblade") {
        fifthHeroMsg.textContent = "Timbersaw: 53.55% | Tinker: 51.40% | Zeus: 44.60% | Axe: 46.15% | Lone Druid: 62.58%";
    } else if (el.value === "tinker") {
        fifthHeroMsg.textContent = "Pudge: 41.80% | Lifestealer: 50.02% | Spectre: 41.07% | Pugna: 48.88% | Clockwerk: 44.79";
    } else if (el.value === "tiny") {
        fifthHeroMsg.textContent = "Lifestealer: 42.79% | Huskar: 41.81% | Templar Assassin: 46.54% | Doom: 44.76% | Razor:47.75%";
    } else if (el.value === "treantprotector") {
        fifthHeroMsg.textContent = "Visage: 44.79% | Slark: 49.68% | Huskar: 51.83% | Oracle: 52.81% | Batrider: 58.00%";
    } else if (el.value === "trollwarlord") {
        fifthHeroMsg.textContent = "Axe: 41.92% | Gyrocopter: 54.00% | Windranger: 48.76% | Tinker: 48:38% | Batrider: 54.74%";
    } else if (el.value === "tusk") {
        fifthHeroMsg.textContent = "Underlord: 39.65% | Templar Assassin: 49.16% | Lycan: 42.91% | Medusa: 45.13 | Naga Siren: 49.33%";
    } else if (el.value === "underlord") {
        fifthHeroMsg.textContent = "Ursa: 43.88% | Broodmother: 48.11% | Sniper: 49.92% | Anti-Mage: 47.18% | Huskar: 51.74%";
    } else if (el.value === "undying") {
        fifthHeroMsg.textContent = "Anti-Mage: 47.35% | Medusa: 52.02% | Meepo: 46.97% | Phantom Lancer: 51.66% | Ember Spirit: 52.02%";
    } else if (el.value === "ursa") {
        fifthHeroMsg.textContent = "Razor: 56.72% | Phantom Lancer: 51.25% | Venomancer: 52.51% | Lone Druid: 64.58% | Templar Assassin: 58.50%";
    } else if (el.value === "vengefulspirit") {
        fifthHeroMsg.textContent = "Terrorblade: 46.67% | Phantom Lancer: 52.19% | Meepo: 48.36% | Naga Siren: 58.74% | Winter Wyvern: 53.62%";
    } else if (el.value === "venomancer") {
        fifthHeroMsg.textContent = "Huskar: 56.99% | Anti-Mage: 42.88% | Arc Warden: 47.14% | Dark Seer: 46.74% | Broodmother: 44.50";
    } else if (el.value === "viper") {
        fifthHeroMsg.textContent = "Chaos Knight: 37.62% | Terrorblade: 39.94% | Phantom Lancer: 45.48% | Juggernaut: 43.43% | Pudge: 42.22%";
    } else if (e.value === "visage") {
        fifthHeroMsg.textContent = "Medusa: 50.32% | Bristleback: 48.56% | Sniper: 50.40% | Axe: 45.58% | Drow Ranger: 48.32%";
    } else if (el.value === "warlock") {
        fifthHeroMsg.textContent = "Broodmother: 48.04% | Huskar: 53.66% | Brewmasther: 49.81% | Drow Ranger: 49.36% | Clinkz: 51.54%";
    } else if (el.value === "weaver") {
        fifthHeroMsg.textContent = "Faceless Void: 45.63% | Techies: 48.77% | Puck: 58.75% | Bounty Hunter: 52.35% | Drow Ranger: 45.39%";
    } else if (el.value === "windranger") {
        fifthHeroMsg.textContent = "Puck: 56.96% | Spectre: 41.60% | Centuar Warunner: 37.03% | Bristleback: 44.96% | Ember Spirit: 46.84%";
    } else if (el.value === "winterwyvern") {
        fifthHeroMsg.textContent = "Timbersaw: 49.99% | Anti-Mage: 43.81% | Pugna: 50.07% | Tinker: 49.27% | Huskar: 49.86%" 
    } else if (el.value === "witchdoctor") {
        fifthHeroMsg.textContent = "Morphling: 50.11% | Phantom Lancer: 48.19% | Broodmother: 46.03% | Chen: 54.64% | Riki: 40.35%"
    } else if (el.value === "wraithking") {
        fifthHeroMsg.textContent = "Phantom Lancer: 49.44% | Underlord: 46.41% | Undying: 45.41% | Anti-Mage: 48.28% | Timbersaw: 56.29%"
    } else if (el.value === "zeus") {
        fifthHeroMsg.textContent = "Huskar: 52.07 | Broodmother: 58.20% | Anti-Mage: 48.13% | Lifestealer: 56.21% | Lycan: 50.67";
    }
}

console.log('le fin');