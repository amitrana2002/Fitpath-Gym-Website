
export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY, 
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '9ba7a53589mshcb4db4897fbc442p1235dcjsn78ef6f1c3b85',
    },
  };

export const fetchData=async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}