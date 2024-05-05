'use server'
//Api heaser for all get requests
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '281d5d4c91mshebc3cfe6f7f9310p1f7c42jsna573f47de0da',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export async function getList(category){  
      try{
        const result = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${category}List`, options)
        const data = await result.json()
        return data
      }
      catch(error){
        return error.message
      }
}

//Object containing lists of the bodyPart, target and equipment
export async function categories(){
  return {
    bodyPart: await getList('bodyPart'),
    target: await getList('target'),
    equipment: await getList('equipment'),
  }
}

export async function getSuggestions(){
    await new Promise(resolve => setTimeout(resolve, 2000))
    try{
        const result = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=12', options)
        const data = await result.json()
        return data
    }
    catch(error){
        return error.message
    }
}

export async function getAnExercise(id){
  await new Promise(resolve => setTimeout(resolve, 2000))
  try{
    const result = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, options)
    const data = result.json()
    return data
  }
  catch(error){
    return error.message
  }
}

export async function getASpecificType(category,area){
  await new Promise(resolve => setTimeout(resolve, 2000))
  try{
    const result = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${category}/${area}`, options)
    const data = result.json()
    return data
  }
  catch(error){
    return error.message
  }
}
    