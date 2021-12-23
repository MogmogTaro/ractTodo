import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();
  return (
    <div>
      <p>Page1DetailAです</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
