document.addEventListener('DOMContentLoaded', function () {
  const colors = [
    'red', 'blue',
    'purple', 'green',
    'yellow', 'black',
    'pink', 'skyblue'
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'C Programming'
  ];

  const glitch = Array.from(
    `~!@#$%^&*()+_|}{[]\\<>.,?/\`}'"`
  ).map(s =>
    `<span style="color:${colors.random()}">${s.escape('html')}</span>`
  );

  let index = 0;

  new Promise(
    res => window.addEventListener('scroll', function () {
      if (scrollY > $('#skills-page').offsetTop - innerHeight / 2.5)
        res();
    })
  ).then(showSkill);

  async function showSkill() {
    const skill = skills[index];
    let nowStr = '';

    if ($('#skills').innerHTML) {
      const len = $('#skills').innerHTML.length + 1;
      for (let i = 0; i < len; i++) {
        await wait(65);
        $('#skills').innerHTML = $('#skills').innerHTML.slice(0, len - i - 1);
      }
    }

    for (let i = 1; i < skill.length + 1; i++) {
      const prevStr = $('#skills').innerHTML;
      nowStr = skill.slice(0, i);
      for (let k = 0; k < glitch.length; k++) {
        $('#skills').innerHTML = prevStr + glitch[k];
        await wait(10);
      }
      $('#skills').innerHTML = nowStr;
    }

    if (++index >= skills.length)
      index = 0;

    await wait(1500);
    showSkill();
  }
});
