class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&type=video&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    query = query ? query : "";

    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      ); //객체 안에 들어있는 id 값을 대체해줌. spread operator
  }
}

export default Youtube;
