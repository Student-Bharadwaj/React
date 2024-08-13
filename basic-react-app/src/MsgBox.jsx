

function MsgBox({userName,textColor}) {
    let styles={color:textColor};
  return (
    <div>
      <h3 style={styles}>{userName}</h3>
      <h4>{textColor}</h4>
    </div>
  );
}

export default MsgBox;