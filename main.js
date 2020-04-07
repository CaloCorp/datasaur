/********************
 * HELPER FUNCTIONS *
 ********************/

const makeDino= function (species, period, diet, extinct= false){
const clonedDino= {

  species: species,
  period: period,
  carnivore: diet,
  extinct: extinct 
  
} 
return clonedDino
} 


  
const makeSingular = function(dino){
  const copyArray = {
      species: dino.species,
      period: dino.period,
      carnivore: dino.carnivore,
      extinct: dino.extinct,
    }
    if (copyArray.species.endsWith('us')){
      copyArray.species = copyArray.species.slice(0,copyArray.species.length - 2)}
      
    return copyArray
  }
const truncateSpecies = function (dino){
  const copy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
if (copy.species.length <10 ){
 copy.species = copy.species 
}
else{

copy.species = copy.species.slice(0,7) + "..."
}
 return copy
} 
const makeExtinct = function(dino){
const copy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  copy.extinct = true
  return copy
}

const isCarnivore = function (dino) {

  return (dino.carnivore === true)



}
 const isExtinct = function (dino){

 return (dino.extinct == true)
 }

 const isJurassic = function (dino){

  return (dino.period === "Jurassic")
 }

 const isTriassic = function (dino){
  
  return (dino.period === "Triassic")

 }

 const isCretaceous = function (dino){
  
  return (dino.period === "Cretaceous")


 }

const isFirstAlphabeticallyBySpecies = function(dino1, dino2){

if (dino1.species > dino2.species)
return 1

if (dino1.species < dino2.species){
  return -1 
}

return 0
}

const extinctIsLast = function (dino1, dino2){

  if (dino1.extinct > dino2.extinct)
return 1

if (dino1.extinct < dino2.extinct){
  return -1 
}

return 0
}

const carnivoreIsFirst = function(dino1,dino2){
  if (dino1.carnivore < dino2.carnivore)
  return 1
  
  if (dino1.carnivore > dino2.carnivore){
    return -1 
  }
  
  return 0
  }

  const isInPeriodOrder = (dino1,dino2) => {
    if(dino1.period < dino2.period){
    return 1
    } else if (dino1.period > dino2.period){
      return -1
    }
    return 0
    }

    const singularizeDinos = function(dino){

     return dino.map(makeSingular)
    }

    const makeAllExtinct = function (dino){
return dino.map(makeExtinct)
    }

    const truncateDinos = function (dino){

      return dino.map(truncateSpecies)
    }

    const carnivoresOnly = function(dino){

    return  dino.filter(isCarnivore)

    }
const isHerbavore = function (dino){

  return (dino.carnivore === false)
}
    const herbivoresOnly = function(dino){

      return dino.filter(isHerbavore)
    }

 const extinctOnly = function (dino){

  return dino.filter(isExtinct)
 }   

const isNotExtinct =function (dino){

  return (dino.extinct === false)
}

const notExtinct = function (dino){

  return (dino.filter(isNotExtinct))
}

const triassicOnly = function (dino){

  return dino.filter(isTriassic)
}

const isNotTriassic = function (dino){

  return (dino.period !== "Triassic")
}

const notTriassic = function (dino){

  return dino.filter(isNotTriassic)
}
const bySpecies = function (dino){
const copyDino = dino.slice()
  return copyDino.sort(isFirstAlphabeticallyBySpecies)
}

const byExtinctLast = function (dino){
  const copyDino = dino.slice()
 return copyDino.sort(extinctIsLast)
}

const byCarnivoresFirst = function (dino){
const clonedDino = dino.slice()

return clonedDino.sort(carnivoreIsFirst)

}

const byPeriod = function (dino){
const clonedDino = dino.slice()

return clonedDino.sort(isInPeriodOrder)
}
/***********************
 * ITERATION FUNCTIONS *
 **********************/



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
