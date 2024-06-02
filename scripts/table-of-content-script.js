const chapters = [
  {
    title: "Web Systems",
    link: "./html/web-systems.html",
    topics: [
      { title: "Mission Control Center", link: "#" },
      { title: "Client-Server Dynamic Pages", link: "#" },
      { title: "Map Reduce", link: "#" },
      { title: "Search Engine", link: "#" },
      { title: "SQL", link: "#" },
      { title: "UI/UX", link: "#" },
      { title: "Discord Bot", link: "#" },
      { title: "An Archive in Progress", link: "#" },
    ],
  },
  {
    title: "Extended Reality",
    link: "./html/extended-reality.html",
    topics: [
      { title: "DNAVR", link: "#" },
      { title: "A2Go", link: "#" },
      { title: "An Interpretation of 1695 BBB", link: "#" },
      { title: "Simple Magic Show", link: "#" },
    ],
  },
  {
    title: "Operating Systems",
    link: "./html/operating-systems.html",
    topics: [
      { title: "Thread Library", link: "#" },
      { title: "Memory Manager", link: "#" },
      { title: "File System", link: "#" },
    ],
  },
  {
    title: "Robotics",
    link: "./html/robotics.html",
    topics: [{ title: "LiDAR", link: "#" }],
  },
  {
    title: "Computer Vision",
    link: "./html/comp-vis.html",
    topics: [
      { title: "Image Resizing with Seam-Carving Algorithm", link: "#" },
    ],
  },
  {
    title: "Computer Organization and Algorithms",
    link: "./html/comp-org-and-alg.html",
    topics: [
      { title: "Caching", link: "#" },
      { title: "Pipelines", link: "#" },
    ],
  },
  {
    title: "Film and Media",
    link: "./html/film-and-media.html",
    topics: [
      { title: "Just Keep Swimming Animation", link: "#" },
      { title: "Art Process of a STAMPS Student", link: "#" },
      { title: "The Thing Between Us Short Film", link: "#" },
      { title: "Cece Promotional Video", link: "#" },
      { title: "Saved Short Film", link: "#" },
    ],
  },
  {
    title: "Art",
    link: "./html/art.html",
    topics: [
      { title: "Graphic Design", link: "#" },
      { title: "Paintings", link: "#" },
      { title: "Doodles", link: "#" },
    ],
  },
  {
    title: "Writing",
    link: "./html/writing.html",
    topics: [
      { title: "Screenwriting", link: "#" },
      { title: "Short stories", link: "#" },
      { title: "Novels", link: "#" },
      { title: "Poems", link: "#" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tableOfContents = document.querySelector(".table-of-contents");

  chapters.forEach((chapter) => {
    const chapterDiv = document.createElement("div");
    chapterDiv.classList.add("chapter");

    const chapterLink = document.createElement("a");
    chapterLink.href = chapter.link;

    const chapterTitle = document.createElement("h2");
    chapterTitle.style.fontWeight = "bold";
    chapterTitle.textContent = chapter.title;

    chapterLink.appendChild(chapterTitle);
    chapterDiv.appendChild(chapterLink);

    chapter.topics.forEach((topic) => {
      const topicDiv = document.createElement("div");
      topicDiv.classList.add("chapter-title");

      const topicLink = document.createElement("a");
      topicLink.href = topic.link; // Set the link for the topic
      topicLink.textContent = topic.title;

      const dashedLineDiv = document.createElement("div");
      dashedLineDiv.classList.add("dashed-line");

      topicDiv.appendChild(topicLink);
      topicDiv.appendChild(dashedLineDiv);

      chapterDiv.appendChild(topicDiv);
    });

    tableOfContents.appendChild(chapterDiv);
  });
});
