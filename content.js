(async () => {
  // Stop the page from loading
  window.stop();

  // Get the videoID
  const videoId = (new URLSearchParams(window.location.search)).get('v');

  // Body
  document.head.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      html {
        height: 100%;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        font-family: system-ui;
      }

      h1 {
        font-size: 24px;
      }

      .video {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        width: 800px;
        max-width: 100%;
      }

      .video iframe,
      .video object,
      .video embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    </style>
  `;

  // If necessary, stop the page from loading
  // TODO: Show a page
  if (document.referrer.startsWith('https://www.google.com') || !videoId) {
    document.body.innerHTML = `
      <h1>Sorry, you can't watch YouTube right now.</h1>
    `;
    return;
  }

  // Redirect
  // TODO: Show a page
  document.body.innerHTML = `
    <div>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `;
})();
