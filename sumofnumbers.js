
function sumFor(list) {
  let total = 0;
  for(let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let pos = 0;
  while(pos < list.length) {
    total += list[pos++];
  }
  return total;
}

function sumRecursion(list) {
  return recurse(list, 0);
}

function recurse(list, pos) {
  if (pos < list.length) {
    return list[pos] + recurse(list, pos + 1);
  }
  return 0;
}

function sumTheSimpleWay(list) {
  let total = 0;
  _.each(list, function(elem) {
    total += elem;
  })
  return total;
}