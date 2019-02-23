//AI의 테스트를 위해, AI vs AI 대결을 시키는 함수.
game.AIvsAI = async () => {
  const explain = $('#omok-explain');
  let i = 1,
      winner;

  if (game.AItestKey) return;
  game.AItestKey = 1;
  explain.innerHTML = '대결중...';
  game.stone.reset();

  while (!(winner = game.checkWin())) {
    try {
      game.stone.set(i + 1, ...AI(i + 1, game.stone.list));
      i = 1 - i;
    } catch (e) {
      i = 1;
      game.stone.reset();
      explain.innerHTML = '오목판이 가득 차서 재대결합니다.';
      await wait(1500);
      explain.innerHTML = '대결중...';
    }

    await wait(1);
  }

  explain.innerHTML = `${winner === BLACK? '흑' : '백'}돌 승리!`;
  game.AItestKey = 0;
}
