export function fetchAllMedicine(query) {
    return new Promise(async (resolve) =>{
      const response = await fetch(`https://backend.cappsule.co.in/api/v1/new_search?q=${query}&pharmacyIds=1,2,3`)
      const data = await response.json()
      
      resolve({data})
  });
  }