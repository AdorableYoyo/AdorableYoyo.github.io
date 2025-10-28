document.addEventListener('DOMContentLoaded', function() {
  const nodes = [
    { id: "You Wu", group: 1, size: 40, main: true },

    // Academic Background
    { id: "PhD", group: 2, size: 21 },
    { id: "CUNY", group: 2, size: 18 },
    { id: "Northeastern University", group: 2, size: 21 },
    { id: "Weill Cornell", group: 2, size: 18 },
    { id: "MS Data Science", group: 2, size: 16 },
    { id: "Electronic Engineering", group: 2, size: 16 },

    // Research Areas
    { id: "AI", group: 3, size: 28 },
    { id: "Large Language Models", group: 3, size: 21 },
    { id: "Multi-modal Learning", group: 3, size: 21 },
    { id: "Computational Biology", group: 3, size: 25 },
    { id: "Drug Discovery", group: 3, size: 25 },
    { id: "Precision Medicine", group: 3, size: 21 },

    // Experience & Interests
    { id: "Genentech", group: 4, size: 21 },
    { id: "Clinical Pharmacology", group: 4, size: 18 },
    { id: "Survival Prediction", group: 4, size: 18 },
    { id: "Genomics", group: 4, size: 18 },
    
    // Current Work
    { id: "Dark Matter Therapeutics", group: 4, size: 21 },
    { id: "Co-Founder", group: 4, size: 18 },
    { id: "AI/ML Scientist", group: 4, size: 18 },
    { id: "Postdoc", group: 4, size: 18 },

    // Personal
    { id: "Fashion", group: 5, size: 16 },
    { id: "Entrepreneurship", group: 5, size: 16 },
    
    // Hobbies
    { id: "Boxing", group: 5, size: 18 },
    { id: "Running", group: 5, size: 18 },

    // Big Questions
    { id: "Virtual Humans", group: 6, size: 21 },
    { id: "Disease Knowledge Transfer", group: 6, size: 18 },
    { id: "Universal Health Model", group: 6, size: 18 }
  ];

  const links = [
    // Academic connections
    { source: "You Wu", target: "PhD", value: 5 },
    { source: "PhD", target: "CUNY", value: 4 },
    { source: "PhD", target: "Weill Cornell", value: 3 },
    { source: "You Wu", target: "Northeastern University", value: 5 },
    { source: "Northeastern University", target: "Postdoc", value: 4 },
    { source: "You Wu", target: "MS Data Science", value: 3 },
    { source: "You Wu", target: "Electronic Engineering", value: 2 },

    // Research connections
    { source: "You Wu", target: "AI", value: 5 },
    { source: "AI", target: "Large Language Models", value: 4 },
    { source: "AI", target: "Multi-modal Learning", value: 4 },
    { source: "You Wu", target: "Computational Biology", value: 5 },
    { source: "You Wu", target: "Drug Discovery", value: 5 },
    { source: "You Wu", target: "Precision Medicine", value: 4 },

    // Research relationships
    { source: "Large Language Models", target: "Computational Biology", value: 3 },
    { source: "Multi-modal Learning", target: "Computational Biology", value: 3 },
    { source: "Computational Biology", target: "Drug Discovery", value: 4 },
    { source: "Drug Discovery", target: "Precision Medicine", value: 4 },

    // Experience connections
    { source: "You Wu", target: "Genentech", value: 4 },
    { source: "Genentech", target: "Clinical Pharmacology", value: 3 },
    { source: "Genentech", target: "Survival Prediction", value: 3 },
    { source: "Survival Prediction", target: "Genomics", value: 3 },
    { source: "Genomics", target: "Precision Medicine", value: 3 },
    
    // Current work connections
    { source: "You Wu", target: "Dark Matter Therapeutics", value: 5 },
    { source: "Dark Matter Therapeutics", target: "Co-Founder", value: 4 },
    { source: "Dark Matter Therapeutics", target: "AI/ML Scientist", value: 4 },
    { source: "Dark Matter Therapeutics", target: "Drug Discovery", value: 4 },
    { source: "Dark Matter Therapeutics", target: "Virtual Humans", value: 4 },
    { source: "AI/ML Scientist", target: "AI", value: 3 },
    { source: "Postdoc", target: "Drug Discovery", value: 3 },
    { source: "Postdoc", target: "Precision Medicine", value: 3 },

    // Personal connections
    { source: "You Wu", target: "Fashion", value: 2 },
    { source: "Fashion", target: "Entrepreneurship", value: 2 },
    { source: "Entrepreneurship", target: "Co-Founder", value: 3 },
    
    // Hobbies connections
    { source: "You Wu", target: "Boxing", value: 2 },
    { source: "You Wu", target: "Running", value: 2 },

    // Big Questions connections
    { source: "You Wu", target: "Virtual Humans", value: 4 },
    { source: "Virtual Humans", target: "Drug Discovery", value: 3 },
    { source: "You Wu", target: "Disease Knowledge Transfer", value: 3 },
    { source: "Disease Knowledge Transfer", target: "Universal Health Model", value: 2 },
    { source: "You Wu", target: "Universal Health Model", value: 3 }
  ];

  const width = 800;
  const height = 600;

  const svg = d3.select("#network-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  const color = d3.scaleOrdinal()
    .domain([1, 2, 3, 4, 5, 6])
    .range(["#ff9a9e", "#a1c4fd", "#d4fc79", "#ffecd2", "#ff8eb7", "#a5dee5"]);

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(d => 110))
    .force("charge", d3.forceManyBody().strength(-250))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.size + 10));

  const link = svg.append("g")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .call(drag(simulation));

  node.append("circle")
    .attr("r", d => d.size)
    .attr("fill", d => color(d.group))
    .attr("stroke", d => d.main ? "#000" : "#fff")
    .attr("stroke-width", d => d.main ? 2.5 : 1.5)
    .attr("fill-opacity", 0.85);

  node.append("text")
    .text(d => d.id)
    .attr("font-size", d => Math.max(12, d.size * 0.6) + "px")
    .attr("text-anchor", "middle")
    .attr("dy", d => d.size > 20 ? "0.35em" : "-0.7em")
    .attr("fill", d => d.main ? "#000" : "#333")
    .attr("font-weight", d => d.main ? "bold" : "normal")
    .attr("font-family", "Arial, sans-serif")
    .style("pointer-events", "none")
    .style("text-shadow", "0 0 2px white, 0 0 2px white");

  node.append("title")
    .text(d => d.id);

  simulation.on("tick", () => {
    // Constrain nodes to stay within bounds
    nodes.forEach(d => {
      d.x = Math.max(d.size, Math.min(width - d.size, d.x));
      d.y = Math.max(d.size, Math.min(height - d.size, d.y));
    });
    
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("transform", d => `translate(${d.x},${d.y})`);
  });

  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
});