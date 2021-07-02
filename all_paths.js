// nodes = ["A", "B", "C", "D", "E"];
// edges = { "A": ["B", "C"], "B": ["C", "A", "D"], "C": ["B", "A", "E"], "D": ["B", "E"], "E": ["C", "D"]}
nodes = ['A', 'B', 'C']
edges = { A: ['B', 'C'], B: ['C', 'A'], C: ['B', 'A'] }

global_visited_paths = []

src = 'A'
req_dest = 'A'
const initial_state = { current_visited_edges: [], current_node: src }

function clone_state (state) {
  return JSON.parse(JSON.stringify(state))
}

function find_all_paths (state, depth) {
  const cur = state.current_node
  const available_destinations = edges[cur]

  for (let i = 0; i < available_destinations.length; i++) {
    const dest = available_destinations[i]
    const cur_step = cur + dest

    if (state.current_visited_edges.includes(cur_step)) {
      continue
    }

    const new_state = clone_state(state)
    new_state.current_visited_edges.push(cur_step)
    new_state.current_node = dest

    if (dest == req_dest) {
      global_visited_paths.push(new_state.current_visited_edges)
    } else {
      find_all_paths(new_state, depth + 1)
    }
  }
}

console.log(' finding paths ...')
find_all_paths(initial_state, 0)
console.log(' find_paths_done ... ')
console.log(global_visited_paths)
