class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } 
        };
        
        mostPopular(){
            const requestParam = {
                apiKey: 'AIzaSyCbbDVhaJVCx_p2g3xUwD6seqhOGzM7lNg',
                q: '',
                part: 'snippet',
                maxResults: '25',
                chart: 'mostPopular'
            }
            
    
            return fetch(`https://www.googleapis.com/youtube/v3/videos?part=${requestParam.part}&chart=${requestParam.chart}&type=video&maxResults=${requestParam.maxResults}&key=${requestParam.apiKey}`, requestOptions)
                .then(response => response.json())  
                .then(result => {
                    setVideoData(result.items); setIsLoaded(true);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
            
    
        }
    }
}