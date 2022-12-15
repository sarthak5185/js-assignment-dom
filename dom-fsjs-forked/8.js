let ele = document.querySelectorAll("#SIvCob a");
for (let i = 0; i < ele.length; i++) {
  if (i % 2 == 1) {
    ele[i].remove();
  }
}
