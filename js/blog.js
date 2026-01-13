const blogs = [
  {
    date: "2025-12-22",
    author: "Ankit Rai",
    title: "Cybersecurity Is Not a Tool Problem — It’s a Leadership Failure",
    desc: "Most organizations believe cybersecurity can be fixed by buying tools—firewalls, SIEMs, EDRs.",
    tags: [],
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop"
  
  },
  {
    date: "2025-12-22",
    author: "Ankit Rai",
    title: "Cybersecurity Is Not a Tool Problem — It’s a Leadership Failure",
    desc: "Most organizations believe cybersecurity can be fixed by buying tools—firewalls, SIEMs, EDRs.",
    tags: [],
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
  },
  {
    date: "2025-12-21",
    author: "Ankit Rai",
    title: "Cybersecurity Job Trends in India: Industry Update",
    desc: "Recent industry trends indicate rapid growth in cybersecurity roles across India.",
    tags: [],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
  },
  {
    date: "2025-12-20",
    author: "Ankit Rai",
    title: "Lucknow Emerging as a Cybersecurity Training Hub: Why It Matters",
    desc: "Cybersecurity training in Lucknow is growing due to increased digital adoption.",
    tags: [],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
  },
  {
    date: "2025-12-21",
    author: "Ankit Rai",
    title: "Cybersecurity Job Trends in India: Industry Update",
    desc: "Recent industry trends indicate rapid growth in cybersecurity roles across India.",
    tags: [],
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop"
    
  },
  {
    date: "2025-12-20",
    author: "Ankit Rai",
    title: "Lucknow Emerging as a Cybersecurity Training Hub: Why It Matters",
    desc: "Cybersecurity training in Lucknow is growing due to increased digital adoption.",
    tags: [],
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop"
    
  },
  {
    date: "2024-03-15",
    author: "Ankit Rai",
    title: "The Rise of AI in Cyber Attacks",
    desc: "How artificial intelligence is reshaping the landscape of modern cybersecurity threats and defense mechanisms.",
    tags: ["AI", "Cybersecurity", "Future Tech"],
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&auto=format&fit=crop"
    
  },
  {
    date: "2024-03-10",
    author: "Ankit Rai",
    title: "Zero Trust Architecture: A Must for Modern Enterprises",
    desc: "Why the traditional perimeter-based security model is obsolete and how Zero Trust provides a robust alternative.",
    tags: ["Zero Trust", "Enterprise Security", "Network Architecture"],
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop"
    
  },
];

const blogGrid = document.getElementById("blogGrid");

blogs.forEach(blog => {
  const card = document.createElement("div");
  card.className = "card";

  const tagsHTML = blog.tags.length
    ? `<div class="tags">
        ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>`
    : "";

  card.innerHTML = `
    <img src="${blog.img}" alt="Cybersecurity">
    <div class="card-body">
      <div class="meta">
        <span>📅 ${blog.date}</span>
        <span>✍️ ${blog.author}</span>
      </div>
      <h3>${blog.title}</h3>
      <p>${blog.desc}</p>
      ${tagsHTML}
      <a href="#" class="read">Read Article →</a>
    </div>
  `;

  blogGrid.appendChild(card);
});
