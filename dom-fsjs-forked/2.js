const ele = document.querySelectorAll(
  ".as-imagegrid .as-imagegrid--7up .as-imagegrid-item .as-imagegrid-item-title"
);
const array = [];
ele.forEach((e) => {
  array.push(e.innerText.split("\n")[0]);
});
console.log(array);
