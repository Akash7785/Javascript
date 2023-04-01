let API = "AIzaSyD3-zdiLGucmyZdSl0Gl4ii7KIK7E54MP0";

let container = document.getElementById("container");

let getData = async () => {
  try {
    let query = document.getElementById("query").value;
    console.log(query);

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`
    );

    let { items } = await res.json();
    let array_of_videos = items;
    appendVideos(array_of_videos);
    console.log(array_of_videos);
  } catch (err) {
    console.log(err);
  }
};

let appendVideos = (data) => {
  container.innerHTML = null;
  data.forEach(
    ({
      id: { videoId },
      snippet: { title },
      snippet: {
        thumbnails: {
          high: { url },
        },
      },
    }) => {
      let div = document.createElement("div");

      let thumbDiv = document.createElement("img");
      thumbDiv.src = url;

      let name = document.createElement("h5");
      name.innerText = title;

      div.append(thumbDiv, title);

      div.onclick = () => {
        let clicked_video_data = {
          videoId: videoId,
          title: title,
        };
        localStorage.setItem(
          "clicked_video",
          JSON.stringify(clicked_video_data)
        );
        window.location.href = "play.html";
      };
      container.append(div);
    }
  );
};
