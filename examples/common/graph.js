"use strict"

// import "https://d3js.org/d3.v7.min.js"

async function force_graph() {

  const $ = {
    width: window.innerWidth - 100,
    height: window.innerHeight - 200,
    nodes: [],
    people: {},
    skills: {},
    links: [],
  }

  const svg = d3.select("#canvas")

  var peopleIndex = {}
  people.forEach((p) => {
    p.type = 'person'
    $.nodes.push(p)
    $.people[p.id] = p
  })

  var skillsIndex = {}
  skills.forEach((s) => {
    s.type = 'skill'
    $.nodes.push(s)
    $.skills[s.id] = s
  })

  people_skills.forEach((ps) => {

    var person = $.people[ps.person]
    var skill = $.skills[ps.skill]
    if (person && skill) {
      console.log("〈" + person.name + " ↔️ " + skill.name + "〉")
      $.links.push(ps)
    } else {
      console.log("Broken link! " + ps.person + "(" + person + ") <-> " + ps.skill + "(" + skill + ")")
    }
  })

  svg
    .style("width", $.width + 'px')
    .style("height", $.height + 'px')

  const nodeElements = svg.append('g')
    .selectAll('circle')
    .data($.nodes)
    .enter().append('circle')
      .attr('r', 30)
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('class', node => "node " + node.type)

  const textElements = svg.append('g')
    .selectAll('text')
    .data($.nodes)
    .enter().append('text')
      .text(node => node.name)
      .attr('dx', 15)
      .attr('dy', -16)
      .attr('class', node => "node-label " + node.type)

  const linkElements = svg.append('g')
    .selectAll('line')
    .data($.links)
    .enter().append('line')
      .attr('class', "edge")

  d3.select('#d3-canary')
    .text("✅ ");



}
