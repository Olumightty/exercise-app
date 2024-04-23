'use server'
export async function getList(category){
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '281d5d4c91mshebc3cfe6f7f9310p1f7c42jsna573f47de0da',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try{
        const result = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${category}List`, options)
        const data = await result.json()
        return data
      }
      catch(error){
        return error.message
      }
} 

export async function getSuggestions(){
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '281d5d4c91mshebc3cfe6f7f9310p1f7c42jsna573f47de0da',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    
    try{
        const result = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=12', options)
        const data = await result.json()
        return data
    }
    catch(error){
        return error.message
    }
}
    