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
