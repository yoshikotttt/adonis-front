const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};

export default Practice4;
